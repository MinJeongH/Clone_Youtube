import React from "react";
import { Link } from "react-router-dom";
import styles from "./side_bar_wide.module.css";

const SideBarWide = () => {
  return (
    <>
      <section className={styles.sidebarWide}>
        <div className={styles.barcontent}>
          <div className={styles.homeguide}>
            <Link to={"/"} className={styles.linkHome}>
              <button className={styles.button}>
                <span className={`material-icons ${styles.home}`}>home</span>홈
              </button>
            </Link>
            <button className={styles.button}>
              <span className={`material-icons ${styles.compass}`}>
                explore
              </span>
              탐색
            </button>
            <button className={styles.button}>
              <span className={`material-icons ${styles.sub}`}>
                subscriptions
              </span>
              구독
            </button>
          </div>
          <div className={styles.videoguide}>
            <button className={styles.button}>
              <span className={`material-icons ${styles.rocker}`}>
                video_library
              </span>
              보관함
            </button>
            <button className={styles.button}>
              <span className={`material-icons ${styles.history}`}>
                history
              </span>
              시청 기록
            </button>
            <button className={styles.button}>
              <span className={`material-icons ${styles.myvideo}`}>
                slideshow
              </span>
              내 동영상
            </button>
            <button className={styles.button}>
              <span className={`material-icons ${styles.videolater}`}>
                watch_later
              </span>
              나중에 볼 동영상
            </button>
            <button className={styles.button}>
              <span className={`material-icons ${styles.likevideo}`}>
                thumb_up
              </span>
              좋아요 표시한 동영상
            </button>
          </div>
          <div className={styles.subscribeguide}>
            <p className={styles.text}> 구독</p>
          </div>
          <div className={styles.seemoreguide}>
            <p className={styles.text}>YOTUBE 더보기</p>
            <button className={styles.button}>
              <span className={`material-icons ${styles.premium}`}>
                smart_display
              </span>
              YouTube Premium
            </button>
            <button className={styles.button}>
              <span className={`material-icons ${styles.move}`}>theaters</span>
              영화
            </button>
            <button className={styles.button}>
              <span className={`material-icons ${styles.game}`}>
                sports_esports
              </span>
              게임
            </button>
            <button className={styles.button}>
              <span className={`material-icons ${styles.realtime}`}>
                wifi_tethering
              </span>
              실시간
            </button>
            <button className={styles.button}>
              <span className={`material-icons ${styles.study}`}>
                lightbulb
              </span>
              학습
            </button>
            <button className={styles.button}>
              <span className={`material-icons ${styles.sports}`}>
                emoji_events
              </span>
              스포츠
            </button>
          </div>
          <div className={styles.setguide}>
            <button className={styles.button}>
              <span className={`material-icons ${styles.setting}`}>
                settings
              </span>
              설정
            </button>
            <button className={styles.button}>
              <span className={`material-icons ${styles.report}`}>
                outlined_flag
              </span>
              신고 기록
            </button>
            <button className={styles.button}>
              <span className={`material-icons ${styles.service}`}>
                help_outline
              </span>
              고객센터
            </button>
            <button className={styles.button}>
              <span className={`material-icons ${styles.report}`}>report</span>
              의견 보내기
            </button>
          </div>
          <div className={styles.footer}>
            이 홈페이지는 개발자 함민정의 유튜브 클론코딩 페이지 입니다. Youtube
            API V3를 사용하여 제작되었습니다.
          </div>
        </div>
      </section>
      <section className={styles.sidebackground} />
    </>
  );
};

export default SideBarWide;
