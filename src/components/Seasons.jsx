import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { seasons, farmPhotos } from "../data/farmData";

const seasonImages = {
  Spring: { src: farmPhotos.treeInFarm, alt: "A mature tree on the farm in fresh green growth" },
  Summer: { src: farmPhotos.viewFromFarm, alt: "Bright blue sky over the greenest stretch of the valley" },
  Monsoon: { src: farmPhotos.boundary1, alt: "Heavy storm clouds gathering over the farm's boundary" },
  Autumn: { src: farmPhotos.nalaGumbaView, alt: "Golden light over the terraced valley of Nala" },
  Winter: { src: farmPhotos.structureUltraWide, alt: "Bare hillside and quiet structures on the farm" },
};

export default function Seasons() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-farm">
        <SectionHeading
          eyebrow="Through the Seasons"
          title="A Year on the Land."
          align="center"
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5">
          {seasons.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="rounded-2xl overflow-hidden mb-5 aspect-[4/5]">
                <img
                  src={seasonImages[s.name].src}
                  alt={seasonImages[s.name].alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-2xl text-forest mb-2">{s.name}</h3>
              <p className="text-sm text-charcoal/65 leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
