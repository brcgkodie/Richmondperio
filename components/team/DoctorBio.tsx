interface Doctor {
  bio: string;
  personal: string;
  education: string[];
  memberships: string[];
}

interface DoctorBioProps {
  doctor: Doctor;
}

export default function DoctorBio({ doctor }: DoctorBioProps) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      {/* Biography */}
      <div className="mb-14">
        <h2 className="font-serif text-3xl text-navy mb-6">
          Biography
        </h2>
        <div className="text-gray-dark/80 leading-relaxed text-lg whitespace-pre-line">
          {doctor.bio}
        </div>
      </div>

      {/* Education — timeline style */}
      {doctor.education.length > 0 && (
        <div className="mb-14">
          <h3 className="font-serif text-2xl text-navy mb-6">
            Education
          </h3>
          <ol className="relative border-l-2 border-gray-light pl-6 space-y-6">
            {doctor.education.map((item, index) => (
              <li key={index} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 border-2 border-teal/50 bg-white" />
                <p className="text-gray-dark/80 text-base leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Memberships */}
      {doctor.memberships.length > 0 && (
        <div className="mb-14">
          <h3 className="font-serif text-2xl text-navy mb-6">
            Memberships
          </h3>
          <ul className="space-y-3">
            {doctor.memberships.map((membership, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-dark/80"
              >
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-teal/50" />
                <span className="text-base leading-relaxed">{membership}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Personal */}
      {doctor.personal && (
        <div>
          <h3 className="font-serif text-2xl text-navy mb-6">
            Personal
          </h3>
          <div className="text-gray-dark/80 leading-relaxed text-lg whitespace-pre-line">
            {doctor.personal}
          </div>
        </div>
      )}
    </section>
  );
}
