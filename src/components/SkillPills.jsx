export default function SkillPills({ align = "center", skills }) {
  const alignmentClass = align === "start" ? "justify-start" : "justify-center";

  return (
    <div className={`flex flex-wrap ${alignmentClass} gap-2 sm:gap-3`} aria-label="Skills">
      {skills.map((skill) => (
        <span
          className="rounded-lg border border-[#f1f2c4] px-3 py-1.5 text-sm font-bold text-[#f1f2c4] sm:py-2 sm:text-base"
          key={skill}
        >
          {skill}
        </span>
      ))}
    </div>
  );
}
