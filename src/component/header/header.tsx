import React from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./header.module.css";

interface IHeaderProps {
  setShowside: React.Dispatch<React.SetStateAction<boolean>>;
  setWordvalue: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ setShowside, setWordvalue }: IHeaderProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navi = useNavigate();

  const sendShowside = () => {
    setShowside((prev) => !prev);
  };

  const inputSearch = () => {
    if (inputRef.current) {
      const value = inputRef.current.value;
      setWordvalue(value);
      console.log(value);
    }
  };

  const onClickBtn = () => {
    inputSearch();
  };

  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      navi("/search");
      inputSearch();
    }
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
        <input
          ref={inputRef}
          className={styles.input}
          type="search"
          placeholder="Search"
          onKeyPress={onKeyPress}
        />
        <Link to={"/search"}>
          <button className={styles.button} onClick={onClickBtn}>
            <span className={`material-icons ${styles.searchIcon}`}>
              search
            </span>
          </button>
        </Link>
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
