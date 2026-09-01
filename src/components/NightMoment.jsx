import { motion } from "framer-motion";
import { farmPhotos } from "../data/farmData";

export default function NightMoment() {
  return (
    <section className="py-24 md:py-28 bg-forest-deep">
      <div className="container-farm">
        <div className="text-center max-w-lg mx-auto mb-12">
          <span className="eyebrow text-beige/80 block mb-4">When the Day Slows Down</span>
          <h2 className="font-display italic text-3xl sm:text-4xl text-cream/90 leading-snug">
            The farm at dusk.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden ring-1 ring-cream/10 shadow-2xl"
        >
          <img
            src={farmPhotos.structureNight}
            alt="The farm building at dusk, lights glowing against a stormy sky"
            loading="lazy"
            className="w-full h-[320px] md:h-[520px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
