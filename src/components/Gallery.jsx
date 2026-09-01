import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Lightbox from "./Lightbox";
import { galleryCategories, galleryImages } from "../data/farmData";

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  const filtered = useMemo(
    () =>
      active === "All" ? galleryImages : galleryImages.filter((g) => g.category === active),
    [active]
  );

  return (
    <section id="gallery" className="py-24 md:py-32 bg-cream-soft/60">
      <div className="container-farm">
        <SectionHeading
          eyebrow="From Our Farm"
          title="A Photographic Record."
          subtitle="Authentic photographs from the farm itself — its structures, land and animals, exactly as they are."
        />

        <div className="mt-10 flex flex-wrap gap-3">
          {galleryCategories.map((cat) => (
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

        <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {filtered.map((img, i) => (
            <motion.button
              key={img.src + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
              onClick={() => setOpenIndex(galleryImages.indexOf(img))}
              className="mb-5 w-full break-inside-avoid block rounded-2xl overflow-hidden group relative focus-visible:outline focus-visible:outline-2 focus-visible:outline-forest"
              aria-label={`View larger: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-forest-deep/0 group-hover:bg-forest-deep/15 transition-colors duration-400" />
            </motion.button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </section>
  );
}
