export const PRACTICE_NAME = "Richmond Periodontics & Dental Implants";
export const PRACTICE_SHORT = "Richmond Perio";
export const PRACTICE_PHONE = "+18043556593";
export const PRACTICE_PHONE_DISPLAY = "(804) 355-6593";
export const PRACTICE_EMAIL = "info@richmondperio.com";
export const SITE_URL = "https://richmondperio.com";

export const LOCATIONS = [
  {
    id: "richmond",
    name: "Grove Avenue Office",
    street: "4909 Grove Avenue",
    city: "Richmond",
    state: "VA",
    zip: "23226",
    phone: PRACTICE_PHONE_DISPLAY,
    mapUrl: "https://maps.google.com/?q=4909+Grove+Avenue+Richmond+VA+23226",
    hours: [
      { days: "Monday – Thursday", time: "8:00 AM – 5:00 PM" },
      { days: "Friday", time: "8:00 AM – 1:00 PM" },
      { days: "Saturday – Sunday", time: "Closed" },
    ],
  },
  {
    id: "midlothian",
    name: "Midlothian Office",
    street: "11301-B Polo Place",
    city: "Midlothian",
    state: "VA",
    zip: "23113",
    phone: PRACTICE_PHONE_DISPLAY,
    mapUrl:
      "https://maps.google.com/?q=11301-B+Polo+Place+Midlothian+VA+23113",
    hours: [
      { days: "Monday – Thursday", time: "8:00 AM – 5:00 PM" },
      { days: "Friday", time: "8:00 AM – 1:00 PM" },
      { days: "Saturday – Sunday", time: "Closed" },
    ],
  },
] as const;

export const METRICS = [
  { label: "Implants Placed", value: 877 },
  { label: "Grafts Completed", value: 1131 },
  { label: "Happy Patients", value: 1251 },
  { label: "Board-Certified Periodontists", value: 4 },
] as const;

export const SERVICES = [
  {
    slug: "dental-implants",
    title: "Dental Implants",
    shortDescription:
      "Permanent tooth replacement with titanium implants that look, feel, and function like natural teeth.",
    icon: "implant",
  },
  {
    slug: "gum-grafting",
    title: "Gum Grafting",
    shortDescription:
      "Restore receding gums with tissue grafting to protect tooth roots and improve your smile.",
    icon: "gum",
  },
  {
    slug: "bone-grafting",
    title: "Bone Grafting",
    shortDescription:
      "Rebuild bone volume to support dental implants and restore jaw structure.",
    icon: "bone",
  },
  {
    slug: "crown-lengthening",
    title: "Crown Lengthening",
    shortDescription:
      "Reshape gum and bone tissue to expose more tooth structure for restorations or cosmetic improvement.",
    icon: "crown",
  },
  {
    slug: "periodontal-disease-treatment",
    title: "Periodontal Disease Treatment",
    shortDescription:
      "Comprehensive treatment for gum disease from scaling and root planing to surgical intervention.",
    icon: "perio",
  },
  {
    slug: "tooth-extractions",
    title: "Tooth Extractions",
    shortDescription:
      "Gentle surgical extractions including wisdom teeth, with options for immediate implant placement.",
    icon: "extraction",
  },
] as const;

export const TEAM = [
  {
    slug: "kara-dunegan-gilliam",
    name: "Kara Dunegan Gilliam",
    credentials: "DDS, MS",
    title: "Board-Certified Periodontist",
    education: [
      {
        institution: "University of Virginia",
        degree: "Bachelor of Science",
      },
      {
        institution: "VCU School of Dentistry",
        degree: "Doctor of Dental Surgery",
      },
      {
        institution: "UT Health San Antonio",
        degree: "Certificate in Periodontics, Master of Science",
      },
    ],
    memberships: [
      "American Academy of Periodontology",
      "American Board of Periodontology",
      "McGuire Institute",
    ],
    bio: "Dr. Dunegan Gilliam is a board-certified periodontist specializing in dental implant surgery and regenerative procedures. She combines advanced surgical technique with a patient-first philosophy.",
    personal:
      "Outside of the practice, Dr. Dunegan enjoys sourdough baking, hiking Virginia's Blue Ridge trails, and spending time with her family.",
    image: "/images/team/kara-dunegan-gilliam.jpg",
  },
  {
    slug: "michael-shabahang",
    name: "Michael Shabahang",
    credentials: "DMD, MS, PhD",
    title: "Board-Certified Periodontist",
    education: [
      {
        institution: "University of Connecticut",
        degree: "Doctor of Dental Medicine",
      },
      {
        institution: "University of Connecticut",
        degree: "Certificate in Periodontics, MS, PhD",
      },
    ],
    memberships: [
      "American Academy of Periodontology",
      "American Board of Periodontology",
    ],
    bio: "Dr. Shabahang brings extensive research experience and clinical expertise in implantology and periodontal regeneration to the practice.",
    personal:
      "Dr. Shabahang is an avid reader and enjoys traveling with his family.",
    image: "/images/team/michael-shabahang.jpg",
  },
  {
    slug: "ashley-california",
    name: "Ashley California",
    credentials: "DDS, MS",
    title: "Board-Certified Periodontist",
    education: [
      { institution: "James Madison University", degree: "Bachelor of Science" },
      {
        institution: "VCU School of Dentistry",
        degree: "Doctor of Dental Surgery",
      },
      {
        institution: "VCU School of Dentistry",
        degree: "Certificate in Periodontics, Master of Science",
      },
    ],
    memberships: [
      "American Academy of Periodontology",
      "American Board of Periodontology",
    ],
    bio: "Dr. California specializes in periodontal plastic surgery and dental implant placement with a focus on minimally invasive techniques.",
    personal:
      "When she's not in the office, Dr. California enjoys running, cooking, and exploring Richmond's restaurant scene.",
    image: "/images/team/ashley-california.jpg",
  },
  {
    slug: "brian-miller",
    name: "Brian Miller",
    credentials: "DDS, MS",
    title: "Board-Certified Periodontist",
    education: [
      { institution: "Virginia Tech", degree: "Bachelor of Science" },
      {
        institution: "VCU School of Dentistry",
        degree: "Doctor of Dental Surgery",
      },
      {
        institution: "VCU School of Dentistry",
        degree: "Certificate in Periodontics, Master of Science",
      },
    ],
    memberships: [
      "American Academy of Periodontology",
      "American Board of Periodontology",
    ],
    bio: "Dr. Miller focuses on comprehensive periodontal care including implant surgery, bone regeneration, and soft tissue management.",
    personal:
      "Dr. Miller is a Virginia Tech football fan and enjoys golfing and spending time outdoors.",
    image: "/images/team/brian-miller.jpg",
  },
] as const;

export const NAV_ITEMS = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: SERVICES.map((s) => ({
      label: s.title,
      href: `/services/${s.slug}`,
    })),
  },
  { label: "Team", href: "/team" },
  { label: "Results", href: "/results" },
  { label: "Locations", href: "/locations" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const BRAND = {
  navy: "#182838",
  blue: "#0542BF",
  teal: "#1C818D",
  grayDark: "#262F32",
  grayLight: "#EEEEEE",
  cream: "#F1ECE8",
  background: "#FAFAFA",
  black: "#0F0F0F",
} as const;
