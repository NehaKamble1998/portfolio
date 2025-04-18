import React from "react";
import styles from "./Contact.module.css";
import Map from "./Map";
import { IoMdContact } from "react-icons/io";
const Contact = () => {
  return (
    <section className={`${styles.contact} container`} id="contact">
      <h1 className="title">
        <IoMdContact />
        Contact Me
      </h1>
      <div className={styles.contact_grid}>
        <form className={styles.contact_form}>
          <div className={styles.form_input}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
          </div>
          <div className={styles.form_input}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.form_input}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <Map />
      </div>
    </section>
  );
};

export default Contact;
