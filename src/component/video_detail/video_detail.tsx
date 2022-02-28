import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  IChannels,
  IRelatedVideo,
  IVideo,
} from "../../service/export_Interface";
import styles from "./video_detail.module.css";
import Youtube from "../../service/youtube";
import SideBarWide from "../side_bar/side_bar_wide";
import VideoRelated from "../video_related/video_related";
import { viewToCount } from "../../common/countViews";
import { likeToCount } from "../../common/countLike";
import { dateCheck } from "../../common/dateCheck";

interface IVideoDetailProps {
  youtube: Youtube;
  showside: boolean;
}

const VideoDetail = ({ youtube, showside }: IVideoDetailProps) => {
  const [selectvideo, setSelectvideo] = useState<IVideo>();
  const [relatedvideos, setRelatedvideos] = useState<IRelatedVideo[]>([]);
  const [channels, setChannels] = useState<IChannels>();
  const { idparams } = useParams();

  useEffect(() => {
    if (idparams) {
      youtube.viewVideo(idparams).then((video) => setSelectvideo(video));
      youtube
        .relatedVideo(idparams)
        .then((relatedvideos) => setRelatedvideos(relatedvideos));
    }
  }, [idparams]);

  useEffect(() => {
    if (selectvideo?.snippet.channelId) {
      youtube
        .channel(selectvideo?.snippet.channelId)
        .then((channelid) => setChannels(channelid));
    }
  }, [selectvideo?.snippet.channelId]);

  return (
    <div className={styles.main}>
      {showside && <SideBarWide />}
      <div className={styles.container}>
        <section className={styles.detail}>
          {selectvideo && (
            <>
              <iframe
                className={styles.video}
                title="youtube video player"
                width="100%"
                height="500px"
                src={`https://www.youtube.com/embed/${idparams}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className={styles.texts}>
                <p className={styles.title}>{selectvideo.snippet.title}</p>
                <div className={styles.textdetail}>
                  <div className={styles.count}>
                    <p className={styles.views}>
                      {viewToCount(selectvideo.statistics.viewCount)}
                    </p>
                    <p className={styles.date}>
                      {dateCheck(selectvideo.snippet.publishedAt)}
                    </p>
                  </div>
                  <div className={styles.like}>
                    <span className={`material-icons ${styles.likeicon}`}>
                      thumb_up_off_alt
                    </span>
                    <p className={styles.liketext}>
                      {likeToCount(selectvideo.statistics.likeCount)}
                    </p>
                  </div>
                </div>
                <div className={styles.channel_contents}>
                  <img
                    className={styles.channel_img}
                    src={channels?.snippet.thumbnails.medium.url}
                    alt="channel_img"
                  />
                  <div className={styles.channel_text}>
                    <p className={styles.channel_title}>
                      {selectvideo.snippet.channelTitle}
                    </p>
                    <pre className={styles.description}>
                      {selectvideo.snippet.description}
                    </pre>
                  </div>
                </div>
              </div>
            </>
          )}
        </section>
        <section className={styles.side}>
          <VideoRelated relatedvideos={relatedvideos} />
        </section>
      </div>
    </div>
  );
};

export default VideoDetail;
