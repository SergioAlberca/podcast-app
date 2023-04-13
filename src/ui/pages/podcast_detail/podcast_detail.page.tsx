import { useParams } from "react-router";
import { useAppSelector } from "../../store/hooks";
import { selectedPodcast } from "../podcast_list/state/podcast_list.slice";
import usePodcastDetailController from "./controller/podcast_detail.controller";
import { episodies } from "./state/podcast_detail.slice";
import { Link } from "react-router-dom";

export default function PodcastDetail() {
  const { podcastId } = useParams();
  if (!podcastId) return null;
  const podcastDetail = useAppSelector((state) =>
    selectedPodcast(podcastId, state)
  );
  usePodcastDetailController(podcastId);
  const podcastEpisodies = useAppSelector(episodies);

  return (
    <div>
      <span>{podcastDetail?.["im:name"].label}</span>
      <span>{podcastDetail?.["im:artist"].label}</span>
      <span>{podcastDetail?.summary.label}</span>
      <button>
        <Link
          to={`/podcast/${podcastDetail?.id.attributes["im:id"]}/episode/1535809341`}
        >
          Ir al episodio
        </Link>
      </button>
    </div>
  );
}
