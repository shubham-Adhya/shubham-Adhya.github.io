import React, { useEffect, useRef } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skill from "./components/skill/Skill";
import Stats from "./components/stats/Stats";
import Projects from "./components/projects/Projects";
// import Testimonials from './components/testimonials/Testimonials'
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import { motion, useInView, useAnimation } from "framer-motion";

const App = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <div
        ref={ref}
        style={{
          position: "relative",
          width: "fit-content",
          overflow: "hidden",
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <Header />
          <About />
          <Skill />
          <Projects />
          <Stats />
          <Contact />
          <Footer />
        </motion.div>
      </div>
      <Nav />
    </>
  );
};

export default App;
