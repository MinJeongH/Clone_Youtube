import React, { MouseEvent, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./video_item.module.css";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IVideo } from "../../service/export_Interface";

import { timeForToday } from "../../common/time";
import { viewToCount } from "../../common/countViews";

const VideoItem = ({ snippet, statistics, id }: IVideo) => {
  const [showMenu, setShowMenu] = useState(false);

  const menuIconEventIn = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setShowMenu(true);
  };

  const menuIconEventOut = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setShowMenu(false);
  };

  return (
    <li className={styles.container}>
      <div
        className={styles.video}
        onMouseEnter={menuIconEventIn}
        onMouseLeave={menuIconEventOut}
      >
        <Link to={`/video/${id}`} className={styles.link}>
          <img
            className={styles.thumnail}
            src={snippet.thumbnails.medium.url}
            alt="thumnail"
          />
          <div className={styles.metadata}>
            <img
              className={styles.picon}
              src="/images/picon_sample.svg"
              alt="usericon"
            />
            <div className={styles.texts}>
              <p className={styles.title}>{snippet.title}</p>
              <p className={styles.channel}>{snippet.channelTitle}</p>
              <div className={styles.textdetail}>
                <p className={styles.views}>
                  {viewToCount(statistics.viewCount)}
                </p>
                <p className={styles.time}>
                  {timeForToday(snippet.publishedAt)}
                </p>
              </div>
            </div>
            <div className={styles.menu}>
              <FontAwesomeIcon
                className={`${styles.menuicon} ${
                  showMenu ? styles.menuiconAniOn : styles.menuiconAniOff
                }`}
                icon={faEllipsisV}
              />
            </div>
          </div>
        </Link>
      </div>
    </li>
  );
};
export default VideoItem;