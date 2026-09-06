import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content/site";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Blog",
  description: `Guides and insights on GoHighLevel implementation, CRM configuration, and business automation from ${site.name}.`,
  alternates: { canonical: `${site.url}/blog` },
};

export default function BlogPage() {
  return (
    <>
      <section className="section-lg bg-white border-b border-gray-100">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="eyebrow mb-4 block w-fit">Blog</span>
            <h1 className="text-display mb-4">Implementation guides & insights.</h1>
            <p className="text-body-lg text-gray-500">
              Practical content on GoHighLevel implementation, CRM
              configuration, workflow automation, and business operations.
            </p>
          </div>
        </div>
      </section>

      <section className="section-md bg-surface border-b border-gray-100">
        <div className="container-page">
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-12 text-center">
            <p className="text-sm font-semibold text-gray-400 mb-2">Articles coming soon.</p>
            <p className="text-body text-gray-400 max-w-md mx-auto">
              We&apos;re publishing guides on GoHighLevel setup, automation
              configuration, and business operations. Subscribe to be notified
              when articles are published.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-6">
              <Link href="/contact" className="btn btn-outline">Get notified</Link>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
