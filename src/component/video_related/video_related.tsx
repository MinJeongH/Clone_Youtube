import React from "react";
import { IRelatedVideoList } from "../../service/export_Interface";
import VideoRelatedList from "../video_related_list/video_related_list";
import styles from "./video_related.module.css";

const VideoRelated = ({ relatedvideos }: IRelatedVideoList) => {
  return (
    <div className={styles.listcontainer}>
      {relatedvideos.map((relatedvideo) => (
        <VideoRelatedList id={relatedvideo.id} snippet={relatedvideo.snippet} />
      ))}
    </div>
  );
};

export default VideoRelated;
