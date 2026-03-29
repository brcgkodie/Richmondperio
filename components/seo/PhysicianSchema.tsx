import { generatePhysicianSchema } from "@/lib/schema";

interface PhysicianSchemaProps {
  doctor: {
    name: string;
    credentials: string;
    education: readonly { readonly institution: string; readonly degree: string }[];
    memberships: readonly string[];
  };
}

export default function PhysicianSchema({ doctor }: PhysicianSchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generatePhysicianSchema(doctor)),
      }}
    />
  );
}
