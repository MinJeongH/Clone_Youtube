import React from "react";
import { IVideo } from "../../service/export_Interface";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";
import SideBar from "../side_bar/side_bar";
import SideBarWide from "../side_bar/side_bar_wide";
import Youtube from "../../service/youtube";

interface IVideoListProps {
  youtube: Youtube;
  videos: IVideo[];
  showside: boolean;
}

const VideoList = ({ youtube, videos, showside }: IVideoListProps) => {
  return (
    <>
      <div className={styles.main}>
        {showside && <SideBarWide />}
        <SideBar showside={showside} />
        <div className={styles.container}>
          {videos.map((video) => (
            <VideoItem
              youtube={youtube}
              key={video.id}
              id={video.id}
              snippet={video.snippet}
              statistics={video.statistics}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoList;
