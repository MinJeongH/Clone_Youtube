import React from "react";
import styles from "./side_bar.module.css";
import { faHome, faCompass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = () => {
  return (
    <section className={styles.sidebar}>
      <button className={styles.button}>
        <FontAwesomeIcon className={styles.home} icon={faHome} size="2x" />
        Home
      </button>
      <button className={styles.button}>
        <FontAwesomeIcon
          className={styles.compass}
          icon={faCompass}
          size="2x"
        />
        Research
      </button>
      <button className={styles.button}>
        <img
          className={styles.sub}
          src="/images/subscribe.png"
          alt="subscribe"
        />
        Subscribe
      </button>
      <button className={styles.button}>
        <img className={styles.rocker} src="/images/rocker.png" alt="rocker" />
        Rocker
      </button>
    </section>
  );
};
export default SideBar;
