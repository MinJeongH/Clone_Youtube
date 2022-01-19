import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

interface IsetShowside {
  setShowside: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ setShowside }: IsetShowside) => {
  const sendShowside = () => {
    setShowside((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={`material-icons ${styles.bar}`} onClick={sendShowside}>
          menu
        </span>
        <Link to={"/"} className={styles.home}>
          <img className={styles.imgs} src="/images/logo.png" alt="logo" />
          <h1 className={styles.title}>Youtube</h1>
        </Link>
      </div>
      <div className={styles.search}>
        <input className={styles.input} type="search" placeholder="Search" />
        <button className={styles.button}>
          <span className={`material-icons ${styles.searchIcon}`}>search</span>
        </button>
      </div>
      <div className={styles.usermenu}>
        <span className={`material-icons ${styles.video}`}>video_call</span>
        <span className={`material-icons ${styles.notice}`}>notifications</span>
        <span className={`material-icons ${styles.apps}`}>apps</span>
        <span className={`material-icons ${styles.user}`}>account_circle</span>
      </div>
    </header>
  );
};

export default Header;
