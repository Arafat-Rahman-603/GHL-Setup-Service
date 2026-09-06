import Link from "next/link";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { site } from "@/lib/content/site";

export function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="container-page">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-lg text-ink-900 tracking-tight shrink-0 mr-6"
            aria-label={`${site.name} — Go to homepage`}
          >
            {site.name}
          </Link>

          {/* Desktop nav */}
          <DesktopNav />

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2 ml-4 shrink-0">
            <Link href="/contact" className="btn btn-ghost btn-sm">
              Contact
            </Link>
            <Link href={site.cta.bookCall} className="btn btn-primary btn-sm">
              Book a Call
            </Link>
          </div>

          {/* Mobile menu */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
