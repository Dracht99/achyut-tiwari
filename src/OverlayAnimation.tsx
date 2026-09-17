import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function OverlayAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#071b2b]"
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: "-100%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.img
            src={`${import.meta.env.BASE_URL}pic_lab.JPG`}
            alt="Achyut Tiwari in the laboratory"
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-[#071b2b]/55" />
          <motion.h1
            className="relative z-10 bg-gradient-to-r from-cyan-200 via-white to-sky-400 bg-clip-text px-6 text-center text-5xl font-black tracking-tight text-transparent sm:text-7xl"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
          >
            Achyut Tiwari
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
