import styles from "./components.module.css";

const Components = () => {
  return (
    <div className={styles.components}>
      <section className={styles.thread}>
        <div className={styles.thread1}>
          <div className={styles.thread2}>
            <img
              className={styles.avatarIcon}
              loading="lazy"
              alt=""
              src="/avatar1.svg"
            />
          </div>
          <div className={styles.infosActions}>
            <div className={styles.info}>
              <div className={styles.headingInfos}>
                <div className={styles.username}>aura</div>
                <div className={styles.rightInfos}>
                  <div className={styles.min}>2min</div>
                  <div className={styles.dots}>
                    <div className={styles.dotsChild} />
                    <div className={styles.dotsItem} />
                    <div className={styles.dotsInner} />
                  </div>
                </div>
              </div>
              <div className={styles.iveBeenExploring}>
                I’ve been exploring ways of setting up variables in Figma if you
                have two different sets of global colours for light and dark
                themes with multiple brands. If you want to learn more about it,
                DM me, please
              </div>
            </div>
            <div className={styles.actions}>
              <img
                className={styles.likeIcon}
                loading="lazy"
                alt=""
                src="/like.svg"
              />
              <img
                className={styles.commentIcon}
                loading="lazy"
                alt=""
                src="/comment.svg"
              />
              <img
                className={styles.repostIcon}
                loading="lazy"
                alt=""
                src="/repost.svg"
              />
              <img
                className={styles.sendIcon}
                loading="lazy"
                alt=""
                src="/send-1.svg"
              />
            </div>
            <div className={styles.reactions}>
              <div className={styles.likes}>7 Likes</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Components;
