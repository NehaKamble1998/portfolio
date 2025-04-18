import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";
const NavBar = () => {
  const [menu, setMenu] = useState("closed");

  return (
    <nav className={`${styles.navbar} container`}>
      <Link to="/" smooth offset={0} duration={500}>
        <img
          src="/logo.png"
          alt="logo"
          style={{ height: "50px", width: "50px" }}
          className={styles.logo}
        />
      </Link>
      <ul
        className={`${menu === "closed" && styles.menu_closed}`}
        onClick={() => setMenu("closed")}
      >
        <li>
          <Link
            to="about"
            smooth
            offset={0}
            duration={500}
            onClick={() => setMenu("closed")}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            smooth
            offset={0}
            duration={500}
            onClick={() => setMenu("closed")}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth
            offset={0}
            duration={500}
            onClick={() => setMenu("closed")}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth
            offset={0}
            duration={500}
            onClick={() => setMenu("closed")}
          >
            <button className="nav_btn">Contact</button>
          </Link>
        </li>
      </ul>
      <div className={styles.menu}>
        {menu === "closed" && (
          <HiMenuAlt2
            className={styles.burger_menu}
            style={{ height: "3em", width: "3em" }}
            onClick={() => setMenu("opened")}
          />
        )}
        {menu === "opened" && (
          <MdClose
            className={styles.closeIcon}
            style={{ height: "3em", width: "3em" }}
            onClick={() => setMenu("closed")}
          />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
