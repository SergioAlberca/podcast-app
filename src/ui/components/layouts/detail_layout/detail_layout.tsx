import { ReactNode } from "react";
import PodcastDetailCard from "../../podcast_detail_card/podcast_detail_card";
import { useAppSelector } from "../../../store/hooks";
import { selectedPodcast } from "../../../pages/podcast_list/state/podcast_list.slice";
import styles from "./detail_layout.module.css";

interface Props {
  children: ReactNode;
  podcastId: string;
}

export default function DetailLayout({ children, podcastId }: Props) {
  const podcastDetail = useAppSelector((state) =>
    selectedPodcast(podcastId, state)
  );

  return (
    <div className={styles["podcast-detail-container"]}>
      {podcastDetail && <PodcastDetailCard podcastDetail={podcastDetail} />}
      {children}
    </div>
  );
}
