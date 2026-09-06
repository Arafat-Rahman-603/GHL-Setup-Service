import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content/site";
import { industries } from "@/lib/content/industries";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Industries",
  description: "GoHighLevel implementation adapted to your industry: real estate, home services, agencies, coaching, healthcare, and professional services.",
  alternates: { canonical: `${site.url}/industries` },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="section-lg bg-white border-b border-gray-100">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="eyebrow mb-4 block w-fit">Industries</span>
            <h1 className="text-display mb-4">Configuration adapts to your industry.</h1>
            <p className="text-body-lg text-gray-500">
              How a real estate team manages leads is fundamentally different
              from how an HVAC company or a coaching business operates. We
              configure GoHighLevel to reflect those differences — not a
              one-size template.
            </p>
          </div>
        </div>
      </section>

      <section className="section-md bg-surface">
        <div className="container-page">
          <div className="flex flex-col gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden">
            {industries.map((industry, i) => (
              <div key={industry.slug} className="bg-white grid lg:grid-cols-[240px_1fr_240px] gap-6 lg:gap-8 p-6 lg:p-8 items-start">
                <div>
                  <span className="text-xs font-medium tabular-nums text-gray-400 select-none">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="text-sm font-bold text-ink-900 mt-1">{industry.name}</h2>
                </div>
                <p className="text-body text-gray-500">{industry.description}</p>
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Workflows</p>
                  {industry.workflows.map((wf) => (
                    <span key={wf} className="text-xs text-gray-500 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-gray-400" aria-hidden />
                      {wf}
                    </span>
                  ))}
                  <Link href={`/industries/${industry.slug}`} className="btn btn-outline btn-sm mt-2 w-fit">
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
