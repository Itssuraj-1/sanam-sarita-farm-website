import { motion } from "framer-motion";
import { crops, featuredCrops, featuredStories } from "../data/farmData";

export default function FeaturedCrop() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-farm">
        <div className="max-w-xl mb-16 md:mb-20">
          <span className="eyebrow text-olive block mb-4">Featured Stories</span>
          <h2 className="font-display text-4xl sm:text-5xl text-forest leading-[1.1]">
            From the Hills of Nala.
          </h2>
        </div>

        <div className="flex flex-col gap-20 md:gap-28">
          {featuredCrops.map((slug, i) => {
            const crop = crops.find((c) => c.slug === slug);
            const story = featuredStories[slug];
            const imageFirst = i % 2 === 0;
            return (
              <div
                key={slug}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
              >
                <motion.div
                  initial={{ opacity: 0, x: imageFirst ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`rounded-[1.75rem] overflow-hidden ${
                    imageFirst ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <img
                    src={crop.image}
                    alt={`${crop.name} — ${crop.latin}`}
                    loading="lazy"
                    className="w-full h-[340px] md:h-[440px] object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: imageFirst ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                  className={imageFirst ? "lg:order-2" : "lg:order-1"}
                >
                  <span className="specimen-tag text-olive text-base">{crop.latin}</span>
                  <h3 className="font-display text-4xl md:text-5xl text-forest mt-2 mb-6">
                    {story.heading}
                  </h3>
                  <p className="text-lg text-charcoal/75 leading-relaxed max-w-md">
                    {story.text}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
