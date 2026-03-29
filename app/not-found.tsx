import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="heading-xl text-navy mb-4">
        Page Not Found
      </h1>
      <p className="max-w-md body-lg text-gray-dark/70 mb-8">
        Sorry, the page you are looking for does not exist or has been moved.
        Let us help you find what you need.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="btn-primary"
        >
          <span>Back to Homepage</span>
        </Link>
        <Link
          href="/contact"
          className="inline-block border border-navy/20 px-8 py-4 text-xs font-medium uppercase tracking-[0.08em] text-navy hover:bg-navy hover:text-white transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
