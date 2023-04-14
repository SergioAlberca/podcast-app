import { getFirstElement } from "@/common/utils/collections";
import { Podcast } from "@/core/podcast/domain/models/podcast_model";
import styles from "./podcast_card.module.css";

interface Props {
  podcast: Podcast;
  goToDetail: (id: string) => void;
}

export default function PodcastCard({ podcast, goToDetail }: Props) {
  return (
    <div
      className={styles.card}
      onClick={() => goToDetail(podcast.id.attributes["im:id"])}
    >
      <img
        className={styles["card-image"]}
        src={getFirstElement(podcast["im:image"])?.label}
      />
      <h5>{podcast["im:name"].label}</h5>
      <span>Author: {podcast["im:artist"].label}</span>
    </div>
  );
}
