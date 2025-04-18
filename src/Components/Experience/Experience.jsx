import React from "react";
import styles from "./Experience.module.css";
import { IoBriefcaseOutline } from "react-icons/io5";

const Experience = () => {
  return (
    <section className={`container ${styles.experience}`} id="experience">
      <h1 className="title">
        <IoBriefcaseOutline />
        Experience
      </h1>
      <h2 className={styles.subtitle}>Front-End Developer</h2>
      <h3>
        Infosys <span>2022 - Present</span>
      </h3>
      <p className={styles.work}>
        Worked on developing modern, responsive, and high-performance web
        applications using React. Translated complex UI/UX designs into
        reusable, scalable components to ensure consistency and enhance user
        experience.
        <br /> Integrated RESTful APIs to optimize data rendering, resulting in
        faster load times and reduced server requests. Implemented state
        management solutions using React hooks and the Context API to maintain
        interface consistency and improve application performance.
        <br /> Ensured cross-browser compatibility and adhered to accessibility
        standards, delivering inclusive and reliable user experiences. Optimized
        CSS and JavaScript for better performance and maintainability.
        Collaborated with multidisciplinary teams including designers, backend
        developers, and product managers to deliver clean, efficient, and
        user-focused solutions.
      </p>
    </section>
  );
};

export default Experience;
