import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="font-serif text-5xl md:text-6xl text-neutral-900 mb-4">
        Page Not Found
      </h1>
      <p className="max-w-md text-lg text-neutral-600 mb-8">
        Sorry, the page you are looking for does not exist or has been moved.
        Let us help you find what you need.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-block rounded-full bg-[#182838] px-8 py-4 text-sm font-semibold text-white transition-shadow hover:shadow-lg"
        >
          Back to Homepage
        </Link>
        <Link
          href="/contact"
          className="inline-block rounded-full border border-neutral-300 px-8 py-4 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-50"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
