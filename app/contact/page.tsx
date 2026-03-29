"use client";

import { useState } from "react";
import { LOCATIONS, PRACTICE_PHONE_DISPLAY } from "@/lib/constants";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
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
    // TODO: integrate form submission
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-6">
            Contact Us
          </h1>
          <p className="max-w-3xl text-lg text-neutral-600 leading-relaxed">
            Have a question or ready to schedule a visit? Reach out to us using
            the form below or contact either of our offices directly.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl text-neutral-900 mb-8">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="rounded-xl bg-green-50 border border-green-200 p-8 text-center">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-700">
                    Your message has been received. Our team will be in touch
                    shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-700 mb-1"
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
                      className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:border-[#0542BF] focus:outline-none focus:ring-1 focus:ring-[#0542BF]"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-700 mb-1"
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
                      className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:border-[#0542BF] focus:outline-none focus:ring-1 focus:ring-[#0542BF]"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:border-[#0542BF] focus:outline-none focus:ring-1 focus:ring-[#0542BF]"
                      placeholder="(804) 555-0123"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Preferred Location
                    </label>
                    <select
                      id="location"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-[#0542BF] focus:outline-none focus:ring-1 focus:ring-[#0542BF]"
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
                      htmlFor="message"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:border-[#0542BF] focus:outline-none focus:ring-1 focus:ring-[#0542BF] resize-y"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#182838] px-8 py-4 text-sm font-semibold text-white transition-shadow hover:shadow-lg sm:w-auto"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Office Info */}
            <div>
              <h2 className="font-serif text-3xl text-neutral-900 mb-8">
                Our Offices
              </h2>

              <div className="space-y-10">
                {LOCATIONS.map((location) => (
                  <div key={location.id}>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                      {location.name}
                    </h3>
                    <address className="not-italic text-neutral-600 leading-relaxed mb-2">
                      {location.street}
                      <br />
                      {location.city}, {location.state} {location.zip}
                    </address>
                    <p className="text-neutral-600 mb-3">
                      <span className="font-medium">Phone:</span>{" "}
                      <a
                        href={`tel:${location.phone.replace(/[^+\d]/g, "")}`}
                        className="text-[#0542BF] hover:underline"
                      >
                        {location.phone}
                      </a>
                    </p>
                    <ul className="space-y-1">
                      {location.hours.map((h) => (
                        <li
                          key={h.days}
                          className="flex justify-between text-sm text-neutral-600 max-w-xs"
                        >
                          <span>{h.days}</span>
                          <span>{h.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-xl bg-neutral-50 p-6">
                <p className="text-neutral-600">
                  <span className="font-medium">General inquiries:</span>{" "}
                  <a
                    href={`tel:${PRACTICE_PHONE_DISPLAY.replace(/[^+\d]/g, "")}`}
                    className="text-[#0542BF] hover:underline"
                  >
                    {PRACTICE_PHONE_DISPLAY}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
