import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, subtitle, align = "left", light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}
    >
      {eyebrow && (
        <span className={`eyebrow block mb-4 ${light ? "text-beige" : "text-olive"}`}>{eyebrow}</span>
      )}
      <h2
        className={`font-display text-4xl sm:text-5xl md:text-[3.2rem] leading-[1.08] ${
          light ? "text-cream" : "text-forest"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base md:text-lg leading-relaxed ${light ? "text-cream/75" : "text-charcoal/70"} ${align === "center" ? "mx-auto" : ""} max-w-xl`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
