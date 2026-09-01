import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CropCard({ crop, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.05, ease: "easeOut" }}
      className="group relative rounded-2xl overflow-hidden bg-white/40"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={crop.image}
          alt={`${crop.name} — ${crop.latin}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-forest-deep/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* herbarium specimen tag — signature element */}
        <div className="absolute top-4 left-4 bg-cream/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <span className="eyebrow text-forest text-[0.62rem]">{crop.category}</span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <p className="text-cream/85 text-sm leading-relaxed">{crop.description}</p>
        </div>

        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-cream/90 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-400">
          <ArrowUpRight size={16} className="text-forest" strokeWidth={1.8} />
        </div>
      </div>

      <div className="pt-4 pb-1 px-1">
        <h3 className="font-display text-2xl text-forest">{crop.name}</h3>
        <p className="specimen-tag text-sm text-olive mt-0.5">{crop.latin}</p>
      </div>
    </motion.div>
  );
}
