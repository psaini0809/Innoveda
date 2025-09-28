import { motion } from "motion/react";
import Card from "./Card";

function Certificates() {
  return (
    <div className="h-[100vh] w-full bg-white">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        className="text-7xl font-bold text-black text-center mt-5"
      >
        Certificates and Acheivements
      </motion.h1>
      <div.container>
        <Card />
      </div.container>
    </div>
  );
}

export default Certificates;
