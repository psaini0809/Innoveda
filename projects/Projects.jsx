import { useRef, useLayoutEffect, useState } from "react";
import ImageContainer from "./ImageContainer";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function Projects() {
  const targetRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  const projectRefs = useRef([]);

  // calculate total width of all images
  useLayoutEffect(() => {
    if (projectRefs.current.length > 0) {
      let totalWidth = projectRefs.current.reduce(
        (acc, el) => acc + el.offsetWidth + 16, // 16px gap
        0
      );
      // totalWidth+=1000;
      setScrollWidth(totalWidth);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"], // full section scroll
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -(scrollWidth - window.innerWidth)]); // move left

  const smoothX = useSpring(x, { stiffness: 60, damping: 60, mass: 0.5 });

  const projects = [
    { src: "pro3.png", link: "https://quick-show-liart.vercel.app/" },
    { src: "pro2.png", link: "https://expense-mate-rxxz.vercel.app/" },
    { src: "pro6.png", link: "https://leet-code-buddy-trial-web-page-main.vercel.app/" },
    { src: "pro1.png", link: "https://unibites-zeta.vercel.app/" },
    { src: "pro5.png", link: "https://github.com/ritik-sa0201/Steramify2" },
  ];

  return (
    <div
      ref={targetRef}
      className="relative w-full"
      style={{ height: scrollWidth ? scrollWidth * 0.7 : "200vh" }} // section height proportional to scroll width
    >
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-white text-center my-10 sticky top-10 z-20"
      >
        PROJECTS
      </motion.h1>

      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
          className="flex gap-4 px-4"
          style={{ x: smoothX }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 w-[60vw] sm:w-[40vw]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open(project.link, "_blank")}
              ref={(el) => (projectRefs.current[i] = el)}
            >
              <ImageContainer imageSource={project.src} description={`Project ${i + 1}`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
