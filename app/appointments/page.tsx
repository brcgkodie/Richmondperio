"use client";

import { useState } from "react";
import { LOCATIONS, SERVICES } from "@/lib/constants";

export default function AppointmentsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    location: "",
    reason: "",
    message: "",
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
    // TODO: integrate with NexHealth / Zocdoc API
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="accent-line mb-6" />
          <h1 className="heading-xl text-navy mb-6">
            Request an Appointment
          </h1>
          <p className="max-w-3xl body-lg text-gray-dark/70">
            Fill out the form below and our team at Overstreet, White &amp;
            Dunegan will contact you to confirm your appointment. For immediate
            scheduling, call our Richmond office at (804) 355-6593 or our
            Midlothian office at (804) 794-7094.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          {/* NexHealth / Zocdoc integration placeholder */}
          <div className="mb-10 bg-cream border-l-2 border-teal p-6">
            <p className="text-sm text-navy/70">
              <span className="text-navy font-medium">Online Scheduling:</span> Direct
              online booking via NexHealth or Zocdoc will be available here
              soon. In the meantime, please use the form below to request an
              appointment.
            </p>
          </div>

          {submitted ? (
            <div className="bg-cream border border-teal/20 p-8 text-center">
              <h2 className="text-xl font-semibold text-navy mb-2">
                Request Received!
              </h2>
              <p className="text-gray-dark/70">
                Thank you for your appointment request. Our team will contact
                you within one business day to confirm your appointment.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-navy/70 mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-navy/10 px-4 py-3 text-navy placeholder-gray-dark/30 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-navy/70 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-navy/10 px-4 py-3 text-navy placeholder-gray-dark/30 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-navy/70 mb-1"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border border-navy/10 px-4 py-3 text-navy placeholder-gray-dark/30 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                    placeholder="(804) 555-0123"
                  />
                </div>

                <div>
                  <label
                    htmlFor="preferredDate"
                    className="block text-sm font-medium text-navy/70 mb-1"
                  >
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={form.preferredDate}
                    onChange={handleChange}
                    className="w-full border border-navy/10 px-4 py-3 text-navy focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-navy/70 mb-1"
                  >
                    Preferred Location *
                  </label>
                  <select
                    id="location"
                    name="location"
                    required
                    value={form.location}
                    onChange={handleChange}
                    className="w-full border border-navy/10 px-4 py-3 text-navy focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                  >
                    <option value="">Select a location</option>
                    {LOCATIONS.map((loc) => (
                      <option key={loc.id} value={loc.id}>
                        {loc.name} — {loc.city}, {loc.state}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="reason"
                    className="block text-sm font-medium text-navy/70 mb-1"
                  >
                    Reason for Visit
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    value={form.reason}
                    onChange={handleChange}
                    className="w-full border border-navy/10 px-4 py-3 text-navy focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map((service) => (
                      <option key={service.slug} value={service.slug}>
                        {service.title}
                      </option>
                    ))}
                    <option value="consultation">General Consultation</option>
                    <option value="second-opinion">Second Opinion</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-navy/70 mb-1"
                >
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-navy/10 px-4 py-3 text-navy placeholder-gray-dark/30 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal resize-y"
                  placeholder="Any additional details about your visit..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full sm:w-auto"
              >
                <span>Request Appointment</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
