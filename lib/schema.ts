import {
  PRACTICE_NAME,
  PRACTICE_PHONE,
  SITE_URL,
  LOCATIONS,
} from "./constants";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: PRACTICE_NAME,
    description:
      "Board-certified periodontal and dental implant surgery practice — Grove Periodontists — serving Richmond and Midlothian, Virginia.",
    url: SITE_URL,
    telephone: PRACTICE_PHONE,
    address: LOCATIONS.map((loc) => ({
      "@type": "PostalAddress",
      streetAddress: loc.street,
      addressLocality: loc.city,
      addressRegion: loc.state,
      postalCode: loc.zip,
    })),
    medicalSpecialty: "Periodontics",
    availableService: [
      { "@type": "MedicalProcedure", name: "Dental Implant Surgery" },
      { "@type": "MedicalProcedure", name: "Gum Grafting" },
      { "@type": "MedicalProcedure", name: "Bone Grafting" },
      { "@type": "MedicalProcedure", name: "Crown Lengthening" },
      {
        "@type": "MedicalProcedure",
        name: "Periodontal Disease Treatment",
      },
      { "@type": "MedicalProcedure", name: "Tooth Extractions" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/owdperio/",
      "https://www.facebook.com/owdperio",
    ],
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
