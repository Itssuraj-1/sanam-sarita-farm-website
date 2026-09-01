import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import { farmInfo, farmPhotos } from "../data/farmData";

export default function Location() {
  return (
    <section id="location" className="py-24 md:py-32">
      <div className="container-farm">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2rem] bg-forest overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #F6F1E6 1.5px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative grid md:grid-cols-2 gap-10 items-center px-8 py-16 md:px-16 md:py-20">
            <div>
              <span className="eyebrow text-beige block mb-4">Find Us in Nala</span>
              <h2 className="font-display text-4xl sm:text-5xl text-cream leading-[1.1] mb-6">
                {farmInfo.fullName}
              </h2>
              <p className="flex items-center gap-2 text-cream/75 text-base mb-8">
                <MapPin size={17} strokeWidth={1.6} />
                {farmInfo.location}
              </p>
              <a
                href={farmInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cream text-forest px-7 py-3.5 rounded-full text-sm tracking-wide hover:bg-beige transition-colors"
              >
                Open in Google Maps
                <ArrowUpRight size={16} strokeWidth={1.8} />
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden ring-1 ring-cream/15">
              <img
                src={farmPhotos.nalaGumbaView}
                alt="View from the farm over the terraced valley of Nala, with the gumba visible on the hillside"
                loading="lazy"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
