import { generatePhysicianSchema } from "@/lib/schema";

interface PhysicianSchemaProps {
  doctor: {
    name: string;
    credentials: string;
    education: { institution: string; degree: string }[];
    memberships: string[];
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
