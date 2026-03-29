export const PRACTICE_NAME = "Overstreet, White & Dunegan, Ltd.";
export const PRACTICE_SHORT = "OWD Periodontics";
export const PRACTICE_PHONE_RICHMOND = "+18043556593";
export const PRACTICE_PHONE_RICHMOND_DISPLAY = "(804) 355-6593";
export const PRACTICE_PHONE_MIDLOTHIAN = "+18047947094";
export const PRACTICE_PHONE_MIDLOTHIAN_DISPLAY = "(804) 794-7094";
export const PRACTICE_PHONE = PRACTICE_PHONE_RICHMOND;
export const PRACTICE_PHONE_DISPLAY = PRACTICE_PHONE_RICHMOND_DISPLAY;
export const PRACTICE_EMAIL = "info@richmondperioonline.com";
export const SITE_URL = "https://richmondperioonline.com";
export const OLD_SITE_URL = "https://www.richmondperioonline.com";
export const INSTAGRAM_URL = "https://www.instagram.com/owdperio/";

export const LOCATIONS = [
  {
    id: "richmond",
    name: "Richmond Office",
    street: "4909 Grove Avenue",
    city: "Richmond",
    state: "VA",
    zip: "23226",
    phone: PRACTICE_PHONE_RICHMOND_DISPLAY,
    phoneTel: PRACTICE_PHONE_RICHMOND,
    mapUrl: "https://maps.google.com/?q=4909+Grove+Avenue+Richmond+VA+23226",
    hours: [
      { days: "Monday", time: "8:00 AM – 5:00 PM" },
      { days: "Tuesday", time: "8:00 AM – 5:00 PM" },
      { days: "Wednesday", time: "8:00 AM – 5:00 PM" },
      { days: "Thursday", time: "8:00 AM – 5:00 PM" },
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
    phone: PRACTICE_PHONE_MIDLOTHIAN_DISPLAY,
    phoneTel: PRACTICE_PHONE_MIDLOTHIAN,
    mapUrl:
      "https://maps.google.com/?q=11301-B+Polo+Place+Midlothian+VA+23113",
    hours: [
      { days: "Monday", time: "8:00 AM – 5:00 PM" },
      { days: "Tuesday", time: "8:00 AM – 5:00 PM" },
      { days: "Wednesday", time: "8:00 AM – 5:00 PM" },
      { days: "Thursday", time: "7:00 AM – 2:00 PM" },
      { days: "Friday", time: "7:00 AM – 2:00 PM" },
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
      "Replace missing teeth with permanent titanium implants that look, feel, and function like natural teeth. Our periodontists place and restore implants at both our Richmond and Midlothian offices.",
    icon: "implant",
  },
  {
    slug: "gum-grafting",
    title: "Gum Grafting",
    shortDescription:
      "Restore receding gum tissue to protect exposed tooth roots, reduce sensitivity, and improve the appearance of your smile line.",
    icon: "gum",
  },
  {
    slug: "bone-grafting",
    title: "Bone Grafting",
    shortDescription:
      "Rebuild jawbone volume lost to extraction, trauma, or periodontal disease to create a strong foundation for dental implants.",
    icon: "bone",
  },
  {
    slug: "crown-lengthening",
    title: "Crown Lengthening",
    shortDescription:
      "Reshape gum and bone tissue to expose more natural tooth structure — whether for restorative needs or to correct a gummy smile.",
    icon: "crown",
  },
  {
    slug: "periodontal-disease-treatment",
    title: "Periodontal Disease Treatment",
    shortDescription:
      "Comprehensive treatment for all stages of gum disease, from scaling and root planing to regenerative surgical procedures.",
    icon: "perio",
  },
  {
    slug: "tooth-extractions",
    title: "Tooth Extractions",
    shortDescription:
      "Gentle surgical extractions including wisdom teeth removal, with socket preservation and immediate implant placement options.",
    icon: "extraction",
  },
] as const;

export const TEAM = [
  {
    slug: "dr-overstreet",
    name: "Benjamin T. Overstreet",
    credentials: "DDS, MS",
    title: "Periodontist",
    education: [
      {
        institution: "Virginia Tech",
        degree: "B.S. in Biology",
      },
      {
        institution: "Medical College of Virginia School of Dentistry",
        degree: "Doctor of Dental Surgery (Magna Cum Laude)",
      },
      {
        institution: "Medical College of Virginia",
        degree: "Master of Science in Periodontics",
      },
    ],
    memberships: [
      "American Academy of Periodontology (Diplomate)",
      "Academy of Osseointegration",
      "Virginia Society of Periodontology (Past President)",
      "Richmond Dental Society",
      "Southern Academy of Periodontology",
    ],
    bio: "Dr. Overstreet was born and raised in Richmond, VA. He is one of eleven family members to pursue a career in dentistry. After graduating Magna Cum Laude from the Medical College of Virginia School of Dentistry in 2000, he completed his periodontics residency and master's degree at MCV in 2003. Dr. Overstreet's surgical interests include implant dentistry, soft tissue esthetics — grafting and recontouring — and the treatment of periodontal disease. He continues to serve as a part-time faculty member in the VCU periodontal program and is co-developer of the Titanium Study Club, which teaches general dentists the art of implant dentistry. Dr. Overstreet has been recognized as one of Richmond's Top Periodontists by his peers in Richmond Magazine every year since 2012.",
    personal:
      "Dr. Overstreet enjoys spending time with his family and staying connected to the Richmond dental community through teaching and mentorship.",
    image: "/images/team/dr-overstreet.jpg",
    pageUrl: "/team/dr-overstreet",
  },
  {
    slug: "dr-white",
    name: "John H. White",
    credentials: "DDS, MSD",
    title: "Periodontist",
    education: [
      {
        institution: "University of Richmond",
        degree: "Bachelor's Degree",
      },
      {
        institution: "VCU School of Dentistry",
        degree: "Doctor of Dental Surgery (2015)",
      },
      {
        institution: "VCU School of Dentistry",
        degree: "Certificate in Periodontics, Master of Science in Dentistry",
      },
    ],
    memberships: [
      "American Board of Periodontology (Diplomate)",
      "American Academy of Periodontology",
      "Academy of Osseointegration",
      "Virginia Society of Periodontology",
      "Richmond Dental Society",
    ],
    bio: "Dr. White is originally from Huntington, West Virginia. He attended the University of Richmond before earning his DDS degree from Virginia Commonwealth University School of Dentistry in 2015. He then completed his advanced training in periodontics at VCU, where he earned his MSD. Dr. White is a Diplomate of the American Board of Periodontology and has been recognized as a Top Periodontist in Richmond Magazine by his peers.",
    personal:
      "Originally from West Virginia, Dr. White has made Richmond his home and enjoys all the city has to offer.",
    image: "/images/team/dr-white.jpg",
    pageUrl: "/team/dr-white",
  },
  {
    slug: "dr-kara-dunegan",
    name: "Kara Dunegan Gilliam",
    credentials: "DDS, MS",
    title: "Periodontist",
    education: [
      {
        institution: "University of Virginia",
        degree: "Bachelor's Degree",
      },
      {
        institution: "VCU School of Dentistry",
        degree: "Doctor of Dental Surgery (Summa Cum Laude)",
      },
      {
        institution: "UT Health San Antonio",
        degree: "Certificate in Periodontics, Master of Science",
      },
    ],
    memberships: [
      "American Board of Periodontology (Diplomate)",
      "American Academy of Periodontology",
      "Academy of Osseointegration",
      "Virginia Society of Periodontology",
      "Richmond Dental Society",
    ],
    bio: "Dr. Dunegan Gilliam was born and raised in Manassas, Virginia. She attended the University of Virginia before earning her Doctor of Dental Surgery degree from VCU School of Dentistry, where she graduated at the top of her class with Summa Cum Laude honors. Dr. Dunegan then completed her residency in periodontics, dental implant surgery, and IV conscious sedation at the University of Texas Health Science Center at San Antonio. She received her Master of Science degree for clinical research investigating videoscope technology utilization during minimally invasive periodontal surgery. Dr. Dunegan is a Diplomate of the American Board of Periodontology and has been voted a Top Periodontist in Richmond Magazine.",
    personal:
      "Outside the practice, Dr. Dunegan Gilliam enjoys spending time with her family and staying active in the Richmond community.",
    image: "/images/team/dr-kara-dunegan.jpg",
    pageUrl: "/team/dr-kara-dunegan",
  },
  {
    slug: "denver-j-lyons",
    name: "Denver J. Lyons",
    credentials: "DDS, MSD",
    title: "Periodontist",
    education: [
      {
        institution: "University of Virginia",
        degree: "Bachelor's Degree",
      },
      {
        institution: "VCU School of Dentistry",
        degree: "Doctor of Dental Surgery (2017, Magna Cum Laude)",
      },
      {
        institution: "VCU School of Dentistry",
        degree: "Certificate in Periodontics, Master of Science in Dentistry (2020)",
      },
    ],
    memberships: [
      "American Board of Periodontology (Diplomate)",
      "American Academy of Periodontology",
      "Academy of Osseointegration",
      "Virginia Society of Periodontology",
      "Richmond Dental Society",
    ],
    bio: "Dr. Lyons grew up in Winchester, Virginia. He attended the University of Virginia before earning his DDS from VCU School of Dentistry in 2017, graduating Magna Cum Laude. He completed his periodontics residency and Master of Science in Dentistry at VCU in 2020. Dr. Lyons is a Diplomate of the American Board of Periodontology. His research includes work on targeted anti-periodontitis therapies. Dr. Lyons was voted Top Periodontist in Richmond Magazine by his peers.",
    personal:
      "Dr. Lyons enjoys staying active and exploring the Richmond area with friends and family.",
    image: "/images/team/denver-j-lyons.jpg",
    pageUrl: "/team/denver-j-lyons",
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
  { label: "Our Doctors", href: "/team" },
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

export const ABOUT_TEXT = {
  intro:
    "Overstreet, White & Dunegan, Ltd. is a practice devoted to the specialty of Periodontics and Dental Implant Surgery. Serving Richmond and Midlothian, Virginia, our team of board-certified periodontists is dedicated to providing the highest level of dental medicine along with friendly, compassionate service.",
  mission:
    "Our focus extends beyond your teeth and gums. Research has linked periodontal disease to cardiovascular disease, diabetes, respiratory infection, and stroke. We take a whole-health approach, ensuring our patients receive care that supports their overall well-being — not just their smile.",
  recognition:
    "All of our doctors are members of the American Dental Association, the American Academy of Periodontology, the Academy of Osseointegration, the American Board of Periodontology, the Southern Academy of Periodontology, the Virginia Society of Periodontology, and the Richmond Dental Society. Every doctor in our practice has been nominated as a Top Periodontist by their peers in Richmond Magazine.",
};
