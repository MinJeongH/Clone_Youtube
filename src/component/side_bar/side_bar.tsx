import React from "react";
import { Link } from "react-router-dom";
import styles from "./side_bar.module.css";

interface ISideBarProps {
  showside: boolean;
}

const SideBar = ({ showside }: ISideBarProps) => {
  return (
    <section className={`${styles.sidebar} ${showside && styles.sidebarLeft}`}>
      <Link to={"/"} className={styles.linkHome}>
        <button className={styles.button}>
          <span className={`material-icons ${styles.home}`}>home</span>홈
        </button>
      </Link>
      <button className={styles.button}>
        <span className={`material-icons ${styles.compass}`}>explore</span>
        탐색
      </button>
      <button className={styles.button}>
        <span className={`material-icons ${styles.sub}`}>subscriptions</span>
        구독
      </button>
      <button className={styles.button}>
        <span className={`material-icons ${styles.rocker}`}>video_library</span>
        보관함
      </button>
    </section>
  );
};
export default SideBar;
