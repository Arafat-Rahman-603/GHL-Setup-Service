import type { Metadata } from "next";
import { site } from "@/lib/content/site";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} implements GoHighLevel and business automation systems for companies that want operational processes, not just software.`,
  alternates: { canonical: `${site.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <section className="section-lg bg-white border-b border-gray-100">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="eyebrow mb-4 block w-fit">About</span>
            <h1 className="text-display mb-5">
              We implement systems that businesses can actually operate.
            </h1>
            <p className="text-body-lg text-gray-500">
              {site.name} is a GoHighLevel implementation and business
              automation company. We work with businesses and agencies that
              need their CRM, workflows, and communication systems to function
              correctly — not just be set up.
            </p>
          </div>
        </div>
      </section>

      <section className="section-md bg-surface border-b border-gray-100">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h2 className="text-headline mb-5">What we believe about implementation.</h2>
              <div className="flex flex-col gap-4">
                {[
                  { title: "Business-first configuration", body: "Every pipeline, workflow, and automation is built around how the business actually operates — not applied from a default template and called done." },
                  { title: "Tested before handover", body: "We don't hand over systems we haven't confirmed work end-to-end. Every workflow, form, and communication channel is verified before delivery." },
                  { title: "Documentation is part of the work", body: "A system that can't be understood by the team that operates it isn't complete. Documentation and handover are built into every engagement." },
                  { title: "Post-launch support matters", body: "Going live is the start of the relationship, not the end. Every implementation includes post-launch support to ensure the system works in practice." },
                ].map((item) => (
                  <div key={item.title} className="border-l-2 border-gray-200 pl-5">
                    <h3 className="text-sm font-bold text-ink-900 mb-1">{item.title}</h3>
                    <p className="text-body text-gray-500">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-headline mb-5">Who we work with.</h2>
              <div className="flex flex-col gap-4">
                <p className="text-body text-gray-500">
                  We work with small to mid-sized businesses and agencies across
                  a range of industries — primarily those that handle leads,
                  appointments, and client relationships at volume.
                </p>
                <p className="text-body text-gray-500">
                  Our typical client has a working business model and is ready to
                  move from manual, disconnected processes to a systematic,
                  automated operation — and wants someone who can implement that
                  correctly, not just configure settings.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Real Estate", "Home Services", "Agencies", "Coaching", "Healthcare", "Professional Services"].map((ind) => (
                    <span key={ind} className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1.5 rounded-md">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection heading="Start with a strategy call." subheading="Tell us about your business and where you need implementation help." />
    </>
  );
}
