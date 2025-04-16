import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";
const NavBar = () => {
  const [menu, setMenu] = useState("closed");
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`${styles.navbar} ${sticky ? styles.sticky_nav : ""}`}>
      <Link to="/" smooth offset={0} duration={500}>
        <img
          src="/logo.png"
          alt="logo"
          style={{ height: "100px" }}
          className={styles.logo}
        />
      </Link>
      <ul
        className={`${menu === "closed" && styles.menu_closed}`}
        onClick={() => setMenu("closed")}>
        <li>
          <Link to="about" smooth offset={0} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="experience" smooth offset={0} duration={500}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="projects" smooth offset={0} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth offset={0} duration={500}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="contact" smooth offset={0} duration={500}>
            <button className="nav_btn">Hire Me!</button>
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
