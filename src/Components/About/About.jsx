import React from "react";
import styles from "./About.module.css";
const About = () => {
  return (
    <section id="about" className="container">
      <div className={styles.about}>
        <h2 className={styles.title}>About Me</h2>

        <p className={styles.description}>
          Hi, Im Neha! I'm a front-end developer who loves crafting smooth,
          responsive web apps with React. With 3+ years of experience, I've
          built everything from reusable UI components to fully dynamic
          interfaces—always with performance and user experience in mind.
          <br />
          <br /> I've worked in Infosys collaborating with designers and devs to
          bring ideas to life. React, Redux Toolkit, Tailwind, AEM—you name it,
          I've probably tinkered with it.
          <br />
          <br /> Outside of coding, I enjoy keeping up with design trends,
          geeking out over clean UI, and finding new ways to make the web just a
          little more awesome.
        </p>
        <div>
          <h3 className={styles.tools_title}>My Tech Stack</h3>
        </div>
        <div className={styles.tools}></div>
      </div>
    </section>
  );
};

export default About;
