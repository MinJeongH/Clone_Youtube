import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import VideoList from "./component/video_list/video_list";
import Header from "./component/header/header";
import SideBar from "./component/side_bar/side_bar";
import Youtube from "./service/youtube";
import { IAppProps, IVideo } from "./service/exportInterface";
import SideBarWide from "./component/side_bar/side_bar_wide";

function App({ youtube }: IAppProps) {
  const [videos, setVideos] = useState<IVideo[]>([]);

  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.topContainer}>
      <Header />  
      <SideBarWide />
      <div className={styles.main}>
        {/* <SideBar /> */}
        <VideoList videos={videos} />
      </div>
    </div>
  );
}

export default App;
