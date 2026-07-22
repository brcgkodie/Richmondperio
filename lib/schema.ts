import {
  PRACTICE_NAME,
  SITE_URL,
  LOCATIONS,
} from "./constants";

const AVAILABLE_SERVICES = [
  { "@type": "MedicalProcedure", name: "Dental Implant Surgery" },
  { "@type": "MedicalProcedure", name: "Gum Grafting" },
  { "@type": "MedicalProcedure", name: "Bone Grafting" },
  { "@type": "MedicalProcedure", name: "Crown Lengthening" },
  { "@type": "MedicalProcedure", name: "Periodontal Disease Treatment" },
  { "@type": "MedicalProcedure", name: "Tooth Extractions" },
];

function hoursFor(loc: (typeof LOCATIONS)[number]) {
  return loc.hours
    .filter((h) => h.time !== "Closed")
    .map((h) => {
      const [opens, closes] = h.time.split(" – ");
      const to24 = (t: string) => {
        const [time, mer] = t.split(" ");
        const [hRaw, m] = time.split(":");
        let h = parseInt(hRaw, 10);
        if (mer === "PM" && h !== 12) h += 12;
        if (mer === "AM" && h === 12) h = 0;
        return `${String(h).padStart(2, "0")}:${m}`;
      };
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.days.split(" – "),
        opens: to24(opens),
        closes: to24(closes),
      };
    });
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": LOCATIONS.map((loc) => ({
      "@type": "MedicalClinic",
      "@id": `${SITE_URL}/locations/${loc.id}#clinic`,
      name: `${PRACTICE_NAME} — ${loc.name}`,
      description:
        "Board-certified periodontal and dental implant surgery practice serving Richmond and Midlothian, Virginia.",
      url: `${SITE_URL}/locations/${loc.id}`,
      telephone: loc.phoneTel,
      image: `${SITE_URL}${loc.image}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: loc.street,
        addressLocality: loc.city,
        addressRegion: loc.state,
        postalCode: loc.zip,
        addressCountry: "US",
      },
      medicalSpecialty: "Periodontics",
      availableService: AVAILABLE_SERVICES,
      openingHoursSpecification: hoursFor(loc),
      sameAs: [
        "https://www.instagram.com/owdperio/",
        "https://www.facebook.com/owdperio",
      ],
    })),
  };
}

export function generatePhysicianSchema(doctor: {
  name: string;
  credentials: string;
  education: readonly { readonly institution: string; readonly degree: string }[];
  memberships: readonly string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: `${doctor.name}, ${doctor.credentials}`,
    medicalSpecialty: "Periodontics",
    boardCertification: "American Board of Periodontology",
    alumniOf: doctor.education.map((edu) => ({
      "@type": "CollegeOrUniversity",
      name: edu.institution,
    })),
    memberOf: doctor.memberships.map((org) => ({
      "@type": "Organization",
      name: org,
    })),
    worksFor: {
      "@type": "MedicalClinic",
      name: PRACTICE_NAME,
    },
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  faqs: { question: string; answer: string }[];
}) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      name: service.name,
      description: service.description,
      howPerformed: "Surgical procedure performed by a board-certified periodontist",
      status: "https://schema.org/EventScheduled",
    },
    generateFAQSchema(service.faqs),
  ];
}
