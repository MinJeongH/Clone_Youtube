import React from "react";
import styles from "./video_search_item.module.css";
import { ISearch } from "../../service/export_Interface";
import { Link } from "react-router-dom";

const VideoSearchItem = ({ snippet, q, id }: ISearch) => {
  return (
    <li className={styles.container}>
      <Link to={`/video/${id.videoId}`} className={styles.link}>
        <div className={styles.metadata}>
          <img
            className={styles.thumnail}
            src={snippet.thumbnails.medium.url}
            alt="thumnail"
          />
          <div className={styles.text}>
            <p className={styles.title}>{snippet.title}</p>
            <p className={styles.channel}>{snippet.channelTitle}</p>
            <pre className={styles.description}>{snippet.description}</pre>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default VideoSearchItem;
