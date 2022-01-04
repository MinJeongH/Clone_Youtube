import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import VideoList from "./component/video_list/video_list";
import Header from "./component/header/header";
import SideBar from "./component/side_bar/side_bar";

function App() {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <SideBar />
        <VideoList />
      </div>
    </>
  );
}

export default App;
