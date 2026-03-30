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
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="accent-line mb-6" />
          <h1 className="heading-xl text-navy mb-6">
            For Referring Doctors
          </h1>
          <p className="max-w-3xl body-lg text-gray-dark/70">
            Thank you for trusting Grove Periodontists with
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
              <h2 className="heading-lg text-navy mb-8">
                Our Referral Process
              </h2>
              <div className="space-y-6 text-gray-dark/70 leading-relaxed">
                <p>
                  We make the referral process as simple as possible for you and
                  your patients. Here is how it works:
                </p>
                <ol className="list-decimal list-inside space-y-4 pl-2">
                  <li>
                    <span className="font-medium text-navy">
                      Submit a referral
                    </span>{" "}
                    — Use the form on this page, fax your referral to our
                    office, or call us directly.
                  </li>
                  <li>
                    <span className="font-medium text-navy">
                      Prompt scheduling
                    </span>{" "}
                    — We contact the patient within one business day to schedule
                    their consultation.
                  </li>
                  <li>
                    <span className="font-medium text-navy">
                      Comprehensive evaluation
                    </span>{" "}
                    — Our periodontists perform a thorough exam and develop a
                    treatment plan in coordination with your care.
                  </li>
                  <li>
                    <span className="font-medium text-navy">
                      Detailed communication
                    </span>{" "}
                    — You receive a full report after each visit including
                    findings, treatment rendered, and recommended next steps.
                  </li>
                </ol>

                <div className="mt-8 border-l-2 border-teal bg-cream p-6">
                  <h3 className="text-lg font-semibold text-navy mb-3">
                    Contact Us Directly
                  </h3>
                  <p className="mb-2">
                    <span className="font-medium">Richmond:</span>{" "}
                    <a
                      href={`tel:${PRACTICE_PHONE_RICHMOND}`}
                      className="text-teal hover:underline"
                    >
                      {PRACTICE_PHONE_RICHMOND_DISPLAY}
                    </a>
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Midlothian:</span>{" "}
                    <a
                      href={`tel:${PRACTICE_PHONE_MIDLOTHIAN}`}
                      className="text-teal hover:underline"
                    >
                      {PRACTICE_PHONE_MIDLOTHIAN_DISPLAY}
                    </a>
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>{" "}
                    <a
                      href="mailto:referrals@richmondperio.com"
                      className="text-teal hover:underline"
                    >
                      referrals@richmondperio.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Referral Form */}
            <div>
              <h2 className="heading-lg text-navy mb-8">
                Referral Form
              </h2>

              {submitted ? (
                <div className="bg-cream border border-teal/20 p-8 text-center">
                  <h3 className="text-xl font-semibold text-navy mb-2">
                    Referral Received
                  </h3>
                  <p className="text-gray-dark/70">
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
                        className="block text-sm font-medium text-navy/70 mb-1"
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
                        className="w-full border border-navy/10 px-4 py-3 text-navy placeholder-gray-dark/40 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                        placeholder="Dr. Jane Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="practiceName"
                        className="block text-sm font-medium text-navy/70 mb-1"
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
                        className="w-full border border-navy/10 px-4 py-3 text-navy placeholder-gray-dark/40 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                        placeholder="ABC Family Dentistry"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="doctorPhone"
                        className="block text-sm font-medium text-navy/70 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="doctorPhone"
                        name="doctorPhone"
                        value={form.doctorPhone}
                        onChange={handleChange}
                        className="w-full border border-navy/10 px-4 py-3 text-navy placeholder-gray-dark/40 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                        placeholder="(804) 555-0123"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="doctorEmail"
                        className="block text-sm font-medium text-navy/70 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="doctorEmail"
                        name="doctorEmail"
                        value={form.doctorEmail}
                        onChange={handleChange}
                        className="w-full border border-navy/10 px-4 py-3 text-navy placeholder-gray-dark/40 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                        placeholder="doctor@practice.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="patientName"
                      className="block text-sm font-medium text-navy/70 mb-1"
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
                      className="w-full border border-navy/10 px-4 py-3 text-navy placeholder-gray-dark/40 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                      placeholder="Patient full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="reason"
                      className="block text-sm font-medium text-navy/70 mb-1"
                    >
                      Reason for Referral *
                    </label>
                    <select
                      id="reason"
                      name="reason"
                      required
                      value={form.reason}
                      onChange={handleChange}
                      className="w-full border border-navy/10 px-4 py-3 text-navy focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
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
                      className="block text-sm font-medium text-navy/70 mb-1"
                    >
                      Clinical Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      value={form.notes}
                      onChange={handleChange}
                      className="w-full border border-navy/10 px-4 py-3 text-navy placeholder-gray-dark/40 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal resize-y"
                      placeholder="Relevant clinical notes, X-ray findings, treatment history..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full sm:w-auto"
                  >
                    <span>Submit Referral</span>
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
