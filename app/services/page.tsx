import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content/site";
import { services } from "@/lib/content/services";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Services",
  description: `GoHighLevel setup, CRM implementation, workflow automation, funnel development, and integrations — professional implementation services by ${site.name}.`,
  alternates: { canonical: `${site.url}/services` },
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="section-md bg-white border-b border-gray-100">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="eyebrow mb-4 block w-fit">Services</span>
            <h1 className="text-display mb-4">
              Implementation services for GoHighLevel and business automation.
            </h1>
            <p className="text-body-lg text-gray-500">
              Each service is scoped to your specific business — not applied
              from a template. From a new GoHighLevel account to a fully
              automated lead and client management system.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-md bg-surface" aria-labelledby="services-list-heading">
        <div className="container-page">
          <h2 id="services-list-heading" className="sr-only">All services</h2>
          <div className="flex flex-col gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className="bg-white grid lg:grid-cols-[240px_1fr_auto] gap-4 lg:gap-8 p-6 lg:p-8 items-start"
              >
                {/* Number + category */}
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-medium tabular-nums text-gray-400 shrink-0 mt-0.5 select-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      {service.category}
                    </span>
                    <h2 className="text-sm font-bold text-ink-900 mt-1">{service.title}</h2>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <p className="text-sm font-medium text-ink-900 mb-1">{service.tagline}</p>
                  <p className="text-body text-gray-500">{service.description}</p>
                </div>

                {/* CTA */}
                <div className="flex items-start lg:justify-end">
                  <Link
                    href={service.href}
                    className="btn btn-outline btn-sm whitespace-nowrap"
                    aria-label={`Learn about ${service.title}`}
                  >
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
