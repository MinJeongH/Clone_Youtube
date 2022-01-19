import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IVideo } from "../../service/exportInterface";
import styles from "./video_detail.module.css";
import Youtube from "../../service/youtube";

interface IYoutubeProps {
  youtube: Youtube;
}

const VideoDetail = ({ youtube }: IYoutubeProps) => {
  const [selectvideo, setSelectvideo] = useState<IVideo>();
  const { idparams } = useParams();

  useEffect(() => {
    if (idparams)
      youtube.viewVideo(idparams).then((video) => setSelectvideo(video));
  }, [idparams]);

  console.log(selectvideo, selectvideo?.snippet);
  return (
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
          <h2>{selectvideo.snippet.title}</h2>
          <h3>{selectvideo.snippet.channelTitle}</h3>
          <pre className={styles.description}>
            {selectvideo.snippet.description}
          </pre>
        </>
      )}
    </section>
  );
};

export default VideoDetail;
