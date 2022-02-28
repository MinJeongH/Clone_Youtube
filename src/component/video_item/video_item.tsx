import React, { MouseEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./video_item.module.css";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IChannels,
  ISnippet,
  IStatistics,
  IVideo,
} from "../../service/export_Interface";
import { timeForToday } from "../../common/time";
import { viewToCount } from "../../common/countViews";
import Youtube from "../../service/youtube";

interface IVideoItemProps {
  youtube: Youtube;
  snippet: ISnippet;
  statistics: IStatistics;
  id: string;
}

const VideoItem = ({ youtube, snippet, statistics, id }: IVideoItemProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [channels, setChannels] = useState<IChannels>();

  useEffect(() => {
    if (snippet.channelId) {
      youtube
        .channel(snippet.channelId)
        .then((channelid) => setChannels(channelid));
    }
  }, [id]);

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
              src={channels?.snippet.thumbnails.medium.url}
              alt="channel_img"
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
