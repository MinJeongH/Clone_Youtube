import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import styles from "./App.module.css";
import VideoList from "./component/video_list/video_list";
import Youtube from "./service/youtube";
import { IVideo } from "./service/exportInterface";
import VideoDetail from "./component/video_detail/video_detail";

interface IAppProps {
  youtube: Youtube;
}

function App({ youtube }: IAppProps) {
  const [videos, setVideos] = useState<IVideo[]>([]);
  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.topContainer}>
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
  );
}

export default App;
