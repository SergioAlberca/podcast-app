import { Podcast } from "../../../../../core/podcast/domain/models/podcast_model";
import "./podcast_card.css";

interface Props {
  podcast: Podcast;
  goToDetail: (id: string) => void;
}

export default function PodcastCard({ podcast, goToDetail }: Props) {
  return (
    <div
      className="card"
      onClick={() => goToDetail(podcast.id.attributes["im:id"])}
    >
      <img
        className="card-image"
        src={podcast["im:image"][0].label}
        alt={podcast["im:image"][0].label}
      />
      <h5>{podcast["im:name"].label}</h5>
      <span>Author: {podcast["im:artist"].label}</span>
    </div>
  );
}
