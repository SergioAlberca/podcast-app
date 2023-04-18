import { getFirstElement } from "@/common/utils/collections";
import type { Podcast } from "@/core/podcast/domain/models/podcast_model";
import styles from "./podcast_card.module.css";

interface Props {
  podcast: Podcast;
  goToDetail: (id: string) => void;
}

export default function PodcastCard({ podcast, goToDetail }: Props) {
  return (
    <div data-testid="podcast_card" className={styles.card} onClick={() => goToDetail(podcast.id.attributes["im:id"])} aria-hidden="true">
      <img className={styles["card__img"]} src={getFirstElement(podcast["im:image"])?.label} alt="podcast_image" />
      <h5>{podcast["im:name"].label}</h5>
      <span className={styles["card__text"]}>Author: {podcast["im:artist"].label}</span>
    </div>
  );
}
