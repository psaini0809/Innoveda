import { FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";

import { motion } from "motion/react";
function Social() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-row  w-max justify-center items-center  text-white text-3xl gap-2 rounded-full"
    >
      <motion.span
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ type: "spring", duration: 0.5, stiffness: 300 }}
        whileTap={{ scale: 0.9 }}
        className="cursor-pointer"
      >
        <a href="https://shorturl.at/wMrq2" //ig
         target="_blank"> 
          {" "}
          <img src="./2.png" className="h-7 w-7" />
        </a>
      </motion.span>
      <motion.span
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ type: "spring", duration: 0.5, stiffness: 300 }}
        whileTap={{ scale: 0.9 }}
        className="cursor-pointer"
      >
        <a
          href="https://shorturl.at/oeMtA"//linkedin
          target="_blank"
        >
          <img src="./3.png" className="h-7 w-7" />
        </a>
      </motion.span>
      {/*
      <motion.span
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ type: "spring", duration: 0.5, stiffness: 300 }}
        whileTap={{ scale: 0.9 }}
        className="cursor-pointer"
      >
        <a href="https://github.com/ritik-sa0201" target="_blank">
          <FaGoogle />
        </a>
      </motion.span>
      */}
    </motion.div>
  );
}

export default Social;
