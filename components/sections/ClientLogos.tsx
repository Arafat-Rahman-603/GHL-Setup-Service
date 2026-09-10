"use client";

const placeholderLogos = [
  { id: 1, name: "Partner Logo" },
  { id: 2, name: "Partner Logo" },
  { id: 3, name: "Partner Logo" },
  { id: 4, name: "Partner Logo" },
  { id: 5, name: "Partner Logo" },
  { id: 6, name: "Partner Logo" },
];

export function ClientLogos() {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-gray-100 overflow-hidden" aria-labelledby="clients-partners-heading">
      <div className="container-page text-center mb-8">
        <h2 id="clients-partners-heading" className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
          Our Clients & Partners
        </h2>
        <p className="text-sm text-gray-500">
          Trusted by businesses and partners.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full max-w-[1400px] mx-auto overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        
        {/* We duplicate the inner content to create a seamless loop */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...placeholderLogos, ...placeholderLogos, ...placeholderLogos].map((logo, idx) => (
            <div 
              key={`${logo.id}-${idx}`}
              className="flex items-center justify-center px-8 md:px-12 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-default"
            >
              {/* Using a generic structural block as a placeholder for a logo */}
              <div className="flex items-center gap-2 text-ink-900">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
                <span className="font-bold tracking-tight text-lg whitespace-nowrap">{logo.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 
        Inline styles for marquee animation 
        (Can be moved to tailwind config if preferred, but kept here for portability)
      */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333333%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 20s;
          }
        }
      `}} />
    </section>
  );
}
