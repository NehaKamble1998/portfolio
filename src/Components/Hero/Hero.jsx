import React from "react";
import styles from "./Hero.module.css";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Hero = () => {
  return (
    <section className={styles.container}>
      <span className={styles.title}>
        <h1>
          <span>{`Hi I am, `}</span>
          <ReactTyped
            className={styles.typed_text}
            strings={["Neha Kamble,", "a React Developer."]}
            typeSpeed={100}
            backSpeed={30}
            loop
          />
        </h1>
      </span>
      <div className={styles.description}>
        Front-end developer with over 3 years of experience crafting fast,
        responsive UIs in React. I turn designs into clean, high-quality code
        that just works.
      </div>
      <div className={styles.socials}>
        <a href="https://github.com/NehaKamble1998" target="_blank">
          <FaGithub
            style={{
              height: "2em",
              width: "2em",
              border: "0.5px solid #a5c8ff4D",
              borderRadius: "4px",
              padding: "5px",
              color: "white",
            }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/neha-kamble-5594aa2aa/"
          target="_blank"
        >
          <FaLinkedin
            style={{
              height: "2em",
              width: "2em",
              border: "0.5px solid #a5c8ff4D",
              borderRadius: "4px",
              padding: "5px",
              color: "white",
            }}
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
