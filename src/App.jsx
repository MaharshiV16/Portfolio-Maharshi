import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function FadeInWhenVisible({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 1.25 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [isAnimating1, setIsanimating1] = useState(false);
  const [isAnimating2, setIsanimating2] = useState(false);
  function Edu() {
    setHead(() => {
      return <Education />;
    });
  }
  function Exp() {
    setHead(() => {
      return <Experience />;
    });
  }
  const [head, setHead] = useState(() => {
    return <Education />;
  });

  return (
    <div>
      <Navbar />
      <Intro />
      <FadeInWhenVisible>
        <About />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <div className="ee-bg" id="education">
          <div className="text-center">
            <motion.button
              className="ee btn btn-dark"
              animate={{
                scale: isAnimating1 ? [0.8, 1.4, 1.4, 1, 1] : 1,
                borderRadius: isAnimating1 ? [20, 20, 100, 50, 10] : 10,
                rotate: isAnimating1 ? [0, 0, 360, 360, 0] : 0,
              }}
              transition={{
                duration: 2,
              }}
              onClick={function () {
                Edu();
                setIsanimating1(true);
                setIsanimating2(false);
              }}
            >
              <h3 className="btn-head">Education</h3>
            </motion.button>
            <motion.button
              className="ee btn btn-dark"
              animate={{
                scale: isAnimating2 ? [0.8, 1.4, 1.4, 1, 1] : 1,
                borderRadius: isAnimating2 ? [20, 20, 100, 50, 10] : 10,
                rotate: isAnimating2 ? [0, 0, 360, 360, 0] : 0,
              }}
              transition={{
                duration: 2,
              }}
              onClick={function () {
                Exp();
                setIsanimating2(true);
                setIsanimating1(false);
              }}
            >
              <h3 className="btn-head">Experience</h3>
            </motion.button>
          </div>
          {head}
        </div>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Skills />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Project />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Contact />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Footer />
      </FadeInWhenVisible>
    </div>
  );
}
export default App;
