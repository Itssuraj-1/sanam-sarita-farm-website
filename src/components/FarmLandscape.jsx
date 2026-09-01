import { motion } from "framer-motion";
import { farmPhotos } from "../data/farmData";

export default function FarmLandscape() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="container-farm">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mb-14"
        >
          <span className="eyebrow text-olive block mb-4">From the Hills of Nala</span>
          <h2 className="font-display text-4xl sm:text-5xl text-forest leading-[1.1]">
            Set Among the Terraces.
          </h2>
          <p className="mt-5 text-lg text-charcoal/70 leading-relaxed">
            The farm sits on a hillside above Nala, looking out over a valley of terraced
            fields, greenhouses and the village itself, with the local gumba visible on
            the hill beyond.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="relative w-full h-[62vh] min-h-[380px] max-h-[620px]"
      >
        <img
          src={farmPhotos.viewFromFarm}
          alt="Panoramic view over Nala from the farm, greenhouses and terraced fields below"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/25 via-transparent to-transparent" />
      </motion.div>
    </section>
  );
}
