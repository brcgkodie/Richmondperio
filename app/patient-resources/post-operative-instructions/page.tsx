import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/shared/CTABand";
import PrintButton from "@/components/shared/PrintButton";

export const metadata: Metadata = {
  title: "Post-Operative Instructions | Grove Periodontists",
  description:
    "Detailed post-operative instructions following periodontal surgery including bleeding, swelling, pain management, diet, and hygiene guidelines at Grove Periodontists in Richmond and Midlothian, VA.",
};

export default function PostOperativeInstructionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/patient-resources"
            className="label-sm text-teal hover:text-navy transition-colors mb-6 inline-block"
          >
            &larr; Patient Resources
          </Link>
          <div className="accent-line mb-6" />
          <span className="label-sm text-teal mb-4 block">
            Post-Operative
          </span>
          <h1 className="heading-xl text-navy">
            General Post-Operative Instructions
          </h1>
          <p className="body-lg text-gray-dark/70 mt-6">
            Following these instructions will help ensure a smooth, comfortable
            recovery after your periodontal procedure. Please read carefully and
            contact our office with any questions.
          </p>
          <div className="flex flex-wrap gap-4 mt-8" data-print-hide>
            <a
              href="/pdfs/post-operative-instructions.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>Download PDF</span>
            </a>
            <PrintButton />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          {/* Bleeding */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Bleeding</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                A small amount of bleeding is normal following surgery.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                If excessive bleeding occurs, apply a moistened gauze pad or a
                moistened black tea bag directly over the surgical site and apply
                firm, steady pressure for{" "}
                <strong className="text-navy">20 minutes</strong>.
              </li>
            </ul>
          </div>

          {/* Discomfort */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Discomfort</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Moderate discomfort and bruising are expected following surgery.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Take prescribed medication as directed to manage discomfort.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Keep your head elevated, especially when lying down.
              </li>
            </ul>
          </div>

          {/* Prescribed Medications */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Prescribed Medications</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Take all prescribed medications according to the instructions provided.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Start taking medications immediately after your procedure.
              </li>
            </ul>
          </div>

          {/* Swelling */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Swelling</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Apply an ice pack to the outside of your face for the first{" "}
                <strong className="text-navy">48 hours</strong>:{" "}
                <strong className="text-navy">20 minutes on, 20 minutes off</strong>.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Swelling typically peaks at <strong className="text-navy">72 hours</strong> after surgery.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                After 48 hours, switch to warm, moist compresses to help resolve
                swelling.
              </li>
            </ul>
          </div>

          {/* Pain */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Pain</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Pain medications may cause grogginess.{" "}
                <strong className="text-navy">
                  Avoid driving or operating machinery
                </strong>{" "}
                while taking prescription pain medication.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Take pain medication with food to reduce stomach upset.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Stay ahead of the pain — do not wait until discomfort becomes
                severe before taking medication.
              </li>
            </ul>
          </div>

          {/* Dressing */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Dressing</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                A periodontal dressing may be placed to protect the surgical area.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                The dressing may dislodge over the course of several days — this is normal.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Sutures may loosen over time — this is also normal.
              </li>
            </ul>
          </div>

          {/* Palatal Stent */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Palatal Stent</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Wear the palatal stent{" "}
                <strong className="text-navy">24 hours per day</strong> initially.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Remove the stent after eating, rinse it thoroughly, apply a thin
                layer of Vaseline, and replace it.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Continue wearing the stent for{" "}
                <strong className="text-navy">7–14 days</strong> as directed.
              </li>
            </ul>
          </div>

          {/* Sutures */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Sutures</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Some sutures are resorbable and will dissolve on their own. Others
                will be removed at your post-operative appointment.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                <strong className="text-navy">DO NOT</strong> pull or play with
                your sutures.
              </li>
            </ul>
          </div>

          {/* Rinsing & Hygiene */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Rinsing &amp; Hygiene</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Gently rinse with warm salt water{" "}
                <strong className="text-navy">3 times per day</strong>.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                <strong className="text-navy">Do not brush</strong> the surgical
                area for 5 days following surgery.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                <strong className="text-navy">Day 6:</strong> Begin gently brushing
                the surgical area.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                <strong className="text-navy">2 weeks:</strong> Resume normal
                brushing (for patients without a graft).
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                <strong className="text-navy">Graft patients:</strong> Continue
                gentle brushing only. Do not floss the grafted area until your
                post-operative visit.
              </li>
            </ul>
          </div>

          {/* Activity */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Activity</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                No physical activity on the day of surgery.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Light activity only for the first week.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                No exercise for <strong className="text-navy">5 days</strong>{" "}
                following your procedure.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                <strong className="text-navy">NO SMOKING.</strong> Smoking
                dramatically impairs wound healing and increases risk of
                complications.
              </li>
            </ul>
          </div>

          {/* Tooth Sensitivity */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Tooth Sensitivity</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Tooth sensitivity may occur following surgery, especially to cold
                temperatures.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                This sensitivity typically lessens with time.
              </li>
            </ul>
          </div>

          {/* Dietary Suggestions */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Dietary Suggestions</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Follow a <strong className="text-navy">soft-food diet</strong> for
                the first week.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Recommended foods: yogurt, avocado, cottage cheese, fish, soups,
                eggs, and protein shakes.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                <strong className="text-navy">Avoid</strong> straws, sodas, and
                acidic beverages.
              </li>
            </ul>
          </div>

          {/* Pain Medicine Schedule */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Pain Medicine Schedule</h2>

            <h3 className="font-serif text-xl text-navy mb-4">
              Standard Protocol
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                <strong className="text-navy">Step 1:</strong> Take 600mg Advil
                (ibuprofen).
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                <strong className="text-navy">Step 2:</strong> 3 hours later, take
                2 x 325mg Tylenol (acetaminophen).
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                <strong className="text-navy">Step 3:</strong> 3 hours later, take
                600mg Advil again.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Continue alternating and decrease as pain subsides.
              </li>
            </ul>

            <h3 className="font-serif text-xl text-navy mb-4">
              Blood Thinner Patients
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Take your prescription pain medication every 4–6 hours as directed.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Switch to Tylenol (acetaminophen) as pain decreases.
              </li>
            </ul>

            <div className="bg-[#182838] text-white p-8">
              <h3 className="font-serif text-xl text-white mb-3">
                Opioid Safety Warning
              </h3>
              <p className="body-lg text-white/70">
                Opioid pain medications carry risks of addiction, abuse, and
                misuse, even at recommended doses. Use only as directed by your
                periodontist and for the shortest duration necessary. Do not
                combine with alcohol, sedatives, or other central nervous system
                depressants.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-cream border-l-2 border-teal p-6">
            <h3 className="font-serif text-xl text-navy mb-2">
              Contact Our Office
            </h3>
            <p className="body-lg text-gray-dark/70">
              <a href="tel:8043556593" className="text-teal hover:text-navy transition-colors">
                Richmond: (804) 355-6593
              </a>{" "}
              &nbsp;|&nbsp;{" "}
              <a href="tel:8047947094" className="text-teal hover:text-navy transition-colors">
                Midlothian: (804) 794-7094
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
