import React, { useEffect, useState } from "react";
import styles from "./video_search_item.module.css";
import { IChannels, ISnippet, IVideoId } from "../../service/export_Interface";
import { Link } from "react-router-dom";
import Youtube from "../../service/youtube";

interface IVideoSearchItemProps {
  youtube: Youtube;
  snippet: ISnippet;
  q: string;
  id: IVideoId;
}

const VideoSearchItem = ({
  youtube,
  snippet,
  q,
  id,
}: IVideoSearchItemProps) => {
  const [channels, setChannels] = useState<IChannels>();

  useEffect(() => {
    if (snippet.channelId) {
      youtube
        .channel(snippet.channelId)
        .then((channelid) => setChannels(channelid));
    }
  }, [id]);

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
            <div className={styles.channel}>
              <img
                className={styles.channel_img}
                src={channels?.snippet.thumbnails.medium.url}
                alt="channel_img"
              />
              <p className={styles.channel_title}>{snippet.channelTitle}</p>
            </div>

            <pre className={styles.description}>{snippet.description}</pre>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default VideoSearchItem;
