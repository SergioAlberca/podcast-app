import { useParams } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";
import { selectedEpisodie } from "../podcast_detail/state/podcast_detail.slice";
import DetailLayout from "@/components/layouts/detail_layout/detail_layout";
import styles from "./episode_detail.module.css";

export default function EpisodieDetail() {
  const { podcastId, episodeId } = useParams() as { podcastId: string; episodeId: string };
  const episode = useAppSelector((state) => selectedEpisodie(episodeId, state));

  if (!episode) return <p>Loading...</p>;

  return (
    <DetailLayout podcastId={podcastId}>
      <div>
        <div className={styles["episode"]}>
          <h4>{episode.trackName}</h4>
          <p dangerouslySetInnerHTML={{ __html: episode.description }} />
          <hr className={styles["episode__divider"]} />
          <audio controls className={styles["episode__audio"]}>
            <source src={episode.episodeUrl} type="audio/mp3" />
            <track src={episode.episodeUrl} kind="captions"></track>
          </audio>
        </div>
      </div>
    </DetailLayout>
  );
}
