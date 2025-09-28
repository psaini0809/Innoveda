import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

function ResumeButton() {
  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      className="relative inline-flex overflow-hidden rounded-3xl group"
      onClick={() =>
        window.open(
          "link"
        )
      } // Replace with your resume URL
    >
      {/* Animated Background */}
      <motion.div
        variants={{
          initial: { width: 0 },
          hover: { width: "100%" },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute h-full bg-white left-0 top-0 z-0"
      />

      {/* Button */}
      <motion.button
        initial={{ opacity: 0, x: 100}}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileTap={{ scale: 0 }}
        className="relative z-10 text-white fonst-regular group-hover:text-black border-2 border-white flex items-center p-1 px-3 gap-2 rounded-3xl cursor-pointer"
      >
        Card <FaDownload />
      </motion.button>
    </motion.div>
  );
}

export default ResumeButton;
