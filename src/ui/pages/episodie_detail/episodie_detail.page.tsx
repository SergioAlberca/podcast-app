import { useParams } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";
import { selectedEpisodie } from "../podcast_detail/state/podcast_detail.slice";
import DetailLayout from "@/components/layouts/detail_layout/detail_layout";
import styles from "./episode_detail.module.css";

export default function EpisodieDetail() {
  const { podcastId, episodeId } = useParams();
  const episode = useAppSelector((state) =>
    selectedEpisodie(episodeId || "", state)
  );
  if (!podcastId || !episodeId || !episode) return <p>Loading...</p>;
  return (
    <DetailLayout podcastId={podcastId}>
      <div className={styles["episode-detail"]}>
        <h4>{episode.trackName}</h4>
        <p dangerouslySetInnerHTML={{ __html: episode.description }} />
        <audio controls>
          <source src={episode.episodeUrl} type="audio/mp3" />
        </audio>
      </div>
    </DetailLayout>
  );
}
