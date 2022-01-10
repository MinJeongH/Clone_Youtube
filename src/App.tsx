import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import VideoList from "./component/video_list/video_list";
import Header from "./component/header/header";
import SideBar from "./component/side_bar/side_bar";
import Youtube from "./service/youtube";
import { IAppProps, IVideo } from "./service/exportInterface";

function App({ youtube }: IAppProps) {
  const [videos, setVideos] = useState<IVideo[]>([]);

  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.topContainer}>
      <Header />
      <div className={styles.main}>
        <SideBar />
        <VideoList videos={videos} />
      </div>
    </div>
  );
}

export default App;
