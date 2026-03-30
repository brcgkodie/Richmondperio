export const PRACTICE_NAME = "Grove Periodontists";
export const PRACTICE_SHORT = "Grove Perio";
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
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.1!2d-77.494!3d37.5597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b1143a5f5c5b8b%3A0x1e3e5a4c8a5b5b5b!2s4909%20Grove%20Ave%2C%20Richmond%2C%20VA%2023226!5e0!3m2!1sen!2sus!4v1",
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
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.5!2d-77.653!3d37.4897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b173e8a5b5b5b5%3A0x2e4e5a4c8a5b5b5b!2s11301B%20Polo%20Pl%2C%20Midlothian%2C%20VA%2023113!5e0!3m2!1sen!2sus!4v1",
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
      { institution: "Virginia Tech", degree: "B.S. in Biology" },
      { institution: "Medical College of Virginia School of Dentistry", degree: "Doctor of Dental Surgery (Magna Cum Laude, 2000)" },
      { institution: "Medical College of Virginia", degree: "Master of Science in Periodontics (2003)" },
    ],
    memberships: [
      "American Academy of Periodontology (Diplomate)",
      "Academy of Osseointegration",
      "Virginia Society of Periodontology (Past President)",
      "Richmond Dental Society",
      "Southern Academy of Periodontology",
    ],
    accomplishments: [
      "Richmond Magazine Top Periodontist (every year since 2012)",
      "Diplomate of the American Academy of Periodontology",
      "Past President, Virginia Society of Periodontology",
      "Co-developer, Titanium Study Club",
      "Omicron Kappa Upsilon Society",
      "Quintessence Award for Periodontics",
    ],
    publications: [] as string[],
    licenses: [] as string[],
    bio: "Benjamin T. Overstreet, DDS, MS was born and raised in Richmond, VA. He is one of eleven family members to pursue a career in dentistry. He initially received his BS degree in Biology at Virginia Tech, then graduated Magna Cum Laude from the Medical College of Virginia School of Dentistry in 2000. While in dental school he was inducted into Omicron Kappa Upsilon Society and awarded the Quintessence Award for Periodontics. Dr. Overstreet continued his studies at MCV, receiving his master's degree in periodontics in 2003. He continues his relationship with the periodontal program as a part-time teacher. Dr. Overstreet's surgical interests include implant dentistry, soft tissue esthetics — grafting and recontouring — and treatment of periodontal disease. He has been recognized as one of Richmond's top periodontists as voted on by dentists in the Richmond community every year since 2012. Dr. Overstreet is a Diplomate of the American Academy of Periodontology and has served as past president of the Virginia Society of Periodontology. He is co-developer of the Titanium Study Club, which teaches general dentists the art of implant dentistry.",
    personal: "One of the most important things in Dr. Overstreet's life is his family. He enjoys spending time with his wife and his three boys. Dr. Overstreet is very active in their lives and enjoys coaching their sports. Outside of his family and dentistry, his passions include fishing, golfing, and woodworking.",
    image: "/images/team/dr-overstreet.png",
    pageUrl: "/team/dr-overstreet",
  },
  {
    slug: "dr-white",
    name: "John H. White",
    credentials: "DDS, MSD",
    title: "Periodontist",
    education: [
      { institution: "University of Richmond", degree: "BSBA — Finance (2003–2007)" },
      { institution: "Virginia Commonwealth University", degree: "Post-Baccalaureate Health Sciences Certificate (2009–2011)" },
      { institution: "VCU School of Dentistry", degree: "Doctor of Dental Surgery (2011–2015)" },
      { institution: "VCU School of Dentistry", degree: "MSD/Certificate in Periodontics (2015–2018)" },
    ],
    memberships: [
      "American Academy of Periodontology",
      "Southern Academy of Periodontology",
      "Virginia Society of Periodontists",
      "American Dental Association",
      "Virginia Dental Association",
      "Richmond Dental Society",
      "Omicron Kappa Upsilon (Kappa Chapter)",
      "Cofounder of Richmond dental study club",
    ],
    accomplishments: [
      "2022: President of Virginia Society of Periodontists",
      "2021–2023: Richmond Magazine Top Periodontist",
      "2019: Board Certification, American Board of Periodontology",
      "2018: VCU Periodontics Chief Resident",
      "2017: Virginia Dental Association Top 40 under 40",
      "2015: American Academy of Periodontology Dental Student Award",
      "2015: Omicron Kappa Upsilon: Kappa Chapter",
    ],
    publications: [
      "White JH, et al. Virginia-based periodontists' perceptions: Current and future trends of the specialty. J Periodontol. 2019;1–10.",
    ],
    licenses: [
      "2018–Present: Board Certification, American Board of Periodontology",
      "2018–Present: MSD/Certificate in Periodontology and Dental Implant Surgery, VCU",
      "2015–Present: Virginia State Board of Dentistry",
      "2015–Present: IV and Oral Conscious/Moderate Sedation Certification",
      "2015–Present: Basic Life Support (BLS)",
      "2015–Present: Advanced Cardiac Life Support (ACLS)",
    ],
    bio: "John H. White, DDS, MSD, currently practices as a private practice clinician in Richmond, Virginia. Originally from Huntington, WV, Dr. White attended the University of Richmond graduating with a Bachelor's degree in Business Administration with a Finance Concentration. Finding his true calling in dentistry, Dr. White obtained his DDS from VCU School of Dentistry in 2015. He went on to receive a specialty certificate in periodontics, dental implant surgery, and IV conscious sedation at VCU as well as a Masters of Science in Dentistry for his research work on the future of the periodontal specialty. Dr. White is a Diplomate of the American Board of Periodontology. He has received several awards for clinical and academic excellence and served in numerous leadership roles. He co-founded and currently runs a dental study club in Richmond, VA. His clinical interests include bone and soft tissue regeneration and dental implant surgery.",
    personal: "In his spare time, Dr. White enjoys golf and tennis as well as spending time with his wife and their three children.",
    image: "/images/team/dr-white.jpg",
    pageUrl: "/team/dr-white",
  },
  {
    slug: "dr-kara-dunegan",
    name: "Kara Dunegan Gilliam",
    credentials: "DDS, MS",
    title: "Periodontist",
    education: [
      { institution: "University of Virginia", degree: "Bachelor of Arts in Biology (2012–2016)" },
      { institution: "VCU School of Dentistry", degree: "Doctor of Dental Surgery, Summa Cum Laude (2016–2020)" },
      { institution: "UT Health San Antonio", degree: "MS/Certificate in Periodontics (2020–2023)" },
    ],
    memberships: [
      "American Academy of Periodontology",
      "Southern Academy of Periodontology",
      "Virginia Society of Periodontists",
      "American Dental Association",
      "Virginia Dental Association",
      "Richmond Dental Society",
      "Richmond Association of Women Dentists",
    ],
    accomplishments: [
      "2024: Board Certification — American Board of Periodontology",
      "2023: Balint Orban Research Competition Finalist",
      "2020: Omicron Kappa Upsilon: Kappa Chapter Dental Honor Society",
      "2020: Alpha Omega Award for highest scholastic average",
      "2020: Harry Lyons Merit Scholarship Award (highest GPA)",
      "2020: Mission of Mercy Award of Excellence",
      "2020: Pierre Fauchard Senior Student Award",
      "2020: American Academy of Periodontology Award",
      "2017–2020: Dean's List, VCU",
    ],
    publications: [
      "Dunegan KA, et al. Subgingival scaling and root planing during minimally invasive periodontal surgery: A randomized controlled split-mouth trial. J Periodontol. 2024;95:9–16.",
      "Clinical evaluation of videoscope technology in subgingival scaling and root planing during minimally invasive periodontal surgery (2020–2023)",
      "Clinical evaluation of water absorption and hardness properties of 3D printed orthodontic retainers (2017–2019)",
    ],
    licenses: [
      "2023–Present: MS/Certificate in Periodontology and Dental Implant Surgery, UTHSCSA",
      "2023–Present: IV and Oral Conscious/Moderate Sedation Certification",
      "2020–Present: Licensed by Virginia State Board of Dentistry",
      "2020–Present: Advanced Cardiac Life Support (ACLS)",
      "2016–Present: Basic Life Support for Health Care Providers (BLS)",
    ],
    bio: "Kara Dunegan Gilliam, DDS, MS currently practices as a private practice clinician in Richmond, Virginia. Dr. Dunegan was born and raised in Manassas, VA. She attended the University of Virginia and then obtained her Doctor of Dental Surgery degree from VCU School of Dentistry, where she graduated at the top of her class with Summa Cum Laude honors. After dental school, Dr. Dunegan completed a residency in periodontics, dental implant surgery, and IV conscious sedation at the University of Texas Health Science Center at San Antonio. She received her Master of Science degree for her clinical research project investigating videoscope technology utilization during minimally invasive periodontal surgery. Dr. Dunegan is a Diplomate of the American Board of Periodontology. Her surgical interests include implant dentistry, bone and soft tissue regeneration, and treatment of periodontal disease.",
    personal: "Outside of work, Dr. Dunegan and her husband enjoy spending time with their family, friends, and two dogs, Mitzi and Becky. She enjoys exploring the outdoors, discovering local coffee shops and new restaurants, traveling, and baking sourdough. Dr. Dunegan is an active member at Third Church and loves getting involved in her community.",
    image: "/images/team/dr-kara-dunegan.jpg",
    pageUrl: "/team/dr-kara-dunegan",
  },
  {
    slug: "denver-j-lyons",
    name: "Denver J. Lyons",
    credentials: "DDS, MSD",
    title: "Periodontist",
    education: [
      { institution: "University of Virginia", degree: "BA in Philosophy (2010)" },
      { institution: "VCU School of Dentistry", degree: "Doctor of Dental Surgery, Magna Cum Laude (2017)" },
      { institution: "VCU School of Dentistry", degree: "MSD/Certificate in Periodontics (2020)" },
    ],
    memberships: [
      "American Academy of Periodontology",
      "Southern Academy of Periodontology",
      "Virginia Society of Periodontists",
      "American Dental Association",
      "Virginia Dental Association",
      "Richmond Dental Society",
    ],
    accomplishments: [
      "2022: Richmond Magazine Top Periodontist",
      "2020: Board Certification, American Board of Periodontology",
      "2020: VCU Periodontics Chief Resident",
      "2017: American Academy of Periodontology Dental Student Award",
      "2017: VCU Outstanding Student in Prosthodontics",
      "2016: President, Periodontal Discussion League",
    ],
    publications: [
      "Gui Q, Lyons DJ, et al. Non-human Primate Macaca mulatta as an Animal Model for Testing Efficacy of Amixicile as a Targeted Anti-periodontitis Therapy. Front Oral Health. 2021.",
      "Golob Deeb J, Lyons D, et al. Severe drug-induced gingival enlargement and periodontitis: A case series. Oral Maxillofac Surg Cases. 2020.",
    ],
    licenses: [
      "2020–Present: Board Certification, American Board of Periodontology",
      "2020–Present: MSD/Certificate in Periodontology and Dental Implant Surgery, VCU",
      "2017–Present: Virginia State Board of Dentistry",
      "2017–Present: IV and Oral Conscious/Moderate Sedation Certification",
      "2017–Present: Basic Life Support (BLS)",
      "2017–Present: Advanced Cardiac Life Support (ACLS)",
    ],
    bio: "Denver J. Lyons, DDS, MSD, currently practices as a private practice clinician in Richmond, Virginia. Originally from Winchester, VA, Dr. Lyons attended the University of Virginia graduating with a bachelor's degree in Philosophy. He obtained his DDS from VCU School of Dentistry in 2017. He went on to receive a specialty certificate in periodontics, dental implant surgery, and IV conscious sedation at VCU as well as a Masters of Science in Dentistry for his research work on a novel antibiotic to target periodontal pathogens. Dr. Lyons is a Diplomate of the American Board of Periodontology. His surgical interests include implant dentistry, bone augmentation, soft tissue grafting, laser treatment, and treatment of periodontal disease.",
    personal: "In his spare time, Dr. Lyons enjoys the outdoors, bluegrass music, beekeeping, mountain biking, fly fishing, and spending time with his wife and daughter. He also plays banjo and guitar.",
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
  {
    label: "Patient Resources",
    href: "/patient-resources",
    children: [
      { label: "New Patients", href: "/new-patients" },
      { label: "Pre-Operative Instructions", href: "/patient-resources/pre-operative-instructions" },
      { label: "Oral Sedation Checklist", href: "/patient-resources/pre-operative-oral-sedation" },
      { label: "IV Sedation Checklist", href: "/patient-resources/pre-operative-iv-sedation" },
      { label: "Post-Operative Instructions", href: "/patient-resources/post-operative-instructions" },
      { label: "Sinus Surgery Post-Op", href: "/patient-resources/sinus-surgery-post-op" },
      { label: "Referring Doctors", href: "/referring-doctors" },
    ],
  },
  { label: "Results", href: "/results" },
  { label: "Locations", href: "/locations" },
  { label: "Reviews", href: "/reviews" },
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
    "Grove Periodontists is a practice devoted to the specialty of Periodontics and Dental Implant Surgery. Serving Richmond and Midlothian, Virginia, our team of board-certified periodontists is dedicated to providing the highest level of dental medicine along with friendly, compassionate service.",
  mission:
    "Our focus extends beyond your teeth and gums. Research has linked periodontal disease to cardiovascular disease, diabetes, respiratory infection, and stroke. We take a whole-health approach, ensuring our patients receive care that supports their overall well-being — not just their smile.",
  recognition:
    "All of our doctors are members of the American Dental Association, the American Academy of Periodontology, the Academy of Osseointegration, the American Board of Periodontology, the Southern Academy of Periodontology, the Virginia Society of Periodontology, and the Richmond Dental Society. Every doctor in our practice has been nominated as a Top Periodontist by their peers in Richmond Magazine.",
};
