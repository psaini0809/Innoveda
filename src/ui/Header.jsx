import { useEffect, useState } from "react";
import Points from "./Points";
import ResumeButton from "./ResumeButton";
import Social from "./Social";
import { motion } from "framer-motion";

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: showHeader ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/30 "
    >
      <div className="heaeder w-full flex flex-row items-center justify-around rounded-4xl p-4">
        <Social />
        <Points />
        <ResumeButton />
      </div>
    </motion.div>
  );
}

export default Header;
