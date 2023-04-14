import { getLastElement } from "@/common/utils/collections";
import { Podcast } from "@/core/podcast/domain/models/podcast_model";
import Loading from "@/components/loading/loading";
import "./podcast_detail_card.css";

interface Props {
  podcastDetail: Podcast;
}

export default function PodcastDetailCard({ podcastDetail }: Props) {
  if (!podcastDetail) return <Loading />;
  return (
    <div className="podcast-detail-card">
      <img src={getLastElement(podcastDetail["im:image"])?.label} alt="" />
      <h4>{podcastDetail?.["im:name"].label}</h4>
      <h5>{podcastDetail?.["im:artist"].label}</h5>
      <p>{podcastDetail?.summary.label}</p>
    </div>
  );
}
