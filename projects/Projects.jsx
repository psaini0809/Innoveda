import { useRef, useLayoutEffect, useState } from "react";
import ImageContainer from "./ImageContainer";
import { motion, useScroll, useSpring, useTransform, useAnimation } from "framer-motion";

function Projects() {
  const targetRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  const projectRefs = useRef([]);
  const controls = useAnimation();

  // calculate total width of all images
  useLayoutEffect(() => {
    if (projectRefs.current.length > 0) {
      let totalWidth = projectRefs.current.reduce(
        (acc, el) => acc + el.offsetWidth + 16, // 16px gap
        0
      );
      setScrollWidth(totalWidth);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"], // full section scroll
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -(scrollWidth - window.innerWidth)]);
  const smoothX = useSpring(x, { stiffness: 60, damping: 60, mass: 0.5 });

  const projects = [
    { src: "pro3.png", link: "https://quick-show-liart.vercel.app/" },
    { src: "pro2.png", link: "https://expense-mate-rxxz.vercel.app/" },
    { src: "pro6.png", link: "https://leet-code-buddy-trial-web-page-main.vercel.app/" },
    { src: "pro1.png", link: "https://unibites-zeta.vercel.app/" },
    { src: "pro5.png", link: "https://github.com/ritik-sa0201/Steramify2" },
  ];

  // auto scroll on hover (desktop)
  const handleMouseEnter = () => {
    if (scrollWidth > window.innerWidth) {
      controls.start({
        x: -(scrollWidth - window.innerWidth),
        transition: { duration: 8, ease: "linear", repeat: Infinity, repeatType: "loop" },
      });
    }
  };

  const handleMouseLeave = () => {
    controls.stop(); // stop auto scroll
  };

  return (
    <div
      ref={targetRef}
      className="relative w-full"
      style={{ height: scrollWidth ? scrollWidth * 0.7 : "200vh" }}
    >
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-white text-center my-10 sticky top-10 z-20"
      >
        PROJECTS
      </motion.h1>

      <div
        className="sticky top-0 h-screen flex items-center overflow-hidden md:overflow-hidden sm:overflow-x-auto touch-pan-x"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="flex gap-6 px-4"
          style={{ x: smoothX }}
          animate={controls}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 w-[80vw] sm:w-[60vw]" // increased widths
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open(project.link, "_blank")}
              ref={(el) => (projectRefs.current[i] = el)}
            >
              <ImageContainer
                imageSource={project.src}
                description={`Project ${i + 1}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
