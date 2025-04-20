import React, { useRef, useState } from "react";
import styles from "./Contact.module.css";
import Map from "./Map";
import { IoMdContact } from "react-icons/io";
import { useForm } from "react-hook-form";
import { fireStore } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from "react-hot-toast";
const Contact = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const [loading, setLoading] = useState(false);
  const [success, setSuccsess] = useState(false);
  const [error, setError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const { register, handleSubmit, formState, reset } = useForm();
  const captchaRef = useRef();

  const { errors } = formState;
  const onSubmitForm = async (data) => {
    setFormSubmitted(true);
    if (!captchaVerified) return;
    setLoading(true);

    const now = new Date();
    data.date = now.toISOString().split("T")[0];
    data.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const firestorePromise = addDoc(collection(fireStore, "contact-me"), data);
    const emailPromise = emailjs.send(serviceId, templateId, data, publicKey);

    try {
      const results = await Promise.allSettled([
        firestorePromise,
        emailPromise,
      ]);

      const firestoreResult = results[0];
      const emailResult = results[1];

      let hasError = false;

      if (firestoreResult.status === "rejected") {
        console.error("Firestore Error:", firestoreResult.reason);
        hasError = true;
      }

      if (emailResult.status === "rejected") {
        console.error("EmailJS Error:", emailResult.reason);
        hasError = true;
      }

      if (!hasError) {
        setSuccsess(true);
        reset();
        captchaRef.current.reset();
        toast.success(
          "Your message has been sent successfully. I'll get back to you as soon as possible. Have a great day! 😊",
          {
            duration: 5000,
            position: "top-center",
          }
        );
      } else {
        setError(true);
        toast.error("🙁 Something went wrong. Please try again.", {
          duration: 5000,
          position: "top-center",
        });
      }
    } catch (err) {
      console.error("Unexpected Error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  function onChange(value) {
    if (value !== null) {
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  }

  const onError = () => {
    setFormSubmitted(true);
  };

  return (
    <section className={`${styles.contact} container`} id="contact">
      <h1 className="title">
        <IoMdContact />
        Contact Me
      </h1>
      <div className={`${styles.thankyou_msg} ${success ? "show" : ""}`}>
        <button
          type="button"
          className="close"
          onClick={() => setSuccsess(false)}
        >
          <img src="close.png" alt="close icon" />
        </button>
        <h2>🎉 Thank You!</h2>
        <p>
          Your message has been sent successfully. I’ll get back to you as soon
          as possible. Have a great day! 😊
        </p>
      </div>
      <div className={`${styles.error_msg} ${error ? "show" : ""}`}>
        <button
          type="button"
          className={styles.close}
          onClick={() => setError(false)}
        >
          {/* <img src="close.png" alt="close icon" /> */} close
        </button>
        <h2>⚠️ Error</h2>
        <p>🙁 Something went wrong. Please try again.</p>
      </div>
      {loading && (
        <div className="loader">
          <span className="spinner"></span>
        </div>
      )}
      <div className={styles.contact_grid}>
        <form
          className={styles.contact_form}
          onSubmit={handleSubmit(onSubmitForm, onError)}
        >
          <input type="hidden" {...register("date")} />
          <input type="hidden" {...register("timezone")} />
          <div className={styles.form_input}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className={errors.name ? styles.error_input : ""}
              placeholder="Enter your name"
              {...register("name", {
                required: "This field is required",
              })}
            />
            {errors.name && (
              <p className={styles.form_error}>{errors.name.message}</p>
            )}
          </div>
          <div className={styles.form_input}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className={errors.email ? styles.error_input : ""}
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className={styles.form_error}>{errors.email.message}</p>
            )}
          </div>
          <div className={styles.form_input}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Enter your message"
              className={errors.message ? styles.error_input : ""}
              {...register("message", {
                required: "This field is required",
              })}
            />
            {errors.message && (
              <p className={styles.form_error}>{errors.message.message}</p>
            )}
          </div>
          <div className="captcha">
            <ReCAPTCHA
              sitekey="6LdAkh4rAAAAANHVLpntrWOuvAc2KUrvztBgDmEg"
              onChange={onChange}
              ref={captchaRef}
            />
            {/* Test key */}
            {/* <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={onChange} ref={captchaRef} /> */}
            {!captchaVerified && formSubmitted && (
              <span className={styles.form_error}>
                Please verify the CAPTCHA.
              </span>
            )}
          </div>
          <div className={styles.form_btns}>
            <button
              type="reset"
              style={{
                backgroundColor: "var(--text-white)",
                color: "var(--text-dark)",
              }}
            >
              Reset
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
        <Map />
      </div>
      <Toaster
        toastOptions={{
          success: {
            iconTheme: {
              primary: "green",
              secondary: "white",
            },
          },
          error: {
            iconTheme: {
              primary: "red",
              secondary: "white",
            },
          },
        }}
      />
    </section>
  );
};

export default Contact;
