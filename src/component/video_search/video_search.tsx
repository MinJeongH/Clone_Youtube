import React from "react";
import { ISearch } from "../../service/export_Interface";
import Youtube from "../../service/youtube";
import SideBar from "../side_bar/side_bar";
import SideBarWide from "../side_bar/side_bar_wide";
import VideoSearchItem from "../video_search_item/video_search_item";
import styles from "./video_search.module.css";

interface IVideoSearchProps {
  youtube: Youtube;
  searches: ISearch[];
  showside: boolean;
}

const VideoSearch = ({ youtube, searches, showside }: IVideoSearchProps) => {
  return (
    <div className={styles.main}>
      {showside && <SideBarWide />}
      <SideBar showside={showside} />
      <div className={styles.listcontainer}>
        {searches.map((video) => (
          <VideoSearchItem
            youtube={youtube}
            snippet={video.snippet}
            q={video.q}
            id={video.id}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoSearch;
