import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Points() {
  const navItems = ["About", "Projects", "Skills", "Contact"];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative backdrop-blur-lg bg-white/10 border border-white/30 shadow-lg px-6 py-3 rounded-full flex gap-6 items-center justify-center drop-shadow-lg"
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {navItems.map((item, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center"
          onMouseEnter={() => setHoveredIndex(index)}
        >
          <motion.a
            href={`#${item}`}
            whileHover={{ scale: 1.1, color: "#facc15" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
            className="text-white text-base font-medium transition-all duration-300"
          >
            {item}
          </motion.a>

          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.div
                layoutId="underline"
                className="absolute -bottom-1 h-[2px] w-8 bg-yellow-400 rounded-full"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </AnimatePresence>
        </div>
      ))}
    </motion.div>
  );
}

export default Points;
