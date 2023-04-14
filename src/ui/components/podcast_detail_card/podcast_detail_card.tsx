import { getLastElement } from "@/common/utils/collections";
import type { Podcast } from "@/core/podcast/domain/models/podcast_model";
import Loading from "@/components/loading/loading";
import styles from "./podcast_detail_card.module.css";

interface Props {
  podcastDetail: Podcast;
}

export default function PodcastDetailCard({ podcastDetail }: Props) {
  if (!podcastDetail) return <Loading />;
  return (
    <div className={styles["podcast-detail-card"]}>
      <img src={getLastElement(podcastDetail["im:image"])?.label} alt="" />
      <h4>{podcastDetail?.["im:name"].label}</h4>
      <h5>{podcastDetail?.["im:artist"].label}</h5>
      <p>{podcastDetail?.summary.label}</p>
    </div>
  );
}
