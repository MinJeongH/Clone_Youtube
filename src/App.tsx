import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import VideoList from "./component/video_list/video_list";
import Youtube from "./service/youtube";
import { ISearch, IVideo } from "./service/export_Interface";
import VideoDetail from "./component/video_detail/video_detail";
import Header from "./component/header/header";
import VideoSearch from "./component/video_search/video_search";

interface IAppProps {
  youtube: Youtube;
}

function App({ youtube }: IAppProps) {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const [showside, setShowside] = useState(false);
  const [searches, setSearches] = useState<ISearch[]>([]);
  const [wordvalue, setWordvalue] = useState(String);

  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, [youtube]);

  useEffect(() => {
    if (wordvalue) {
      youtube.search(wordvalue).then((searches) => setSearches(searches));
    }
  });

  return (
    <div className={styles.topContainer}>
      <BrowserRouter>
        <Header setShowside={setShowside} setWordvalue={setWordvalue} />
        <Routes>
          <Route
            path="/"
            element={<VideoList videos={videos} showside={showside} />}
          />
          <Route
            path="/video/:idparams"
            element={<VideoDetail youtube={youtube} showside={showside} />}
          />
          <Route
            path="/search"
            element={<VideoSearch searches={searches} showside={showside} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
