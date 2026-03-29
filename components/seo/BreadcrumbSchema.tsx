import Link from "next/link";
import { generateBreadcrumbSchema } from "@/lib/schema";

interface BreadcrumbSchemaProps {
  items: { name: string; url: string }[];
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(items)),
        }}
      />
      <nav aria-label="Breadcrumb" className="py-4 text-sm text-gray-500">
        <ol className="flex items-center gap-1.5">
          {items.map((item, index) => (
            <li key={item.url} className="flex items-center gap-1.5">
              {index > 0 && (
                <span aria-hidden="true" className="text-gray-300">
                  /
                </span>
              )}
              {index === items.length - 1 ? (
                <span className="text-gray-900 font-medium">{item.name}</span>
              ) : (
                <Link
                  href={item.url}
                  className="transition-colors hover:text-gray-900"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
