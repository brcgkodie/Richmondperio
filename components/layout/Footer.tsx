import Link from "next/link";
import {
  PRACTICE_NAME,
  LOCATIONS,
  SERVICES,
  PRACTICE_PHONE_RICHMOND_DISPLAY,
  PRACTICE_PHONE_MIDLOTHIAN_DISPLAY,
  INSTAGRAM_URL,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#182838] text-white">
      {/* Part 1: CTA area */}
      <div className="border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 text-center">
          <div className="accent-line mx-auto mb-8" />
          <h2 className="heading-xl text-white">Ready to talk?</h2>
          <p className="label-sm text-white/30 mt-6">Schedule a consultation at either office</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="tel:+18043556593" className="label-sm text-teal hover:text-white transition-colors">
              Richmond {PRACTICE_PHONE_RICHMOND_DISPLAY}
            </a>
            <span className="hidden sm:block w-px h-4 bg-white/20" />
            <a href="tel:+18047947094" className="label-sm text-teal hover:text-white transition-colors">
              Midlothian {PRACTICE_PHONE_MIDLOTHIAN_DISPLAY}
            </a>
          </div>
          <div className="mt-8">
            <Link href="/appointments" className="btn-primary-light"><span>Request Appointment</span></Link>
          </div>
        </div>
      </div>

      {/* Part 2: Info grid */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-12">
          {/* Practice info */}
          <div className="md:col-span-4">
            <p className="font-serif text-2xl text-white">{PRACTICE_NAME}</p>
            <p className="mt-4 body-lg text-white/50">
              Board-certified periodontists providing advanced implant and
              periodontal care in the Richmond, Virginia area.
            </p>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="label-sm text-teal/60 mb-6">Services</h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="md:col-span-3">
            <h4 className="label-sm text-teal/60 mb-6">Locations</h4>
            <ul className="space-y-6">
              {LOCATIONS.map((location) => (
                <li key={location.id}>
                  <p className="text-sm font-medium text-white/70">
                    {location.name}
                  </p>
                  <a
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {location.street}
                    <br />
                    {location.city}, {location.state} {location.zip}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div className="md:col-span-2">
            <h4 className="label-sm text-teal/60 mb-6">Hours</h4>
            <ul className="space-y-2">
              {LOCATIONS[0].hours.map((entry) => (
                <li key={entry.days} className="text-sm text-white/50">
                  <span className="font-medium text-white/70">
                    {entry.days}
                  </span>
                  <br />
                  {entry.time}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">&copy; 2026 {PRACTICE_NAME}</p>
          <div className="flex items-center gap-6">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="label-sm text-white/30 hover:text-white/60 transition-colors">Instagram</a>
            <Link href="/privacy-policy" className="text-xs text-white/30 hover:text-white/60 transition-colors">Privacy</Link>
            <Link href="/accessibility" className="text-xs text-white/30 hover:text-white/60 transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
