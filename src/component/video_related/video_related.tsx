import React from "react";
import { IRelatedVideo } from "../../service/export_Interface";
import VideoRelatedList from "../video_related_list/video_related_list";
import styles from "./video_related.module.css";

interface IVideoRelatedProps {
  relatedvideos: IRelatedVideo[];
}

const VideoRelated = ({ relatedvideos }: IVideoRelatedProps) => {
  return (
    <div className={styles.listcontainer}>
      {relatedvideos.map((relatedvideo) => {
        if (relatedvideo.snippet) {
          return (
            <VideoRelatedList
              id={relatedvideo.id}
              snippet={relatedvideo.snippet}
            />
          );
        } else return <></>;
      })}
    </div>
  );
};

export default VideoRelated;
