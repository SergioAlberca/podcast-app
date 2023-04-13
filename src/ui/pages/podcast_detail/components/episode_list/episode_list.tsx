import { Link } from "react-router-dom";
import { millisecondsToMinutes } from "../../../../../common/utils/time";
import { Episode } from "../../../../../core/podcast/domain/models/episode_model";
import { Podcast } from "../../../../../core/podcast/domain/models/podcast_model";
import "./episode_list.css";

interface Props {
  episodes: Episode[];
  podcastDetail: Podcast;
}

export default function EpisodeList({ episodes, podcastDetail }: Props) {
  return (
    <div className="podcast-detail-episodes">
      <div className="total-episodes">
        <h3>Episodes: {episodes.length}</h3>
      </div>
      <div className="episodes-list">
        <div className="episode-item">
          <h5>Title</h5>
          <h5>Date</h5>
          <h5>Duration</h5>
        </div>
        {episodes.map((episode) => {
          return (
            <div className="episode-item" key={episode.trackId}>
              <Link
                to={`/podcast/${podcastDetail?.id.attributes["im:id"]}/episode/${episode.trackId}`}
              >
                <span>{episode.trackName}</span>
              </Link>
              <span>{new Date(episode.releaseDate).toLocaleDateString()}</span>
              <span>{millisecondsToMinutes(episode.trackTimeMillis)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
