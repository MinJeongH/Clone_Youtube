import React from "react";
import { IVideoList } from "../../service/exportInterface";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const VideoList = ({ videos }: IVideoList) => (
  <div className={styles.container}>
    {videos.map((video) => (
      <VideoItem
        key={video.id}
        snippet={video.snippet}
        statistics={video.statistics}
      />
    ))}
  </div>
);

export default VideoList;
