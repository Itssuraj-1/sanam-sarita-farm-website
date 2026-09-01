import { MapPin } from "lucide-react";
import { farmInfo } from "../data/farmData";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "What We Grow", href: "#grow" },
  { label: "Farm Life", href: "#farm-life" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-cream">
      <div className="container-farm py-16 grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-2xl mb-1">SANAM SARITA</p>
          <p className="eyebrow text-beige/80 mb-4">Krishi tatha Pashupanchhi Farm</p>
          <p className="text-cream/60 text-sm leading-relaxed">
            {farmInfo.location}
          </p>
        </div>

        <nav className="flex flex-col gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-cream/65 hover:text-cream text-sm transition-colors w-fit"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div>
          <a
            href={farmInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-cream/25 text-cream text-sm px-5 py-2.5 rounded-full hover:bg-cream hover:text-forest-deep transition-colors"
          >
            <MapPin size={15} strokeWidth={1.6} />
            Google Maps
          </a>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-farm py-6 text-center text-cream/45 text-xs tracking-wide">
          © 2026 Sanam Sarita Krishi tatha Pashupanchhi Farm. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
