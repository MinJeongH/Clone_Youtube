import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import styles from "./App.module.css";
import VideoList from "./component/video_list/video_list";
import Header from "./component/header/header";
import SideBar from "./component/side_bar/side_bar";
import Youtube from "./service/youtube";
import { IVideo } from "./service/exportInterface";
import SideBarWide from "./component/side_bar/side_bar_wide";
import VideoDetail from "./component/video_detail/video_detail";

interface IAppProps {
  youtube: Youtube;
}

function App({ youtube }: IAppProps) {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const [showside, setShowside] = useState(false);
  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className={`${styles.topContainer} && ${showside && styles.body}`}>
      <Header setShowside={setShowside} />
      <div className={styles.main}>
        {showside && <SideBarWide />}
        <SideBar showside={showside} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<VideoList videos={videos} />} />
            <Route
              path="/video/:idparams"
              element={<VideoDetail youtube={youtube} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
