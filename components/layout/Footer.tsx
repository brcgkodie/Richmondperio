import Link from "next/link";
import {
  PRACTICE_NAME,
  LOCATIONS,
  SERVICES,
  INSTAGRAM_URL,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#182838] text-white">
      {/* Info grid */}
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
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 label-sm text-white/30 hover:text-white/60 transition-colors">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              @owdperio
            </a>
            <Link href="/privacy-policy" className="text-xs text-white/30 hover:text-white/60 transition-colors">Privacy</Link>
            <Link href="/accessibility" className="text-xs text-white/30 hover:text-white/60 transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
