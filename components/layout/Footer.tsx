import Link from "next/link";
import {
  PRACTICE_NAME,
  LOCATIONS,
  SERVICES,
  PRACTICE_PHONE_DISPLAY,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#182838] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Practice info */}
          <div>
            <h3 className="font-serif text-xl font-semibold tracking-tight">
              {PRACTICE_NAME}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Board-certified periodontists providing advanced implant and
              periodontal care in the Richmond, Virginia area.
            </p>
            <a
              href={`tel:${PRACTICE_PHONE_DISPLAY.replace(/[^+\d]/g, "")}`}
              className="mt-4 inline-block text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              {PRACTICE_PHONE_DISPLAY}
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Services
            </h4>
            <ul className="mt-4 space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Locations */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Locations
            </h4>
            <ul className="mt-4 space-y-6">
              {LOCATIONS.map((location) => (
                <li key={location.id}>
                  <p className="text-sm font-medium text-white/90">
                    {location.name}
                  </p>
                  <a
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {location.street}
                    <br />
                    {location.city}, {location.state} {location.zip}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Hours */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Hours
            </h4>
            <ul className="mt-4 space-y-2">
              {LOCATIONS[0].hours.map((entry) => (
                <li key={entry.days} className="text-sm text-white/70">
                  <span className="font-medium text-white/90">
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
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <p className="text-xs text-white/50">
            &copy; {2026} {PRACTICE_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-white/50 transition-colors hover:text-white/80"
            >
              Privacy Policy
            </Link>
            <Link
              href="/accessibility"
              className="text-xs text-white/50 transition-colors hover:text-white/80"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
