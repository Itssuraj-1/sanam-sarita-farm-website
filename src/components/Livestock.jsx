import { motion } from "framer-motion";
import { farmPhotos } from "../data/farmData";

export default function Livestock() {
  return (
    <section className="py-20 md:py-28 bg-cream-soft/60">
      <div className="container-farm">
        <div className="max-w-xl mb-10">
          <span className="eyebrow text-olive block mb-4">Life Beyond the Fields</span>
          <h2 className="font-display text-3xl sm:text-4xl text-forest leading-[1.15]">
            A Dedicated Cattle Area.
          </h2>
          <p className="mt-5 text-base md:text-lg text-charcoal/70 leading-relaxed">
            Alongside its diverse plants and crops, the farm is also home to a
            dedicated cattle area &mdash; a smaller, supporting part of the wider
            agricultural ecosystem here in Nala.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden max-w-3xl"
        >
          <img
            src={farmPhotos.cattleSpace}
            alt="Interior of the farm's cattle shed"
            loading="lazy"
            className="w-full h-[300px] md:h-[380px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
