import { motion } from "framer-motion";
import Buttonn from "./Buttonn";
import Btn2 from "./Btn2";

const ImageContainer = ({ imageSource, description }) => {
  return (
    <motion.div className="relative cursor-pointer overflow-hidden w-full max-w-[1200px] mx-auto">
      {/* Image */}
      <motion.img
        className="w-full h-[300px] sm:h-[500px] object-cover opacity-80"
        whileHover={{ opacity: 1 }}
        whileTap={{ opacity: 1 }} // mobile tap support
        src={imageSource}
        alt={description}
      />

      {/* Buttons inside image */}
    
    </motion.div>
  );
};

export default ImageContainer;
