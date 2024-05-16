import { useMemo } from "react";
import styles from "./thread1.module.css";

const Thread1 = ({
  avatar,
  iveBeenExploringWaysOfSet,
  like,
  comment,
  repost,
  send,
  likes,
  threadAlignSelf,
  threadWidth,
  threadFlexWrap,
  avatarIconHeight,
  infoMinWidth,
  dotsColor,
  ellipseDivBackgroundColor,
  ellipseDivBackgroundColor1,
  iveBeenExploringBackgroundColor,
  likeIconPadding,
  likesWidth,
  likesPadding,
}) => {
  const threadStyle = useMemo(() => {
    return {
      alignSelf: threadAlignSelf,
      width: threadWidth,
    };
  }, [threadAlignSelf, threadWidth]);

  const thread1Style = useMemo(() => {
    return {
      flexWrap: threadFlexWrap,
    };
  }, [threadFlexWrap]);

  const thread2Style = useMemo(() => {
    return {
      height: avatarIconHeight,
    };
  }, [avatarIconHeight]);

  const infosActionsStyle = useMemo(() => {
    return {
      minWidth: infoMinWidth,
    };
  }, [infoMinWidth]);

  const minStyle = useMemo(() => {
    return {
      color: dotsColor,
    };
  }, [dotsColor]);

  const ellipseDivStyle = useMemo(() => {
    return {
      backgroundColor: ellipseDivBackgroundColor,
    };
  }, [ellipseDivBackgroundColor]);

  const ellipseDiv1Style = useMemo(() => {
    return {
      backgroundColor: ellipseDivBackgroundColor1,
    };
  }, [ellipseDivBackgroundColor1]);

  const ellipseDiv2Style = useMemo(() => {
    return {
      backgroundColor: iveBeenExploringBackgroundColor,
    };
  }, [iveBeenExploringBackgroundColor]);

  const actionsStyle = useMemo(() => {
    return {
      padding: likeIconPadding,
    };
  }, [likeIconPadding]);

  const reactionsStyle = useMemo(() => {
    return {
      width: likesWidth,
      padding: likesPadding,
    };
  }, [likesWidth, likesPadding]);

  return (
    <div className={styles.thread} style={threadStyle}>
      <div className={styles.thread1} style={thread1Style}>
        <div className={styles.thread2} style={thread2Style}>
          <img className={styles.avatarIcon} alt="" src={avatar} />
        </div>
        <div className={styles.infosActions} style={infosActionsStyle}>
          <div className={styles.info}>
            <div className={styles.headingInfos}>
              <div className={styles.username}>aura</div>
              <div className={styles.rightInfos}>
                <div className={styles.min} style={minStyle}>
                  2min
                </div>
                <div className={styles.dots}>
                  <div className={styles.dotsChild} style={ellipseDivStyle} />
                  <div className={styles.dotsItem} style={ellipseDiv1Style} />
                  <div className={styles.dotsInner} style={ellipseDiv2Style} />
                </div>
              </div>
            </div>
            <div className={styles.iveBeenExploring}>
              {iveBeenExploringWaysOfSet}
            </div>
          </div>
          <div className={styles.actions} style={actionsStyle}>
            <img className={styles.likeIcon} alt="" src={like} />
            <img className={styles.commentIcon} alt="" src={comment} />
            <img className={styles.repostIcon} alt="" src={repost} />
            <img className={styles.sendIcon} alt="" src={send} />
          </div>
          <div className={styles.reactions} style={reactionsStyle}>
            <div className={styles.likes}>{likes}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thread1;
