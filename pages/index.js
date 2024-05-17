import Nav from "../components/nav";
import Thread1 from "../components/thread1";
import styles from "./index.module.css";

const Content = () => {
  return (
    <div className={styles.content}>
      <main className={styles.feed}>
        <Nav />
        <section className={styles.contentcontainer}>
          <div className={styles.userinfo}>
            <div className={styles.infos}>
              <img
                className={styles.avatarBigIcon}
                alt=""
                src="/avatar-big.svg"
              />
              <div className={styles.infos1}>
                <div className={styles.infos2}>
                  <h2 className={styles.alissonRochinski}>Alisson Rochinski</h2>
                  <div className={styles.infos3}>
                    <div className={styles.arochinski}>arochinski</div>
                    <div className={styles.threadsnetWrapper}>
                      <div className={styles.threadsnet}>threads.net</div>
                    </div>
                  </div>
                </div>
                <div className={styles.uiDesignerContainer}>
                  <p className={styles.uiDesigner}>
                    UI Designer | Let's redesign the world
                  </p>
                  <p className={styles.alissonrochinskigmailcom}>
                    alisson.rochinski@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.infos4}>
              <div className={styles.respostasECurtidas}>
                <div className={styles.seguidores}>2957 seguidores</div>
                <div className={styles.respostasECurtidasChild} />
                <div className={styles.rochinskicom}>rochinski.com</div>
              </div>
            </div>
          </div>
          <div className={styles.feed1}>
            <div className={styles.threadinput}>
              <div className={styles.thread}>
                <img className={styles.avatarIcon} alt="" src="/avatar.svg" />
              </div>
              <div className={styles.infosActions}>
                <div className={styles.infos5}>
                  <input
                    className={styles.shareSomethingCool}
                    placeholder="Share something cool today"
                    type="text"
                  />
                </div>
                <div className={styles.actions}>
                  <div className={styles.actions1}>
                    <img
                      className={styles.paperclipIcon}
                      alt=""
                      src="/paperclip@2x.png"
                    />
                  </div>
                  <button className={styles.actions2}>
                    <img
                      className={styles.sendIcon}
                      alt=""
                      src="/send@2x.png"
                    />
                  </button>
                </div>
              </div>
            </div>
            <Thread1
              avatar="/avatar-2.svg"
              iveBeenExploringWaysOfSet="I’ve been exploring ways of setting up variables in Figma if you have two different sets of global colours for light and dark themes with multiple brands. If you want to learn more about it, DM me, please"
              like="/like@2x.png"
              comment="/comment@2x.png"
              repost="/repost@2x.png"
              send="/send-1.svg"
              likes="7 Likes"
              threadAlignSelf="stretch"
              threadWidth="unset"
              threadFlexWrap="unset"
              avatarIconHeight="unset"
              infoMinWidth="unset"
              dotsColor="#616161"
              ellipseDivBackgroundColor="#fff"
              ellipseDivBackgroundColor1="#fff"
              iveBeenExploringBackgroundColor="#fff"
              likeIconPadding="unset"
              likesWidth="unset"
              likesPadding="unset"
            />
            <Thread1
              avatar="/avatar-1.png"
              iveBeenExploringWaysOfSet={`guys, just see that now we have a "Save for Later" I've been waiting for this so much`}
              like="/like@2x.png"
              comment="/comment@2x.png"
              repost="/repost@2x.png"
              send="/send@2x.png"
              likes="2 Likes"
              threadAlignSelf="stretch"
              threadWidth="unset"
              threadFlexWrap="unset"
              avatarIconHeight="unset"
              infoMinWidth="unset"
              dotsColor="#616161"
              ellipseDivBackgroundColor="#fff"
              ellipseDivBackgroundColor1="#fff"
              iveBeenExploringBackgroundColor="#fff"
              likeIconPadding="unset"
              likesWidth="unset"
              likesPadding="unset"
            />
            <Thread1
              avatar="/avatar-2.svg"
              iveBeenExploringWaysOfSet="Hold onto your seats, folks! The new iPhone is coming in hot, ready to rock our world! Imagine the stunning photos and videos I'll capture with this beauty! 📸💥 #BringItOnNewiPhone #BeyondExcited"
              like="/like.svg"
              comment="/comment.svg"
              repost="/repost.svg"
              send="/send-1.svg"
              likes="16 Likes"
              threadAlignSelf="stretch"
              threadWidth="unset"
              threadFlexWrap="unset"
              avatarIconHeight="unset"
              infoMinWidth="unset"
              dotsColor="#616161"
              ellipseDivBackgroundColor="#fff"
              ellipseDivBackgroundColor1="#fff"
              iveBeenExploringBackgroundColor="#fff"
              likeIconPadding="unset"
              likesWidth="unset"
              likesPadding="unset"
            />
            <Thread1
              avatar="/avatar-2.svg"
              iveBeenExploringWaysOfSet="I’ve been exploring ways of setting up variables in Figma if you have two different sets of global colours for light and dark themes with multiple brands. If you want to learn more about it, DM me, please"
              like="/like@2x.png"
              comment="/comment@2x.png"
              repost="/repost.svg"
              send="/send-1.svg"
              likes="7 Likes"
              threadAlignSelf="stretch"
              threadWidth="unset"
              threadFlexWrap="unset"
              avatarIconHeight="unset"
              infoMinWidth="unset"
              dotsColor="#616161"
              ellipseDivBackgroundColor="#fff"
              ellipseDivBackgroundColor1="#fff"
              iveBeenExploringBackgroundColor="#fff"
              likeIconPadding="unset"
              likesWidth="unset"
              likesPadding="unset"
            />
          </div>
          <div className={styles.infos6}>
            <div className={styles.infos7}>
              <div className={styles.title}>
                <h2 className={styles.trendingTopics}>Trending Topics</h2>
                <img
                  className={styles.settingsIcon}
                  alt=""
                  src="/settings.svg"
                />
              </div>
            </div>
            <div className={styles.treanding}>
              <div className={styles.topic}>
                <div className={styles.design}>Design</div>
                <div className={styles.threadsdesktop}>ThreadsDesktop</div>
                <div className={styles.kThreads}>123.9k threads</div>
              </div>
              <div className={styles.topic1}>
                <div className={styles.moviesAndSeries}>movies and series</div>
                <div className={styles.spiderManAcrossThe}>
                  Spider-Man: Across the Spider-Verse
                </div>
                <div className={styles.kThreads1}>93.4k threads</div>
              </div>
              <div className={styles.topic2}>
                <div className={styles.tech}>tech</div>
                <div className={styles.iphone15}>iPhone 15</div>
                <div className={styles.kThreads2}>85.2k threads</div>
              </div>
              <div className={styles.topic3}>
                <div className={styles.games}>games</div>
                <div className={styles.riotGames}>Riot Games</div>
                <div className={styles.kThreads3}>71.9k threads</div>
              </div>
              <div className={styles.topic4}>
                <div className={styles.design1}>Design</div>
                <div className={styles.minimalism}>#Minimalism</div>
                <div className={styles.kThreads4}>69.1k threads</div>
              </div>
            </div>
            <div className={styles.seeMore}>see more</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Content;
