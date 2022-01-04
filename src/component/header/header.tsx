import React from "react";
import styles from "./header.module.css";
import {
  faSearch,
  faVideo,
  faBell,
  faUserCog,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <FontAwesomeIcon className={styles.bar} icon={faBars} size="2x" />
        <img className={styles.imgs} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <div className={styles.search}>
        <input className={styles.input} type="search" placeholder="Search" />
        <button className={styles.button}>
          <FontAwesomeIcon className={styles.bicon} icon={faSearch} size="2x" />
        </button>
      </div>
      <div className={styles.usermenu}>
        <FontAwesomeIcon className={styles.video} icon={faVideo} size="2x" />
        <FontAwesomeIcon className={styles.notice} icon={faBell} size="2x" />
        <FontAwesomeIcon className={styles.user} icon={faUserCog} size="2x" />
      </div>
    </header>
  );
};

export default Header;
