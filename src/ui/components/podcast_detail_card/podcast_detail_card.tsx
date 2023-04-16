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
      <Link to={podcastDeailUrl}>
        <img src={getLastElement(podcastDetail["im:image"])?.label} alt="podcast_image" />
      </Link>
      <hr />
      <Link to={podcastDeailUrl}>
        <h4>{podcastDetail?.["im:name"].label}</h4>
        <h6>{podcastDetail?.["im:artist"].label}</h6>
      </Link>
      <hr />
      <p>
        <strong>Description:</strong> {podcastDetail?.summary.label}
      </p>
    </div>
  );
}
