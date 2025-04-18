import React, { useRef, useState } from "react";
import styles from "./Hero.module.css";
import { messages } from "../../data/message";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
const Hero = () => {
  const [message, setMessage] = useState(
    "Click the crystal ball to get a coding advice..."
  );
  const timeoutRef = useRef(null);

  const getRandomMessage = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const randomIndex = Math.floor(Math.random() * messages.length);
    const newMessage = messages[randomIndex];
    setMessage(newMessage);

    // Set a new timeout and store its ID in the ref
    timeoutRef.current = setTimeout(() => {
      setMessage("Click the crystal ball to get a coding advice...");
    }, 5000);
  };

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
      </div>
      <div className={styles.crystalContainer}>
        <div className={styles.ball} onClick={getRandomMessage}>
          <img src="/crystal_ball.png" alt="crystal-ball" />
        </div>
        <AnimatePresence mode="wait">
          <motion.p
            key={message} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.message}
          >
            {message}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
