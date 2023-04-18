import { getLastElement } from "@/common/utils/collections";
import type { Podcast } from "@/core/podcast/domain/models/podcast_model";
import Loading from "@/components/loading/loading";
import styles from "./podcast_detail_card.module.css";
import { Link } from "react-router-dom";

interface Props {
  podcastDetail: Podcast;
}

export default function PodcastDetailCard({ podcastDetail }: Props) {
  if (!podcastDetail) return <Loading />;
  const podcastDeailUrl = `/podcast/${podcastDetail.id.attributes["im:id"]}`;

  return (
    <div className={styles["podcast-detail-card"]}>
      <Link to={podcastDeailUrl} className={styles["podcast-detail-card__link"]}>
        <img className={styles["podcast-detail-card__image"]} src={getLastElement(podcastDetail["im:image"])?.label} alt="podcast_image" />
      </Link>
      <hr />
      <Link to={podcastDeailUrl} className={styles["podcast-detail-card__link"]}>
        <h3>{podcastDetail?.["im:name"].label}</h3>
        <span>{podcastDetail?.["im:artist"].label}</span>
      </Link>
      <hr />
      <h3>Description:</h3>
      <p>{podcastDetail?.summary.label}</p>
    </div>
  );
}
