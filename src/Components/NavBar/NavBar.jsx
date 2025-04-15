import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
const NavBar = () => {
  const [menu, setMenu] = useState("closed");
  return (
    <nav className={`${styles.navbar} container`}>
      <a href="/" className={styles.title}>
        Portfolio
      </a>
      <ul
        className={`${styles.menuItems} ${
          menu === "opened" && styles.menu_opened
        }`}
        onClick={() => setMenu("closed")}
      >
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <button className="nav_btn">Hire Me!</button>
        </li>
      </ul>
      {/* <div className={styles.menu}>
        {menu === "closed" && (
          <HiMenuAlt2
            className={styles.burger_menu}
            style={{ height: "3em", width: "3em" }}
            onClick={() => setMenu("opened")}
          />
        )}
        {menu === "opened" && (
          <MdClose
            className={styles.burger_menu}
            style={{ height: "3em", width: "3em" }}
            onClick={() => setMenu("closed")}
          />
        )}

        <ul
          className={`${styles.menuItems} ${
            menu === "opened" && styles.menu_opened
          }`}
          onClick={() => setMenu("closed")}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div> */}
    </nav>
  );
};

export default NavBar;
