import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const VideoList = () => {
  return (
    <div className={styles.container}>
      <VideoItem />
    </div>
  );
};

export default VideoList;
