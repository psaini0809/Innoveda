import { motion } from "framer-motion";
import Buttonn from "./Buttonn";
import Btn2 from "./Btn2";
import { useState } from "react";

const ImageContainer = ({ imageSource, description }) => {
  return (
    <motion.div className="image-container cursor-pointer ">
      <motion.img
        className="image h-[500px] w-full object-cover opacity-80"
        whileHover={{ opacity: 100 }}
        src={imageSource}
        alt={description}
      />

      <div className="fixed bottom-0 flex flex-row items-center justify-center ">
        <Buttonn />
        <Btn2 />
      </div>
    </motion.div>
  );
};

export default ImageContainer;
