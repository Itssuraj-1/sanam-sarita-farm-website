import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { farmPhotos } from "../data/farmData";

export default function FarmLife() {
  return (
    <section id="farm-life" className="py-24 md:py-32 bg-forest text-cream relative overflow-hidden">
      <div className="container-farm relative">
        <SectionHeading
          eyebrow="Life at Sanam Sarita"
          title="A Working Hillside."
          subtitle="Terraces, paths and open land shape the everyday rhythm of the farm, framed by the hills that surround Nala."
          light
        />

        <div className="mt-16 grid md:grid-cols-6 gap-4 md:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-4 rounded-2xl overflow-hidden h-[300px] md:h-[440px]"
          >
            <img
              src={farmPhotos.structure2}
              alt="Farm structure viewed from the hillside above, overlooking Nala village"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-2 rounded-2xl overflow-hidden h-[300px] md:h-[440px]"
          >
            <img
              src={farmPhotos.treeInFarm}
              alt="A mature tree on the farm overlooking the village of Nala"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:col-span-3 rounded-2xl overflow-hidden h-[280px]"
          >
            <img
              src={farmPhotos.boundary1}
              alt="The farm's boundary fence beneath a stormy sky"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-3 rounded-2xl overflow-hidden h-[280px] flex items-center justify-center bg-forest-deep/60 px-8 text-center"
          >
            <p className="font-display italic text-2xl md:text-3xl text-cream/85 leading-snug max-w-md">
              &ldquo;A hillside of terraces, fences and quiet, working land.&rdquo;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
