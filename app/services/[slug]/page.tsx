import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/constants";
import ServiceHero from "@/components/services/ServiceHero";
import FAQAccordion from "@/components/services/FAQAccordion";
import SectionReveal from "@/components/shared/SectionReveal";
import CTABand from "@/components/shared/CTABand";

const SERVICE_IMAGES: Record<string, string> = {
  "dental-implants": "/images/services/dental-implants.jpg",
  "gum-grafting": "/images/services/gum-grafting.jpg",
  "bone-grafting": "/images/services/bone-grafting.jpg",
  "crown-lengthening": "/images/services/crown-lengthening.jpg",
  "periodontal-disease-treatment": "/images/services/periodontal-disease.jpg",
  "tooth-extractions": "/images/services/tooth-extractions.jpg",
};

interface ServiceContent {
  metaTitle: string;
  metaDescription: string;
  description: string;
  sections: { heading: string; body: string }[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

const SERVICE_DATA: Record<string, ServiceContent> = {
  "dental-implants": {
    metaTitle: "Dental Implants Richmond VA | Board-Certified Periodontists | Grove Periodontists",
    metaDescription: "Dental implants in Richmond & Midlothian, VA by board-certified periodontists. Single implants, implant-supported bridges, full-arch restoration. 95%+ success rate. Schedule a consultation at Grove Periodontists.",
    description:
      "Grove Periodontists is a leading provider of dental implants in Richmond, VA. Our board-certified periodontists use advanced 3D cone beam imaging and computer-guided implant surgery to place titanium implants that look, feel, and function like your natural teeth. Whether you need a single implant, implant-supported bridge, or full-arch restoration, our team delivers predictable, long-lasting results with exceptional patient comfort at our Richmond and Midlothian offices.",
    sections: [
      {
        heading: "What Are Dental Implants?",
        body: "Dental implants are small titanium posts that are surgically placed into the jawbone to replace missing tooth roots. Once the implant integrates with your bone through a process called osseointegration, a custom-made crown, bridge, or denture is attached to create a permanent, natural-looking replacement. Unlike traditional bridges or dentures, implants preserve surrounding teeth and stimulate the jawbone to prevent bone loss. Dental implants are widely considered the gold standard for replacing missing teeth because they restore full chewing function, maintain facial structure, and can last a lifetime with proper care.",
      },
      {
        heading: "Types of Dental Implants We Offer",
        body: "At Grove Periodontists, we offer the full range of implant solutions. Single tooth implants replace individual missing teeth without affecting adjacent teeth. Implant-supported bridges replace multiple consecutive missing teeth using two or more implants as anchors, eliminating the need to grind down healthy teeth. Full-arch implant restorations (such as All-on-4) replace an entire arch of teeth using as few as four strategically placed implants, providing a fixed, permanent set of teeth in a single day. We also offer implant-supported overdentures for patients who want a removable option with superior stability compared to traditional dentures.",
      },
      {
        heading: "The Dental Implant Procedure",
        body: "Your implant journey begins with a comprehensive consultation that includes 3D cone beam CT imaging to evaluate your bone density, nerve location, and sinus anatomy. Using this data, we create a computer-guided surgical plan for precise implant placement. On the day of surgery, local anesthesia and optional IV or oral sedation ensure your complete comfort. The titanium implant is placed into the jawbone through a small incision. In many cases, a temporary restoration can be placed the same day. Over the next 3 to 6 months, the implant fuses with your bone. Once integration is confirmed, your restorative dentist places the final custom crown or prosthetic. The entire process is closely coordinated between our periodontists and your general dentist for seamless results.",
      },
      {
        heading: "Why Choose a Periodontist for Dental Implants?",
        body: "Periodontists receive an additional three years of specialty training beyond dental school, focusing exclusively on the structures that support teeth — including bone, gum tissue, and the periodontal ligament. This specialized training makes periodontists uniquely qualified to place dental implants, especially in complex cases involving bone loss, gum recession, or sinus proximity. At Grove Periodontists, all four of our doctors are board-certified Diplomates of the American Board of Periodontology, representing the highest level of credential in the specialty. We place hundreds of implants each year, giving us the experience and precision that comes with high-volume implant surgery.",
      },
    ],
    benefits: [
      "Permanent solution that can last a lifetime",
      "Preserves jawbone and prevents bone loss",
      "Restores full chewing function and bite strength",
      "Looks and feels like your natural teeth",
      "No adhesives or removal — fixed in place",
      "Does not require altering adjacent healthy teeth",
      "Over 95% success rate when placed by a periodontist",
    ],
    faqs: [
      {
        question: "How long does the dental implant process take?",
        answer: "The full dental implant process typically takes 3 to 6 months, including time for the implant to integrate with your jawbone (osseointegration). In some cases, immediate implant placement is possible on the same day as extraction, and a temporary crown can be placed immediately for aesthetic purposes.",
      },
      {
        question: "Am I a candidate for dental implants?",
        answer: "Most adults with adequate bone density are candidates for dental implants. During your consultation, we use 3D cone beam imaging to evaluate your bone structure and create a personalized treatment plan. Even patients with bone loss may be candidates after a bone grafting procedure to rebuild the foundation.",
      },
      {
        question: "What is the success rate of dental implants?",
        answer: "Dental implants have a success rate of over 95% when placed by a trained periodontist. Proper oral hygiene, regular follow-up visits, and avoiding smoking help ensure long-term implant success. Our periodontists' specialized training and experience contribute to predictable, lasting outcomes.",
      },
      {
        question: "Does dental implant surgery hurt?",
        answer: "Most patients report that implant surgery is less uncomfortable than they expected. We use local anesthesia and offer IV sedation and oral sedation options for anxious patients. Post-operative discomfort is typically mild and manageable with over-the-counter pain medication for a few days.",
      },
      {
        question: "How much do dental implants cost?",
        answer: "The cost of dental implants varies depending on the number of implants, the type of restoration, and whether additional procedures like bone grafting are needed. We provide detailed cost estimates during your consultation and can discuss payment options. Many dental insurance plans now provide partial coverage for implant procedures.",
      },
      {
        question: "How do I care for my dental implants?",
        answer: "Dental implants require the same care as natural teeth — brushing twice daily, flossing daily, and regular dental checkups. We recommend periodontal maintenance visits every 3 to 4 months to monitor your implants and ensure the surrounding gum tissue remains healthy.",
      },
    ],
    relatedSlugs: ["bone-grafting", "tooth-extractions"],
  },
  "gum-grafting": {
    metaTitle: "Gum Grafting Richmond VA | Receding Gums Treatment | Grove Periodontists",
    metaDescription: "Expert gum grafting in Richmond & Midlothian, VA. Connective tissue grafts, pinhole technique, and free gingival grafts by board-certified periodontists. Restore your gumline at Grove Periodontists.",
    description:
      "Gum grafting at Grove Periodontists restores receding gum tissue and protects exposed tooth roots. Our board-certified periodontists in Richmond, VA specialize in connective tissue grafts, free gingival grafts, and the pinhole surgical technique — a minimally invasive approach that reduces recovery time. Gum recession can lead to sensitivity, root decay, and aesthetic concerns, and our expert team provides lasting solutions tailored to each patient's needs.",
    sections: [
      {
        heading: "What Causes Gum Recession?",
        body: "Gum recession occurs when the gum tissue surrounding your teeth pulls back or wears away, exposing the tooth root. Common causes include periodontal disease, aggressive tooth brushing, genetics, teeth grinding (bruxism), hormonal changes, tobacco use, and misaligned teeth. Left untreated, recession can lead to tooth sensitivity, root surface decay, bone loss, and eventually tooth loss. Many patients first notice recession as teeth appearing longer or a notch at the gumline.",
      },
      {
        heading: "Gum Grafting Techniques We Offer",
        body: "At Grove Periodontists, we offer several gum grafting approaches depending on the severity and location of recession. Connective tissue grafts are the most common technique, where tissue is taken from beneath the palatal tissue to cover the exposed root. Free gingival grafts use tissue directly from the palate to thicken thin gum tissue. The pinhole surgical technique (PST) is a minimally invasive, incision-free method where gum tissue is repositioned through a tiny pinhole, offering faster recovery with no sutures. Our periodontists will recommend the most appropriate technique based on your specific needs during your consultation.",
      },
      {
        heading: "Recovery After Gum Grafting",
        body: "Most patients can return to light activities within one to two days after gum grafting. Initial healing takes approximately one to two weeks, during which you'll follow a soft-food diet and gentle oral hygiene protocol. A palatal stent may be provided for comfort. Most patients report that discomfort is manageable with over-the-counter pain medication and prescribed antibiotics. Full tissue maturation occurs over the following two to three months, during which the grafted tissue blends seamlessly with your natural gumline. We provide detailed post-operative instructions and close follow-up to ensure optimal healing.",
      },
    ],
    benefits: [
      "Covers exposed tooth roots to reduce sensitivity",
      "Prevents further gum recession and bone loss",
      "Reduces risk of root decay and cavities",
      "Improves the appearance of your smile",
      "Protects tooth roots from temperature sensitivity",
      "Minimally invasive options with faster recovery",
    ],
    faqs: [
      {
        question: "Is gum grafting painful?",
        answer: "Most patients report minimal discomfort during and after the procedure. We use local anesthesia and offer sedation options to ensure your comfort. Post-operative discomfort is typically manageable with prescribed medication and over-the-counter pain relievers. Most patients return to normal activities within a few days.",
      },
      {
        question: "How long does recovery from gum grafting take?",
        answer: "Initial healing typically takes 1 to 2 weeks. During this time, you'll follow a soft-food diet and modified oral hygiene instructions. Full tissue maturation takes 2 to 3 months. We provide detailed post-operative instructions and follow-up appointments to ensure optimal healing.",
      },
      {
        question: "Will my gums recede again after grafting?",
        answer: "Gum grafts provide a permanent increase in tissue thickness and root coverage. However, maintaining the results requires proper oral hygiene, avoiding aggressive brushing, and addressing any underlying causes like grinding or periodontal disease. Regular periodontal maintenance helps protect your investment.",
      },
      {
        question: "How many teeth can be treated at once?",
        answer: "Multiple teeth can often be treated in a single procedure, depending on the extent of recession and the technique used. The pinhole surgical technique allows treatment of multiple teeth through a single access point. Your periodontist will create a treatment plan that balances effectiveness with your comfort.",
      },
    ],
    relatedSlugs: ["periodontal-disease-treatment", "crown-lengthening"],
  },
  "bone-grafting": {
    metaTitle: "Bone Grafting Richmond VA | Jaw Bone Regeneration | Grove Periodontists",
    metaDescription: "Bone grafting in Richmond & Midlothian, VA by board-certified periodontists. Socket preservation, ridge augmentation, sinus lifts for dental implants. Schedule at Grove Periodontists.",
    description:
      "Bone grafting at Grove Periodontists rebuilds jawbone volume lost to tooth extraction, periodontal disease, or trauma. Our board-certified periodontists in Richmond, VA use cutting-edge biomaterials and regenerative techniques including guided bone regeneration to restore the foundation needed for successful dental implant placement. We serve patients throughout the greater Richmond and Midlothian area with predictable bone augmentation procedures.",
    sections: [
      {
        heading: "Why Is Bone Grafting Necessary?",
        body: "After tooth loss, the jawbone in the empty space begins to deteriorate because it no longer receives stimulation from the tooth root. This process, called resorption, can reduce bone volume by up to 25% in the first year alone. Insufficient bone density makes dental implant placement difficult or impossible without first rebuilding the ridge. Bone grafting restores lost volume, creates a solid foundation for implants, and preserves facial structure. Grafting is also commonly performed immediately after tooth extraction (socket preservation) to prevent the significant bone loss that would otherwise occur.",
      },
      {
        heading: "Types of Bone Grafting Procedures",
        body: "We offer several bone grafting approaches tailored to your specific needs. Socket preservation grafts are placed immediately after tooth extraction to maintain bone volume. Ridge augmentation rebuilds the width or height of the jawbone ridge when significant bone loss has already occurred. Sinus lift procedures (sinus augmentation) add bone to the upper jaw in the premolar and molar area when the sinus floor is too close to the jawbone for implant placement. Block bone grafts use bone from another site to rebuild larger areas of deficiency. Our periodontists use advanced biomaterials including mineralized bone allografts, xenografts, and growth factors to promote predictable bone regeneration.",
      },
      {
        heading: "Recovery and Healing Timeline",
        body: "Recovery from bone grafting is generally straightforward. Most patients experience mild to moderate swelling and discomfort for the first few days, manageable with prescribed medications and ice packs. You'll follow a soft-food diet and modified oral hygiene routine for the first week. The bone graft typically requires 4 to 6 months to fully integrate and mature before dental implants can be placed. We monitor your healing with follow-up imaging to confirm the graft is developing properly. For sinus lift procedures, additional precautions include avoiding nose blowing and flying for two weeks following surgery.",
      },
    ],
    benefits: [
      "Restores jawbone volume for dental implant placement",
      "Preserves bone after tooth extraction",
      "Prevents facial structure collapse from bone loss",
      "Enables implant placement in previously insufficient areas",
      "Uses advanced biomaterials for predictable results",
      "Multiple techniques for different clinical situations",
    ],
    faqs: [
      {
        question: "Why might I need a bone graft?",
        answer: "Bone grafting is commonly needed when jawbone has been lost due to tooth extraction, gum disease, or injury. It creates a strong foundation for dental implants or helps preserve bone after an extraction. Without grafting, bone loss after extraction can be significant enough to prevent future implant placement.",
      },
      {
        question: "How long does it take for a bone graft to heal?",
        answer: "Bone grafts typically require 4 to 6 months to fully integrate before an implant can be placed. We monitor your healing progress with follow-up imaging to ensure the graft is maturing properly. Some procedures may heal faster depending on the grafting material and technique used.",
      },
      {
        question: "Is bone grafting painful?",
        answer: "Most patients report that bone grafting is less uncomfortable than expected. We use local anesthesia and offer sedation options for comfort. Post-operative discomfort typically peaks 2 to 3 days after surgery and is well-managed with prescribed pain medication. Swelling usually resolves within a week.",
      },
      {
        question: "Where does the bone graft material come from?",
        answer: "Modern bone grafting primarily uses processed donor bone (allograft) or bovine-derived bone mineral (xenograft), which are thoroughly sterilized and tested for safety. These materials serve as a scaffold that your body gradually replaces with your own natural bone. In some cases, your own bone or synthetic bone substitutes may be used.",
      },
    ],
    relatedSlugs: ["dental-implants", "tooth-extractions"],
  },
  "crown-lengthening": {
    metaTitle: "Crown Lengthening Richmond VA | Gummy Smile Treatment | Grove Periodontists",
    metaDescription: "Crown lengthening in Richmond & Midlothian, VA. Correct a gummy smile or expose tooth structure for dental restorations. Board-certified periodontists at Grove Periodontists.",
    description:
      "Crown lengthening at Grove Periodontists reshapes excess gum and bone tissue to expose more natural tooth structure. Our board-certified periodontists in Richmond, VA perform functional crown lengthening to support dental restorations and aesthetic crown lengthening to correct a gummy smile. Using precise surgical techniques, we create balanced, natural-looking gumlines with minimal recovery time for patients across the Richmond metropolitan area.",
    sections: [
      {
        heading: "What Is Crown Lengthening?",
        body: "Crown lengthening is a surgical procedure that removes excess gum tissue, bone, or both to expose more of a tooth's natural structure. The procedure is performed for both functional and cosmetic reasons. Functionally, crown lengthening provides enough tooth structure above the gumline for your dentist to place a crown, bridge, or other restoration. Aesthetically, it corrects a 'gummy smile' — where excessive gum tissue makes teeth appear short or uneven — by sculpting a more proportionate, balanced gumline.",
      },
      {
        heading: "Functional vs. Aesthetic Crown Lengthening",
        body: "Functional crown lengthening is prescribed when a tooth is broken below the gumline, severely decayed near the gum, or has insufficient structure visible above the gum for a crown or bridge to grip properly. Without adequate tooth structure, a restoration won't hold securely. Aesthetic crown lengthening addresses the appearance of your smile by removing excess gum tissue that covers the teeth, creating a more proportionate tooth-to-gum ratio. Both procedures involve carefully reshaping the gum tissue and, when necessary, the underlying bone to achieve the desired result.",
      },
      {
        heading: "Recovery After Crown Lengthening",
        body: "Most patients recover from crown lengthening within 7 to 10 days. You may experience mild swelling and discomfort, which is managed with prescribed medication and ice packs. A soft-food diet is recommended for the first week. Sutures are typically removed at your post-operative appointment. Full gum tissue maturation takes approximately 2 to 3 months, after which your restorative dentist can proceed with placing the final crown or other restoration. For aesthetic cases, the results of a more balanced gumline are visible as soon as the initial healing is complete.",
      },
    ],
    benefits: [
      "Enables proper placement of dental crowns and bridges",
      "Corrects a gummy smile for improved aesthetics",
      "Creates balanced, symmetrical gumlines",
      "Preserves and exposes healthy tooth structure",
      "Quick recovery — most patients heal within 7-10 days",
      "Long-lasting results with predictable outcomes",
    ],
    faqs: [
      {
        question: "What is crown lengthening used for?",
        answer: "Crown lengthening is used both functionally — to expose enough tooth structure for a crown or bridge — and cosmetically to improve a gummy smile by reshaping the gumline for a more balanced appearance. Your periodontist and restorative dentist will coordinate to determine if the procedure is right for you.",
      },
      {
        question: "How long is recovery after crown lengthening?",
        answer: "Most patients recover within 7 to 10 days. Your periodontist will provide detailed aftercare instructions. Full gum tissue maturation takes approximately 2 to 3 months before a final restoration is placed, ensuring the tissue has fully healed and stabilized.",
      },
      {
        question: "Does crown lengthening hurt?",
        answer: "The procedure is performed under local anesthesia, so you won't feel pain during surgery. Sedation options are also available. Post-operative discomfort is typically mild and manageable with over-the-counter or prescribed pain medication for a few days.",
      },
      {
        question: "Will my teeth look longer after crown lengthening?",
        answer: "Yes, that is the intended result. For gummy smile correction, the teeth will appear more proportionate and natural as excess gum tissue is removed. For functional cases, only the tooth that needs a restoration is typically adjusted. Your periodontist will discuss the expected cosmetic outcome before the procedure.",
      },
    ],
    relatedSlugs: ["gum-grafting", "periodontal-disease-treatment"],
  },
  "periodontal-disease-treatment": {
    metaTitle: "Periodontal Disease Treatment Richmond VA | Gum Disease Specialist | Grove Periodontists",
    metaDescription: "Periodontal disease treatment in Richmond & Midlothian, VA. Scaling & root planing, osseous surgery, laser therapy, regeneration by board-certified periodontists. Grove Periodontists.",
    description:
      "Grove Periodontists provides comprehensive periodontal disease treatment for patients in Richmond and Midlothian, VA. From early-stage gingivitis to advanced periodontitis, our board-certified periodontists offer scaling and root planing, laser therapy, osseous surgery, and regenerative procedures. Early intervention is key to preserving your natural teeth, and our personalized treatment plans address the underlying causes of gum disease to restore lasting oral health.",
    sections: [
      {
        heading: "Understanding Periodontal Disease",
        body: "Periodontal disease (gum disease) is a chronic bacterial infection of the gum tissue and bone that support your teeth. It begins as gingivitis — inflammation of the gums caused by plaque buildup — and can progress to periodontitis, where the infection spreads below the gumline and damages the bone supporting your teeth. According to the CDC, nearly half of American adults over 30 have some form of periodontal disease. Left untreated, periodontitis leads to tooth loss and has been linked to systemic health conditions including cardiovascular disease, diabetes complications, respiratory infections, and adverse pregnancy outcomes.",
      },
      {
        heading: "Treatment Options for Gum Disease",
        body: "Treatment depends on the severity of disease. For early to moderate cases, scaling and root planing (deep cleaning) removes plaque and tartar from below the gumline and smooths the root surfaces to promote healing. For advanced cases, osseous surgery (pocket reduction surgery) reshapes the bone around teeth to eliminate deep pockets where bacteria thrive. Regenerative procedures using bone grafts and growth factors can rebuild bone lost to periodontitis. Laser-assisted therapy offers a minimally invasive option for decontaminating periodontal pockets. Our periodontists create individualized treatment plans combining the most effective approaches for your specific condition.",
      },
      {
        heading: "Periodontal Maintenance: Protecting Your Results",
        body: "After active periodontal treatment, ongoing maintenance is critical to preventing disease recurrence. Periodontal maintenance visits — typically every 3 to 4 months — include thorough cleanings, pocket depth measurements, and evaluation of gum tissue health. These visits are more comprehensive than routine dental cleanings and are specifically designed for patients with a history of periodontal disease. Your maintenance schedule is coordinated between our office and your general dentist to ensure continuous, comprehensive care. With proper maintenance, most patients can successfully manage their periodontal health and retain their natural teeth for life.",
      },
      {
        heading: "The Link Between Gum Disease and Overall Health",
        body: "Research has established significant connections between periodontal disease and systemic health conditions. The bacteria and chronic inflammation associated with gum disease can enter the bloodstream and contribute to cardiovascular disease, complicate diabetes management, increase the risk of respiratory infections, and affect pregnancy outcomes. At Grove Periodontists, we take a whole-health approach, understanding that treating periodontal disease isn't just about protecting your teeth — it's about supporting your overall well-being.",
      },
    ],
    benefits: [
      "Stops the progression of gum disease",
      "Preserves natural teeth and prevents tooth loss",
      "Reduces deep periodontal pockets",
      "Regenerates bone lost to periodontitis",
      "Improves overall systemic health outcomes",
      "Personalized treatment plans for every stage of disease",
    ],
    faqs: [
      {
        question: "What are the signs of periodontal disease?",
        answer: "Common signs include bleeding gums during brushing or flossing, persistent bad breath (halitosis), red, swollen, or tender gums, receding gumlines, loose or shifting teeth, changes in bite alignment, and pus between teeth and gums. If you notice any of these symptoms, schedule an evaluation promptly. Many people have periodontal disease without noticeable symptoms.",
      },
      {
        question: "Can periodontal disease be reversed?",
        answer: "Early-stage gum disease (gingivitis) can be completely reversed with professional treatment and improved oral hygiene. Advanced periodontitis can be effectively managed and stabilized through scaling and root planing, surgical treatment, and ongoing maintenance, though some bone and tissue damage may be permanent. The key is early intervention.",
      },
      {
        question: "How often should I see a periodontist?",
        answer: "Patients with periodontal disease typically benefit from periodontal maintenance visits every 3 to 4 months, alternating between our office and your general dentist. This is more frequent than the standard twice-yearly dental cleaning and is essential for managing periodontal disease long-term.",
      },
      {
        question: "Is periodontal treatment covered by insurance?",
        answer: "Most dental insurance plans cover periodontal treatment, including scaling and root planing, surgical procedures, and maintenance visits. Coverage varies by plan, and our team will verify your benefits and provide cost estimates before treatment begins.",
      },
      {
        question: "Does gum disease affect my overall health?",
        answer: "Yes. Research has linked periodontal disease to cardiovascular disease, diabetes complications, respiratory infections, and adverse pregnancy outcomes. The chronic inflammation and bacteria associated with gum disease can enter the bloodstream and affect other parts of the body. Treating periodontal disease is an investment in both your oral and overall health.",
      },
    ],
    relatedSlugs: ["gum-grafting", "bone-grafting"],
  },
  "tooth-extractions": {
    metaTitle: "Tooth Extractions Richmond VA | Wisdom Teeth Removal | Grove Periodontists",
    metaDescription: "Gentle surgical tooth extractions & wisdom teeth removal in Richmond & Midlothian, VA. Socket preservation, immediate implants. Board-certified periodontists at Grove Periodontists.",
    description:
      "Grove Periodontists performs gentle surgical tooth extractions including wisdom teeth removal at our Richmond and Midlothian, VA offices. Our board-certified periodontists have advanced training in atraumatic extraction techniques that preserve surrounding bone and tissue, creating optimal conditions for future implant placement. We offer same-day socket preservation grafting and, in select cases, immediate dental implant placement following extraction.",
    sections: [
      {
        heading: "When Is a Tooth Extraction Necessary?",
        body: "Tooth extraction may be recommended when a tooth is too severely damaged by decay, fracture, or periodontal disease to be saved. Other common reasons include impacted wisdom teeth causing pain, infection, or damage to adjacent teeth, teeth that are broken below the gumline, severe crowding requiring orthodontic treatment, and teeth with failed root canal treatment. As periodontists, our doctors have specialized training in surgical extractions — including complex cases involving curved roots, proximity to nerves, or compromised bone.",
      },
      {
        heading: "Atraumatic Extraction Techniques",
        body: "Our periodontists use atraumatic extraction techniques specifically designed to minimize damage to the surrounding bone and soft tissue. These techniques are especially important when dental implant placement is planned, because preserving bone volume after extraction significantly improves implant outcomes. Using precise, controlled movements and specialized instruments, we can often remove teeth with minimal disruption to the socket walls, providing the best possible foundation for healing or immediate implant placement.",
      },
      {
        heading: "Socket Preservation and Immediate Implants",
        body: "After a tooth is extracted, the surrounding bone begins to resorb rapidly. Socket preservation grafting — performed immediately after extraction — fills the empty socket with bone graft material to maintain the bone volume needed for future implant placement. In select cases, we can place a dental implant immediately at the time of extraction, combining two procedures into one visit and reducing overall treatment time. Your periodontist will evaluate whether immediate implant placement is appropriate based on the condition of the extraction site, infection status, and bone anatomy.",
      },
    ],
    benefits: [
      "Atraumatic techniques preserve bone and tissue",
      "Same-day socket preservation prevents bone loss",
      "Immediate implant placement when clinically appropriate",
      "IV and oral sedation available for comfort",
      "Specialized expertise for complex surgical extractions",
      "Coordinated care with your general dentist",
    ],
    faqs: [
      {
        question: "When is a surgical extraction necessary?",
        answer: "Surgical extraction may be needed for impacted wisdom teeth, teeth with curved roots, fractured teeth below the gumline, teeth with limited access, or teeth that cannot be saved due to severe decay or periodontal disease. Periodontists have advanced training in surgical extraction techniques beyond what general dentists typically perform.",
      },
      {
        question: "Can I get an implant the same day as an extraction?",
        answer: "In many cases, yes. Immediate implant placement can be performed at the time of extraction when conditions are favorable — adequate bone, no active infection, and proper anatomy. This reduces overall treatment time and the number of surgical procedures. Your periodontist will determine if you are a candidate during your consultation.",
      },
      {
        question: "What should I expect during recovery?",
        answer: "Recovery from a tooth extraction typically takes 3 to 5 days. You may experience some swelling and discomfort, which is managed with prescribed medication and ice packs. A soft-food diet is recommended for the first week. We provide detailed post-operative instructions including guidelines for pain management, oral hygiene, and activity restrictions.",
      },
      {
        question: "Do I need a bone graft after an extraction?",
        answer: "Socket preservation grafting is strongly recommended when future implant placement is planned. Without grafting, the bone around the extraction site can lose up to 25% of its volume in the first year. Even if you're not planning an implant immediately, preserving the bone gives you more options in the future.",
      },
    ],
    relatedSlugs: ["dental-implants", "bone-grafting"],
  },
};

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  const data = SERVICE_DATA[slug];
  if (!service || !data) return {};

  return {
    title: data.metaTitle,
    description: data.metaDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const data = SERVICE_DATA[slug];
  if (!data) notFound();

  const relatedServices = SERVICES.filter((s) =>
    data.relatedSlugs.includes(s.slug)
  );

  return (
    <>
      <ServiceHero
        title={service.title}
        description={service.shortDescription}
        imageSrc={SERVICE_IMAGES[slug]}
      />

      {/* Overview */}
      <SectionReveal>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="heading-lg text-navy mb-6">
              {service.title} in Richmond, VA
            </h2>
            <p className="body-lg text-gray-dark/70">
              {data.description}
            </p>
          </div>
        </section>
      </SectionReveal>

      {/* Detailed Sections */}
      {data.sections.map((section, i) => (
        <SectionReveal key={i}>
          <section className={`py-16 md:py-20 ${i % 2 === 0 ? "bg-cream" : ""}`}>
            <div className="mx-auto max-w-3xl px-6">
              <h2 className="heading-md text-navy mb-5">
                {section.heading}
              </h2>
              <p className="body-lg text-gray-dark/70 leading-relaxed">
                {section.body}
              </p>
            </div>
          </section>
        </SectionReveal>
      ))}

      {/* Benefits */}
      <SectionReveal>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <div className="accent-line mb-6" />
            <h2 className="heading-lg text-navy mb-8">
              Benefits of {service.title}
            </h2>
            <ul className="space-y-4">
              {data.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-teal" />
                  <span className="body-lg text-gray-dark/70">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </SectionReveal>

      {/* FAQs with Schema */}
      <SectionReveal>
        <section className="bg-cream py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="heading-lg text-navy mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={data.faqs} />
          </div>
        </section>
      </SectionReveal>

      {/* Related Services */}
      <SectionReveal>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="heading-lg text-navy mb-8">
              Related Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  href={`/services/${related.slug}`}
                  className="group bg-white p-6 border-l-2 border-teal hover:border-blue transition-colors"
                >
                  <h3 className="heading-md text-navy mb-2">
                    {related.title}
                  </h3>
                  <p className="text-gray-dark/70 text-sm leading-relaxed">
                    {related.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: data.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Service CTA */}
      <CTABand
        headline={`Ready to Learn More About ${service.title}?`}
        subtext="Schedule a consultation to discuss your treatment options with our board-certified periodontists."
      />
    </>
  );
}
