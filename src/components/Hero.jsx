import { motion } from "framer-motion";
import { ArrowRight, MapPin, ChevronDown } from "lucide-react";
import { farmPhotos, farmInfo } from "../data/farmData";

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] min-h-[600px] max-h-[980px] overflow-hidden">
      <motion.img
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        src={farmPhotos.nalaGumbaView}
        alt="View from Sanam Sarita farm over the terraced valley of Nala, with the gumba visible on the hillside"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "50% 38%" }}
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/15 to-forest-deep/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/40 via-transparent to-transparent" />

      <div className="relative h-full container-farm flex flex-col justify-end pb-24 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        >
          <span className="eyebrow text-beige/90 block mb-5">
            Sanam Sarita Krishi tatha Pashupanchhi Farm
          </span>
          <h1 className="font-display text-[3.2rem] leading-[1.02] sm:text-[4.4rem] md:text-[5.6rem] text-cream max-w-3xl">
            Rooted in <span className="italic">Nature.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-cream/85 max-w-md leading-relaxed">
            Growing a diverse collection of life in the hills of Nala.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#grow"
              className="inline-flex items-center gap-2 bg-cream text-forest-deep px-7 py-3.5 rounded-full text-sm tracking-wide hover:bg-beige transition-colors"
            >
              Explore the Farm
              <ArrowRight size={16} strokeWidth={1.6} />
            </a>
            <a
              href={farmInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cream px-2 py-3.5 text-sm tracking-wide border-b border-cream/40 hover:border-cream transition-colors"
            >
              <MapPin size={15} strokeWidth={1.6} />
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to next section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/70 hover:text-cream"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={26} strokeWidth={1.3} />
        </motion.div>
      </motion.a>
    </section>
  );
}
