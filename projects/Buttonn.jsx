import { useState } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Buttonn() {
  const [start, setStart] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setStart(true)}
      onMouseLeave={() => setStart(false)}
    >
      {/* Button */}
      <motion.button whileTap={{ scale: 0.8 }} className="cursor-pointer p-2">
        <FaGithubSquare size={30} color="white" />
      </motion.button>

      <AnimatePresence>
        {start && (
          <motion.div
            initial={{ opacity: 0, scale: 0.2, y: 0, x: 0 }}
            animate={{
              opacity: 0.8,
              scale: 0.7,
              y: -40,
              x: 30,
              rotate: 360,
            }}
            exit={{ opacity: 0, scale: 0.7, y: 0, x: 0, rotate: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 250 }}
            className="absolute left-1/2 -translate-x-1/2 -top-2"
          >
            <FaGithubSquare size={40} color="white" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Buttonn;
