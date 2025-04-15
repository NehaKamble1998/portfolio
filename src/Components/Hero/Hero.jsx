import React from "react";
import styles from "./Hero.module.css";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Hero = () => {
  return (
    <section className={`${styles.hero} container`}>
      <div className={styles.hero_content}>
        <div className={styles.intro}>
          <h1>Hey there, I'm</h1>
          <ReactTyped
            className={styles.typed_text}
            strings={[
              "Neha Kamble,",
              "a React Developer,",
              "turning ideas into code.",
            ]}
            typeSpeed={100}
            backSpeed={30}
            loop
          />
        </div>
        <div className={styles.description}>
          I'm a front-end enthusiast with 3+ years of experience building sleek,
          user-friendly interfaces in React. Whether it's transforming design
          files into interactive experiences or optimizing for performance, I
          strive to create seamless digital experiences that leave a lasting
          impression.
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
      </div>
    </section>
  );
};

export default Hero;
