import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content/site";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Case Studies",
  description: `Implementation case studies from ${site.name} — GoHighLevel setup, CRM configuration, and automation for businesses across industries.`,
  alternates: { canonical: `${site.url}/case-studies` },
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="section-lg bg-white border-b border-gray-100">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="eyebrow mb-4 block w-fit">Case Studies</span>
            <h1 className="text-display mb-4">Implementation in practice.</h1>
            <p className="text-body-lg text-gray-500">
              Real-world implementations across industries — how we scoped,
              built, and delivered GoHighLevel systems for specific business
              workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture ready — add real case studies when available */}
      <section className="section-md bg-surface border-b border-gray-100">
        <div className="container-page">
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-12 text-center">
            <p className="text-sm font-semibold text-gray-400 mb-2">
              Case studies coming soon.
            </p>
            <p className="text-body text-gray-400 max-w-md mx-auto">
              We&apos;re documenting completed implementations. In the meantime,
              book a strategy call to discuss specific scenarios relevant to
              your business.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-6">
              <Link href={site.cta.bookCall} className="btn btn-primary">
                Book a Strategy Call
              </Link>
              <Link href="/services" className="btn btn-outline">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
