import MagneticButton from "@/components/shared/MagneticButton";
import { PRACTICE_PHONE_DISPLAY } from "@/lib/constants";

interface CTABandProps {
  headline?: string;
  subtext?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTABand({
  headline = "Ready to Transform Your Smile?",
  subtext = "Schedule a consultation with our board-certified periodontists to discuss your treatment options.",
  buttonText = "Request Appointment",
  buttonHref = "/appointments",
}: CTABandProps) {
  return (
    <section
      className="py-24 px-6 text-white"
      style={{ backgroundColor: "#182838" }}
    >
      <div className="mx-auto max-w-3xl">
        <div className="accent-line mx-auto mb-8" />
        <h2 className="heading-xl font-serif text-white text-center">
          {headline}
        </h2>
        <p className="body-lg text-white/40 text-center mt-4 max-w-xl mx-auto">
          {subtext}
        </p>
        <div className="mt-10 flex flex-col items-center gap-6">
          <MagneticButton
            href={buttonHref}
            className="inline-block"
          >
            <span className="btn-primary-light">
              <span>{buttonText}</span>
            </span>
          </MagneticButton>
          <a
            href={`tel:${PRACTICE_PHONE_DISPLAY.replace(/[^+\d]/g, "")}`}
            className="label-sm text-white/30 hover:text-white transition-colors mt-6 block text-center"
          >
            {PRACTICE_PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
