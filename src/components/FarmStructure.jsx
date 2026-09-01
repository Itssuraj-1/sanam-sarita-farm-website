import { motion } from "framer-motion";
import { farmPhotos } from "../data/farmData";

export default function FarmStructure() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-farm grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow text-olive block mb-4">A Place to Grow</span>
          <h2 className="font-display text-4xl sm:text-5xl text-forest leading-[1.1]">
            Built Into the Hillside.
          </h2>
          <p className="mt-6 text-lg text-charcoal/75 leading-relaxed max-w-md">
            The farm's structures sit along the slope above Nala, built to serve the
            everyday work of the land &mdash; simple, functional, and shaped by the
            terrain around them.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="rounded-3xl overflow-hidden"
        >
          <img
            src={farmPhotos.structureDay}
            alt="The farm building in daylight, tomatoes and vegetables growing in the foreground"
            loading="lazy"
            className="w-full h-[380px] md:h-[440px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
