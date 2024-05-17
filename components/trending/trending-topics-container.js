import styles from "./trending-topics-container.module.css";

const TrendingTopicsContainer = () => {
  return (
    <div className={styles.infos}>
      <div className={styles.infos1}>
        <div className={styles.title}>
          <h2 className={styles.trendingTopics}>Trending Topics</h2>
          <img className={styles.settingsIcon} alt="" src="/settings.svg" />
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
  );
};

export default TrendingTopicsContainer;
