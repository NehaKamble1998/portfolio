import React from "react";
import styles from "./App.module.css";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";

const App = () => {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <About/>
      <Experience/>
      <Projects/>
    </div>
  );
};

export default App;
