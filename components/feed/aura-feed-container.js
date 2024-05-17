import ThreadInput from "./thread-input";
import Thread1 from "../thread";
import styles from "./aura-feed-container.module.css";

const AuraFeedContainer = () => {
  return (
    <div className={styles.feed}>
      <ThreadInput />
      <Thread1
        authorImage="/avatar-2.svg"
        threadContent="I’ve been exploring ways of setting up variables in Figma if you have two different sets of global colours for light and dark themes with multiple brands. If you want to learn more about it, DM me, please"
        like="/like@2x.png"
        comment="/comment@2x.png"
        repost="/repost@2x.png"
        likes="7 Likes"
        username="aura"
        timeSpentSincePublish="2min"
      />
      <Thread1
        authorImage="/avatar-1.png"
        threadContent={`guys, just see that now we have a "Save for Later" I've been waiting for this so much`}
        like="/like@2x.png"
        comment="/comment@2x.png"
        repost="/repost@2x.png"
        likes="2 Likes"
        avatarIconHeight="unset"
        likesWidth="unset"
        username="aura"
        timeSpentSincePublish="2min"
      />
      <Thread1
        authorImage="/avatar-2.svg"
        threadContent="Hold onto your seats, folks! The new iPhone is coming in hot, ready to rock our world! Imagine the stunning photos and videos I'll capture with this beauty! 📸💥 #BringItOnNewiPhone #BeyondExcited"
        like="/like1.svg"
        comment="/comment1.svg"
        repost="/repost1.svg"
        likes="16 Likes"
        avatarIconHeight="unset"
        likesWidth="unset"
        username="aura"
        timeSpentSincePublish="2min"
      />
      <Thread1
        authorImage="/avatar-2.svg"
        threadContent="I’ve been exploring ways of setting up variables in Figma if you have two different sets of global colours for light and dark themes with multiple brands. If you want to learn more about it, DM me, please"
        like="/like@2x.png"
        comment="/comment@2x.png"
        repost="/repost1.svg"
        likes="7 Likes"
        avatarIconHeight="unset"
        likesWidth="unset"
        username="aura"
        timeSpentSincePublish="2min"
      />
    </div>
  );
};

export default AuraFeedContainer;
