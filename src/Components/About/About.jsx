import React from "react";
import styles from "./About.module.css";
import { tools } from "../../data/toolsAndTechs";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { RiChatSmile3Line } from "react-icons/ri";

const About = () => {
  return (
    <section id="about" className="container">
      <div className={styles.about}>
        <h2 className="title">
        <RiChatSmile3Line /> About Me
        </h2>

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
        <button>
          <a
            href="/Neha_Kamble_React_Developer.pdf"
            download
            className={styles.resume}
          >
            Grab my resume here <MdOutlineFileDownload />
          </a>
        </button>

        <br />
        <div>
          <h3 className={styles.tools_title}>
            <FaCode /> Tech I Work With
          </h3>
        </div>
        <div className={styles.tool_grid_container}>
          {Object.entries(tools).map(([category, items]) => (
            <motion.div
              key={category}
              className={styles.tool_category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              <h3 className={styles.category_title}>{category}</h3>
              <div className={styles.tool_grid}>
                {items.map((tool) => (
                  <div key={tool.name} className={styles.tool_card}>
                    <a
                      href={tool.doc}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={tool.image}
                        alt={tool.name}
                        className={styles.tool_icon}
                      />
                    </a>
                    <span className={styles.tool_name}>{tool.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
