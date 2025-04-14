import React from "react";
import styles from "./App.module.css";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";

const App = () => {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
    </div>
  );
};

export default App;
