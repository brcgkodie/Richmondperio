interface Doctor {
  bio: string;
  personal: string;
  education: string[];
  memberships: string[];
  accomplishments?: string[];
  publications?: string[];
  licenses?: string[];
}

interface DoctorBioProps {
  doctor: Doctor;
}

function CVSection({
  title,
  items,
  icon = "dot",
}: {
  title: string;
  items: string[];
  icon?: "dot" | "timeline";
}) {
  if (!items || items.length === 0) return null;

  return (
    <div className="mb-14">
      <h3 className="font-serif text-2xl text-navy mb-6">{title}</h3>
      {icon === "timeline" ? (
        <ol className="relative border-l-2 border-gray-light pl-6 space-y-6">
          {items.map((item, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 border-2 border-teal/50 bg-white" />
              <p className="text-gray-dark/80 text-base leading-relaxed">{item}</p>
            </li>
          ))}
        </ol>
      ) : (
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-dark/80">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-teal/50" />
              <span className="text-base leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function DoctorBio({ doctor }: DoctorBioProps) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      {/* Biography */}
      <div className="mb-14">
        <h2 className="font-serif text-3xl text-navy mb-6">Biography</h2>
        <div className="text-gray-dark/80 leading-relaxed text-lg whitespace-pre-line">
          {doctor.bio}
        </div>
      </div>

      {/* Education */}
      <CVSection title="Education" items={doctor.education} icon="timeline" />

      {/* Licenses & Certifications */}
      <CVSection title="Licenses &amp; Certifications" items={doctor.licenses || []} />

      {/* Accomplishments & Honors */}
      <CVSection title="Accomplishments &amp; Honors" items={doctor.accomplishments || []} />

      {/* Research & Publications */}
      <CVSection title="Research &amp; Publications" items={doctor.publications || []} />

      {/* Professional Organizations */}
      <CVSection title="Professional Organizations" items={doctor.memberships} />

      {/* Personal */}
      {doctor.personal && (
        <div>
          <h3 className="font-serif text-2xl text-navy mb-6">Personal</h3>
          <div className="text-gray-dark/80 leading-relaxed text-lg whitespace-pre-line">
            {doctor.personal}
          </div>
        </div>
      )}
    </section>
  );
}
