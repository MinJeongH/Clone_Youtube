import React from "react";
import styles from "./video_related_list.module.css";
import { IRelatedVideo } from "../../service/export_Interface";
import { Link } from "react-router-dom";

const VideoRelatedList = ({ id, snippet }: IRelatedVideo) => {
  return (
    <li className={styles.container}>
      <div className={styles.video}>
        <Link to={`/video/${id.videoId}`} className={styles.link}>
          <img
            className={styles.thumnail}
            src={snippet!.thumbnails.medium.url}
            alt="thumnail"
          />
          <div className={styles.metadata}>
            <div className={styles.texts}>
              <p className={styles.title}>{snippet!.title}</p>
              <p className={styles.channel}>{snippet!.channelTitle}</p>
            </div>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default VideoRelatedList;
