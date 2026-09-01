import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ images, index, onClose, onNavigate }) {
  const goPrev = useCallback(
    () => onNavigate((index - 1 + images.length) % images.length),
    [index, images.length, onNavigate]
  );
  const goNext = useCallback(
    () => onNavigate((index + 1) % images.length),
    [index, images.length, onNavigate]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goPrev, goNext]);

  if (index === null) return null;
  const image = images[index];

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Image viewer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] bg-forest-deep/95 flex items-center justify-center p-4 md:p-10"
        onClick={onClose}
      >
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute top-5 right-5 text-cream/80 hover:text-cream p-2"
        >
          <X size={28} strokeWidth={1.4} />
        </button>

        <button
          aria-label="Previous image"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          className="absolute left-3 md:left-8 text-cream/70 hover:text-cream p-2"
        >
          <ChevronLeft size={34} strokeWidth={1.2} />
        </button>

        <motion.figure
          key={image.src}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          onClick={(e) => e.stopPropagation()}
          className="max-w-4xl w-full"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full max-h-[75vh] object-contain rounded-lg mx-auto"
          />
          <figcaption className="text-cream/70 text-center text-sm mt-4 tracking-wide">
            {image.alt}
          </figcaption>
        </motion.figure>

        <button
          aria-label="Next image"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          className="absolute right-3 md:right-8 text-cream/70 hover:text-cream p-2"
        >
          <ChevronRight size={34} strokeWidth={1.2} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
