import React from "react";
import styles from "./App.module.css";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";

const App = () => {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <About/>
    </div>
  );
};

export default App;
