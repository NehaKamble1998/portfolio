import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import { IoChevronUpCircleOutline } from "react-icons/io5";
import "leaflet/dist/leaflet.css";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer/>
      {isVisible && (
        <div onClick={scrollToTop} className={styles.scroll_top}>
          <IoChevronUpCircleOutline
            style={{
              height: "24px",
              width: "24px",
              color: "var(--primary-color)",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default App;
