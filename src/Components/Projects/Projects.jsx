import React from "react";
import styles from "./Projects.module.css";
import { FaLaptop } from "react-icons/fa";
const Projects = () => {
  return (
    <section className={`${styles.projects} container`} id="projects">
      <h1 className="title">
        <FaLaptop />
        Projects
      </h1>
    </section>
  );
};

export default Projects;
