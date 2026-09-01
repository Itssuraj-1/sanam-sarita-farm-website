import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import CropCard from "./CropCard";
import { categories, crops } from "../data/farmData";

export default function WhatWeGrow() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? crops : crops.filter((c) => c.category === active)),
    [active]
  );

  return (
    <section id="grow" className="py-24 md:py-32 bg-cream-soft/60">
      <div className="container-farm">
        <SectionHeading
          eyebrow="What We Grow"
          title="A diverse collection cultivated across the farm."
          subtitle="From nuts and citrus to spices and a specialty plant of the Kavre hills — every crop here has its own place on the terraces."
        />

        <div className="mt-12 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm tracking-wide transition-colors border ${
                active === cat
                  ? "bg-forest text-cream border-forest"
                  : "border-forest/25 text-forest/80 hover:border-forest/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((crop, i) => (
              <CropCard key={crop.slug} crop={crop} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
