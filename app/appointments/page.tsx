import type { Metadata } from "next";
import AppointmentCalendar from "@/components/appointments/AppointmentCalendar";
import { ogMeta } from "@/lib/og";

export const metadata: Metadata = {
  title: "Schedule an Appointment | Grove Periodontists",
  description:
    "Request an appointment at Grove Periodontists in Richmond or Midlothian, VA. Select your preferred location, date, and time online.",
  ...ogMeta({
    title: "Schedule an Appointment",
    description:
      "Request an appointment at Grove Periodontists in Richmond or Midlothian, VA. Select your preferred location, date, and time online.",
    path: "/appointments",
  }),
};

export default function AppointmentsPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="accent-line mb-6" />
          <span className="label-sm text-teal mb-4 block">Appointments</span>
          <h1 className="heading-xl text-navy mb-6">
            Schedule a Consultation
          </h1>
          <p className="max-w-3xl body-lg text-gray-dark/70">
            Select your preferred location, date, and time below. Your appointment
            will be confirmed by phone by a member of our staff. For immediate
            scheduling, call our Richmond office at (804) 355-6593 or our
            Midlothian office at (804) 794-7094.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AppointmentCalendar />
        </div>
      </section>
    </>
  );
}
