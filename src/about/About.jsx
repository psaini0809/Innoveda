 import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Me from "./Me";
import Spline from "./Spline";

function About() {
  const words = ["Interfaces","Algorithm", "Design", "Code"];
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#ffd15d"];
  const [curr, setCurr] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurr((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-20">
      <div className="about flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center mt-10 mb-5 text-white">
          Turning Ideas into {" "}
          <span className=" relative w-[120px] h-[40px] align-middle">
            <AnimatePresence mode="wait">
              <motion.span
                key={curr}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1, color: colors[curr] }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className=" w-full text-center"
              >
                {words[curr]}
              </motion.span>
            </AnimatePresence>
          </span>{" "}
        </h1>
        <p className=" text-lg text-center  text-gray-300 mb-10 w-8/12">
          We at Innoveda Solutions turn your ideas into digital magic! From sleek websites and mobile apps to smart CRM and marketing, we create solutions that don’t just work—they wow.
        </p>
      </div>

      <div className="w-full flex flex-row items-start justify-center">
        <Me />
        <Spline />
      </div>
    </div>
  );
}

export default About;
