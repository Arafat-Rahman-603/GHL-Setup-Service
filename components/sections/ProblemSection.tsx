import { ghlProblems } from "@/lib/content/ghl-setup";

export function ProblemSection() {
  const { heading, intro, problems } = ghlProblems;

  return (
    <section
      className="section-md bg-surface border-b border-gray-100"
      aria-labelledby="problem-heading"
    >
      <div className="container-page">
        {/* Editorial header — left-anchored, with cap-line */}
        <div className="grid lg:grid-cols-[380px_1fr] gap-10 lg:gap-16 mb-12">
          <div>
            <h2 id="problem-heading" className="text-headline mb-4">
              {heading}
            </h2>
            <p className="text-body text-gray-500">{intro}</p>
          </div>
          {/* Right decorative note */}
          <div className="hidden lg:flex items-end pb-1">
            <div className="border-l-2 border-gray-200 pl-6">
              <p className="text-sm text-gray-400 leading-relaxed italic">
                &ldquo;The platform is not the problem. The implementation is.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Problem list — alternating vertical editorial layout */}
        <div className="flex flex-col divide-y divide-gray-200">
          {problems.map((problem, i) => (
            <div
              key={problem.label}
              className="grid lg:grid-cols-[48px_240px_1fr] gap-4 lg:gap-8 py-7 items-start"
            >
              {/* Number */}
              <span
                className="text-sm font-medium tabular-nums text-gray-400 pt-0.5 select-none"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Label */}
              <h3 className="text-sm font-semibold text-ink-900 leading-snug">
                {problem.label}
              </h3>

              {/* Body */}
              <p className="text-body text-gray-500">{problem.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
