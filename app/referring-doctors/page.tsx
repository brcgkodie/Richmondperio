"use client";

import { useState } from "react";
import {
  PRACTICE_PHONE_RICHMOND_DISPLAY,
  PRACTICE_PHONE_MIDLOTHIAN_DISPLAY,
  PRACTICE_PHONE_RICHMOND,
  PRACTICE_PHONE_MIDLOTHIAN,
} from "@/lib/constants";

export default function ReferringDoctorsPage() {
  const [form, setForm] = useState({
    doctorName: "",
    practiceName: "",
    doctorPhone: "",
    doctorEmail: "",
    patientName: "",
    reason: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: integrate referral form submission
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-6">
            For Referring Doctors
          </h1>
          <p className="max-w-3xl text-lg text-neutral-600 leading-relaxed">
            Thank you for trusting Overstreet, White &amp; Dunegan, Ltd. with
            your patients&apos; periodontal care. We are committed to seamless
            communication and collaborative treatment planning.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Referral Process */}
            <div>
              <h2 className="font-serif text-3xl text-neutral-900 mb-8">
                Our Referral Process
              </h2>
              <div className="space-y-6 text-neutral-600 leading-relaxed">
                <p>
                  We make the referral process as simple as possible for you and
                  your patients. Here is how it works:
                </p>
                <ol className="list-decimal list-inside space-y-4 pl-2">
                  <li>
                    <span className="font-medium text-neutral-900">
                      Submit a referral
                    </span>{" "}
                    — Use the form on this page, fax your referral to our
                    office, or call us directly.
                  </li>
                  <li>
                    <span className="font-medium text-neutral-900">
                      Prompt scheduling
                    </span>{" "}
                    — We contact the patient within one business day to schedule
                    their consultation.
                  </li>
                  <li>
                    <span className="font-medium text-neutral-900">
                      Comprehensive evaluation
                    </span>{" "}
                    — Our periodontists perform a thorough exam and develop a
                    treatment plan in coordination with your care.
                  </li>
                  <li>
                    <span className="font-medium text-neutral-900">
                      Detailed communication
                    </span>{" "}
                    — You receive a full report after each visit including
                    findings, treatment rendered, and recommended next steps.
                  </li>
                </ol>

                <div className="mt-8 rounded-xl bg-neutral-50 border border-neutral-200 p-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                    Contact Us Directly
                  </h3>
                  <p className="mb-2">
                    <span className="font-medium">Richmond:</span>{" "}
                    <a
                      href={`tel:${PRACTICE_PHONE_RICHMOND}`}
                      className="text-[#0542BF] hover:underline"
                    >
                      {PRACTICE_PHONE_RICHMOND_DISPLAY}
                    </a>
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Midlothian:</span>{" "}
                    <a
                      href={`tel:${PRACTICE_PHONE_MIDLOTHIAN}`}
                      className="text-[#0542BF] hover:underline"
                    >
                      {PRACTICE_PHONE_MIDLOTHIAN_DISPLAY}
                    </a>
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>{" "}
                    <a
                      href="mailto:referrals@richmondperio.com"
                      className="text-[#0542BF] hover:underline"
                    >
                      referrals@richmondperio.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Referral Form */}
            <div>
              <h2 className="font-serif text-3xl text-neutral-900 mb-8">
                Referral Form
              </h2>

              {submitted ? (
                <div className="rounded-xl bg-green-50 border border-green-200 p-8 text-center">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Referral Received
                  </h3>
                  <p className="text-green-700">
                    Thank you for your referral. Our team will contact the
                    patient within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="doctorName"
                        className="block text-sm font-medium text-neutral-700 mb-1"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="doctorName"
                        name="doctorName"
                        required
                        value={form.doctorName}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:border-[#0542BF] focus:outline-none focus:ring-1 focus:ring-[#0542BF]"
                        placeholder="Dr. Jane Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="practiceName"
                        className="block text-sm font-medium text-neutral-700 mb-1"
                      >
                        Practice Name *
                      </label>
                      <input
                        type="text"
                        id="practiceName"
                        name="practiceName"
                        required
                        value={form.practiceName}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:border-[#0542BF] focus:outline-none focus:ring-1 focus:ring-[#0542BF]"
                        placeholder="ABC Family Dentistry"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="doctorPhone"
                        className="block text-sm font-medium text-neutral-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="doctorPhone"
                        name="doctorPhone"
                        value={form.doctorPhone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:border-[#0542BF] focus:outline-none focus:ring-1 focus:ring-[#0542BF]"
                        placeholder="(804) 555-0123"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="doctorEmail"
                        className="block text-sm font-medium text-neutral-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="doctorEmail"
                        name="doctorEmail"
                        value={form.doctorEmail}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:border-[#0542BF] focus:outline-none focus:ring-1 focus:ring-[#0542BF]"
                        placeholder="doctor@practice.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="patientName"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Patient Name *
                    </label>
                    <input
                      type="text"
                      id="patientName"
                      name="patientName"
                      required
                      value={form.patientName}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:border-[#0542BF] focus:outline-none focus:ring-1 focus:ring-[#0542BF]"
                      placeholder="Patient full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="reason"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Reason for Referral *
                    </label>
                    <select
                      id="reason"
                      name="reason"
                      required
                      value={form.reason}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-[#0542BF] focus:outline-none focus:ring-1 focus:ring-[#0542BF]"
                    >
                      <option value="">Select reason</option>
                      <option value="implant-evaluation">
                        Implant Evaluation
                      </option>
                      <option value="periodontal-evaluation">
                        Periodontal Evaluation
                      </option>
                      <option value="gum-grafting">Gum Grafting</option>
                      <option value="bone-grafting">Bone Grafting</option>
                      <option value="crown-lengthening">
                        Crown Lengthening
                      </option>
                      <option value="extraction">Extraction</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="notes"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Clinical Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      value={form.notes}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:border-[#0542BF] focus:outline-none focus:ring-1 focus:ring-[#0542BF] resize-y"
                      placeholder="Relevant clinical notes, X-ray findings, treatment history..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#182838] px-8 py-4 text-sm font-semibold text-white transition-shadow hover:shadow-lg sm:w-auto"
                  >
                    Submit Referral
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
