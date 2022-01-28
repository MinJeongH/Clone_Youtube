import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IRelatedVideo, IVideo } from "../../service/export_Interface";
import styles from "./video_detail.module.css";
import Youtube from "../../service/youtube";
import Header from "../header/header";
import SideBar from "../side_bar/side_bar";
import SideBarWide from "../side_bar/side_bar_wide";
import VideoRelated from "../video_related/video_related";
import VideoList from "../video_list/video_list";

interface IYoutubeProps {
  youtube: Youtube;
}

const VideoDetail = ({ youtube }: IYoutubeProps) => {
  const [selectvideo, setSelectvideo] = useState<IVideo>();
  const [showside, setShowside] = useState(false);
  const [relatedvideos, setRelatedvideos] = useState<IRelatedVideo[]>([]);
  const { idparams } = useParams();

  useEffect(() => {
    if (idparams) {
      youtube.viewVideo(idparams).then((video) => setSelectvideo(video));
      youtube
        .relatedVideo(idparams)
        .then((relatedvideos) => setRelatedvideos(relatedvideos));
    }
  }, [idparams]);

  return (
    <>
      <Header setShowside={setShowside} />
      <div className={styles.main}>
        {showside && <SideBarWide />}
        <section className={styles.detail}>
          {selectvideo && (
            <>
              <iframe
                className={styles.video}
                title="youtube video player"
                width="100%"
                height="500px"
                src={`http://www.youtube.com/embed/${idparams}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <p className={styles.title}>{selectvideo.snippet.title}</p>
              <p className={styles.channel}>
                {selectvideo.snippet.channelTitle}
              </p>
              <pre className={styles.description}>
                {selectvideo.snippet.description}
              </pre>
            </>
          )}
        </section>
        <section className={styles.side}>
          <VideoRelated relatedvideos={relatedvideos} />
        </section>
      </div>
    </>
  );
};

export default VideoDetail;
