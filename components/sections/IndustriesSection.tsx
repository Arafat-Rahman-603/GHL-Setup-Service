import Link from "next/link";
import { ghlIndustries } from "@/lib/content/ghl-setup";

export function IndustriesSection() {
  return (
    <section
      className="section-md bg-surface border-b border-gray-100"
      aria-labelledby="industries-heading"
    >
      <div className="container-page">
        <div className="mb-10">
          <span className="eyebrow mb-3 block w-fit">Industries</span>
          <h2 id="industries-heading" className="text-headline max-w-xl">
            Configuration changes based on how your industry works.
          </h2>
          <p className="text-body text-gray-500 mt-3 max-w-xl">
            GoHighLevel implementation for a real estate team looks different
            from an HVAC company or a coaching business. We configure the
            system around your specific workflows.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ghlIndustries.map((industry) => (
            <article
              key={industry.slug}
              className="card card-padded flex flex-col gap-4"
              aria-labelledby={`industry-${industry.slug}`}
            >
              <h3
                id={`industry-${industry.slug}`}
                className="text-sm font-bold text-ink-900"
              >
                {industry.name}
              </h3>
              <p className="text-body text-gray-500 flex-1">{industry.description}</p>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Common workflows
                </p>
                <ul className="flex flex-col gap-1">
                  {industry.workflows.map((wf) => (
                    <li
                      key={wf}
                      className="flex items-center gap-2 text-xs text-gray-500"
                    >
                      <span
                        className="w-1 h-1 rounded-full bg-gray-400 shrink-0"
                        aria-hidden="true"
                      />
                      {wf}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={`/industries/${industry.slug}`}
                className="text-sm font-semibold text-ink-900 hover:text-accent transition-colors"
                aria-label={`Learn about GoHighLevel implementation for ${industry.name}`}
              >
                Learn more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
