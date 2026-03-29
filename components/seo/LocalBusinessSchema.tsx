import { generateLocalBusinessSchema } from "@/lib/schema";

export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateLocalBusinessSchema()),
      }}
    />
  );
}
