import React from "react";
import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <footer className={`${styles.footer} container`}>
      <p className={styles.tagline}>Where logic meets creativity.</p>
      <div className={styles.footer_links}>
        <Link to="about" smooth offset={0} duration={500}>
          About
        </Link>
        <Link to="experience" smooth offset={0} duration={500}>
          Experience
        </Link>
        <Link to="projects" smooth offset={0} duration={500}>
          Projects
        </Link>
      </div>
      <div className={styles.socials}>
        <a
          href="https://github.com/NehaKamble1998"
          target="_blank"
          className={styles.iconLink}
        >
          <FaGithub
            style={{
              height: "2em",
              width: "2em",
              borderRadius: "4px",
              padding: "5px",
              color: "white",
            }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/neha-kamble-5594aa2aa/"
          target="_blank"
          className={styles.iconLink}
        >
          <FaLinkedin
            style={{
              height: "2em",
              width: "2em",
              borderRadius: "4px",
              padding: "5px",
              color: "white",
            }}
          />
        </a>
      </div>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Neha Kamble. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
