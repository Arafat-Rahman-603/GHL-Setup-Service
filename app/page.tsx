import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content/site";
import { services } from "@/lib/content/services";
import { industries } from "@/lib/content/industries";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  alternates: { canonical: site.url },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
};

// ─── Homepage sections ────────────────────────────────────────────────────────

function HomeHero() {
  return (
    <section className="section-lg border-b border-gray-100" aria-labelledby="home-hero-heading">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow mb-5 block w-fit">
            GoHighLevel Implementation & Automation
          </span>
          <h1 id="home-hero-heading" className="text-display mb-5">
            Business automation that{" "}
            <span className="text-gray-400">actually works</span> — not just a
            platform you pay for.
          </h1>
          <p className="text-body-lg text-gray-500 mb-8 max-w-xl">
            We implement GoHighLevel and related automation systems so your CRM,
            workflows, and communication channels work as a connected,
            operational system from day one.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href={site.cta.bookCall} className="btn btn-primary btn-lg">
              Book a Strategy Call
            </Link>
            <Link href="/services" className="btn btn-outline btn-lg">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesOverview() {
  return (
    <section className="section-md bg-surface border-b border-gray-100" aria-labelledby="services-overview-heading">
      <div className="container-page">
        <SectionHeading
          eyebrow="Services"
          heading="What we build and implement."
          subheading="From CRM configuration and workflow automation to funnels and integrations — configured for your specific business."
          className="mb-10"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={service.href}
              className="card card-padded flex flex-col gap-3 group hover:border-gray-300 transition-colors"
              aria-labelledby={`service-${service.slug}`}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                {service.category}
              </span>
              <h3
                id={`service-${service.slug}`}
                className="text-sm font-bold text-ink-900"
              >
                {service.title}
              </h3>
              <p className="text-body text-gray-500 flex-1">{service.description}</p>
              <span className="text-sm font-semibold text-ink-900 group-hover:text-accent transition-colors">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function GhlCapabilitySection() {
  const capabilities = [
    {
      title: "CRM & Pipeline",
      description:
        "Custom pipeline stages, contact fields, lead source tracking, and opportunity management configured to match your real sales process.",
    },
    {
      title: "Workflow Automation",
      description:
        "Lead follow-up sequences, appointment confirmation, reminders, and post-service workflows — tested and operational at handover.",
    },
    {
      title: "Calendar & Booking",
      description:
        "Structured booking with configured availability, appointment types, confirmation and reminder sequences.",
    },
    {
      title: "Communication Systems",
      description:
        "Email authentication, phone/SMS setup, and two-way communication channels — fully configured and deliverability-tested.",
    },
    {
      title: "Integrations",
      description:
        "Native connections, webhooks, and API integrations to connect your GoHighLevel account with the tools your business uses.",
    },
    {
      title: "Funnels & Pages",
      description:
        "Landing pages, opt-in funnels, and booking pages built inside GHL and connected to your CRM and automation workflows.",
    },
  ];

  return (
    <section className="section-md bg-white border-b border-gray-100" aria-labelledby="ghl-cap-heading">
      <div className="container-page">
        <div className="grid lg:grid-cols-[380px_1fr] gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <span className="eyebrow mb-3 block w-fit">GoHighLevel</span>
            <h2 id="ghl-cap-heading" className="text-headline mb-4">
              The complete GoHighLevel implementation.
            </h2>
            <p className="text-body text-gray-500 mb-5">
              GoHighLevel works best when every system is configured
              correctly and connected. We implement the platform
              end-to-end — not feature by feature in isolation.
            </p>
            <Link href="/services/gohighlevel-setup" className="btn btn-primary">
              GoHighLevel Setup
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden">
            {capabilities.map((cap) => (
              <div key={cap.title} className="bg-white p-5">
                <h3 className="text-sm font-bold text-ink-900 mb-2">{cap.title}</h3>
                <p className="text-body text-gray-500">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeProcess() {
  const steps = [
    { num: "01", title: "Strategy call", desc: "Map your business workflow, goals, and technical requirements." },
    { num: "02", title: "Scoping", desc: "Define what gets built, the timeline, and what's needed to start." },
    { num: "03", title: "Implementation", desc: "Configure, build, and integrate every system for your business." },
    { num: "04", title: "Testing", desc: "End-to-end verification of every workflow, channel, and connection." },
    { num: "05", title: "Handover & support", desc: "Documentation, walkthrough, and post-launch support." },
  ];

  return (
    <section className="section-md bg-surface border-b border-gray-100" aria-labelledby="home-process-heading">
      <div className="container-page">
        <SectionHeading
          eyebrow="How We Work"
          heading="A structured implementation process."
          subheading="Every engagement follows the same disciplined method — scoped to your business, executed systematically."
          className="mb-10"
        />
        <div className="grid sm:grid-cols-5 gap-0 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden sm:block absolute top-5 left-[10%] right-[10%] h-px bg-gray-200" aria-hidden="true" />

          {steps.map((step) => (
            <div key={step.num} className="relative flex flex-col items-start sm:items-center gap-3 pb-8 sm:pb-0 pl-8 sm:pl-0 border-l sm:border-l-0 border-gray-200">
              {/* Dot (sm) */}
              <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shrink-0 relative z-10">
                <span className="text-xs font-semibold tabular-nums text-ink-900">{step.num}</span>
              </div>
              <div className="sm:text-center">
                <h3 className="text-sm font-bold text-ink-900 mb-1">{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeIndustries() {
  return (
    <section className="section-md bg-white border-b border-gray-100" aria-labelledby="home-industries-heading">
      <div className="container-page">
        <SectionHeading
          eyebrow="Industries"
          heading="Configured for your business type."
          subheading="Implementation approach adapts to how your industry handles leads, scheduling, and client relationships."
          className="mb-10"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.slice(0, 6).map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group p-5 rounded-lg border border-gray-200 bg-white hover:border-gray-300 transition-colors flex flex-col gap-2"
              aria-labelledby={`home-ind-${ind.slug}`}
            >
              <h3 id={`home-ind-${ind.slug}`} className="text-sm font-bold text-ink-900">
                {ind.name}
              </h3>
              <p className="text-body text-gray-500 flex-1 line-clamp-2">{ind.description}</p>
              <span className="text-xs font-semibold text-ink-900 group-hover:text-accent transition-colors mt-1">
                See implementation →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <HomeHero />
      <ServicesOverview />
      <GhlCapabilitySection />
      <HomeProcess />
      <HomeIndustries />
      <CtaSection
        heading="Start with a strategy call."
        subheading="Tell us about your business and what you're trying to build. We'll outline a clear implementation plan."
      />
    </>
  );
}
