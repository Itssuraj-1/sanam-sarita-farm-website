import { motion } from "framer-motion";
import { farmPhotos } from "../data/farmData";

export default function GoatHistory() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-farm">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="flex gap-3 w-full md:w-64 shrink-0"
          >
            <img
              src={farmPhotos.goats}
              alt="Goats that were once raised on the farm"
              loading="lazy"
              className="w-2/3 h-56 object-cover rounded-2xl"
            />
            <img
              src={farmPhotos.goatSpace}
              alt="Interior of the space once used for goats on the farm"
              loading="lazy"
              className="w-1/3 h-56 object-cover rounded-2xl"
            />
          </motion.div>
          <div>
            <span className="eyebrow text-olive block mb-3">A Part of Our Farm's Story</span>
            <p className="text-base md:text-lg text-charcoal/70 leading-relaxed">
              At different times, the farm has also been home to goats, adding another
              dimension to its agricultural journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
