import React from "react";
import styles from "./Projects.module.css";
import { FaExternalLinkAlt, FaLaptop } from "react-icons/fa";
import { projects } from "../../data/projects";
const Projects = () => {
  return (
    <section className={`${styles.projects} container`} id="projects">
      <h1 className="title">
        <FaLaptop />
        Projects
      </h1>
      <div className={styles.projects_grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.project}>
            <div className={styles.project_img_wrapper}>
              <img
                src={project.img}
                alt={project.name}
                className={styles.project_img}
              />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.project_overlay}
              >
                <FaExternalLinkAlt className={styles.overlay_icon} />
              </a>
            </div>

            <h2 className={styles.project_name}>{project.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
