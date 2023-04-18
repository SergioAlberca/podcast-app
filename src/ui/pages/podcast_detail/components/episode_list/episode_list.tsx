import type { Episode } from "@/core/podcast/domain/models/episode_model";
import type { Podcast } from "@/core/podcast/domain/models/podcast_model";
import styles from "./episode_list.module.css";
import EpisodeItem from "./components/episode_item";

interface Props {
  episodes: Episode[];
  podcastDetail: Podcast;
}

export default function EpisodeList({ episodes, podcastDetail }: Props) {
  return (
    <div className={styles["podcast-detail-episodes"]}>
      <div className={styles["podcast-detail-episodes-quantity"]}>
        <h3>Episodes: {episodes.length}</h3>
      </div>
      <div className={styles["episodes-list"]}>
        <div className={styles["episode-titles"]}>
          <h5>Title</h5>
          <h5>Date</h5>
          <h5>Duration</h5>
        </div>
        {episodes.map((episode) => {
          return <EpisodeItem key={episode.trackId} episode={episode} podcastDetail={podcastDetail} />;
        })}
      </div>
    </div>
  );
}
