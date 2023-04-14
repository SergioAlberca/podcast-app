import { getLocaleString } from "@/common/utils/dates";
import { millisecondsToMinutes } from "@/common/utils/time";
import { Episode } from "@/core/podcast/domain/models/episode_model";
import { Podcast } from "@/core/podcast/domain/models/podcast_model";
import { Link } from "react-router-dom";
import styles from "./episode_item.module.css";

interface Props {
  episode: Episode;
  podcastDetail: Podcast;
}

export default function EpisodeItem({ episode, podcastDetail }: Props) {
  return (
    <div className={styles["episode-item"]} key={episode.trackId}>
      <Link
        to={`/podcast/${podcastDetail?.id.attributes["im:id"]}/episode/${episode.trackId}`}
      >
        <span>{episode.trackName}</span>
      </Link>
      <span>{getLocaleString(episode.releaseDate)}</span>
      <span>{millisecondsToMinutes(episode.trackTimeMillis)}</span>
    </div>
  );
}
