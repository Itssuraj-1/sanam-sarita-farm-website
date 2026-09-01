import { motion } from "framer-motion";
import { farmPhotos } from "../data/farmData";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-farm grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-2 lg:order-1"
        >
          <div className="rounded-3xl overflow-hidden max-w-md mx-auto lg:mx-0">
            <img
              src={farmPhotos.farmField}
              alt="Farm outbuildings surrounded by cornfields on the hillside"
              className="w-full h-[380px] md:h-[440px] object-cover"
              loading="lazy"
            />
          </div>
          <div className="hidden md:block absolute -z-10 -bottom-8 -right-8 w-40 h-40 rounded-full bg-beige/40" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="order-1 lg:order-2"
        >
          <span className="eyebrow text-olive block mb-4">A Farm Rooted in Diversity</span>
          <h2 className="font-display text-4xl sm:text-5xl text-forest leading-[1.1]">
            A Farm Full of Life.
          </h2>
          <p className="mt-6 text-lg text-charcoal/75 leading-relaxed max-w-lg">
            Located in Nala, Banepa, Sanam Sarita Krishi tatha Pashupanchhi Farm brings
            together a diverse range of fruits, nuts, spices, coffee, flowers and
            specialty plants &mdash; cultivated across a terraced hillside in the heart of
            Kavrepalanchok.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
