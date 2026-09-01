import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin } from "lucide-react";
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled || open ? "bg-cream/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(31,61,43,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="container-farm flex items-center justify-between py-4">
        <a href="#home" className="flex flex-col leading-none">
          <span className="font-display text-2xl md:text-[1.65rem] tracking-wide text-forest">
            SANAM SARITA
          </span>
          <span className="eyebrow text-[0.58rem] md:text-[0.62rem] text-olive mt-1">
            Krishi tatha Pashupanchhi Farm
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-charcoal/80 hover:text-forest transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={farmInfo.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 border border-forest/30 text-forest text-sm px-5 py-2.5 rounded-full hover:bg-forest hover:text-cream transition-colors"
        >
          <MapPin size={15} strokeWidth={1.6} />
          Get Directions
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-forest p-2 -mr-2"
        >
          {open ? <X size={26} strokeWidth={1.4} /> : <Menu size={26} strokeWidth={1.4} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-cream border-t border-forest/10"
          >
            <nav className="container-farm flex flex-col py-6 gap-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="font-display text-2xl text-forest py-2.5 border-b border-forest/5"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href={farmInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex justify-center items-center gap-2 bg-forest text-cream text-sm px-5 py-3 rounded-full"
              >
                <MapPin size={15} /> Get Directions
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
