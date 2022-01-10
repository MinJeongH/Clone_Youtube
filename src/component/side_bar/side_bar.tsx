import React from "react";
import styles from "./side_bar.module.css";
import { faHome, faCompass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = () => {
  return (
    <section className={styles.sidebar}>
      <button className={styles.button}>
        <img className={styles.home} src="/icons/home.svg" alt="home" />홈
      </button>
      <button className={styles.button}>
        <FontAwesomeIcon
          className={styles.compass}
          icon={faCompass}
          size="2x"
        />
        탐색
      </button>
      <button className={styles.button}>
        <img
          className={styles.sub}
          src="/images/subscribe.png"
          alt="subscribe"
        />
        구독
      </button>
      <button className={styles.button}>
        <img className={styles.rocker} src="/images/rocker.png" alt="rocker" />
        보관함
      </button>
    </section>
  );
};
export default SideBar;
