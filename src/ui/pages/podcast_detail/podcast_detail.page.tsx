import { useParams } from "react-router";
import { useAppSelector } from "../../store/hooks";
import { selectedPodcast } from "../podcast_list/state/podcast_list.slice";
import usePodcastDetailController from "./controller/podcast_detail.controller";
import {
  episodies,
  podcastDetailIsLoading,
} from "./state/podcast_detail.slice";
import { Link } from "react-router-dom";
import MainLayout from "../../components/layouts/main_layout/main_layout";
import { millisecondsToMinutes } from "../../../common/utils/time";
import DetailLayout from "../../components/layouts/detail_layout/detail_layout";
import "./podcast_detail.css";
import Loading from "../../components/loading/loading";
import EpisodeList from "./components/episode_list/episode_list";

export default function PodcastDetail() {
  const { podcastId } = useParams();
  if (!podcastId) return null;

  const { podcastDetail, epispodesLoading, podcastEpisodies } =
    usePodcastDetailController(podcastId);

  return (
    <MainLayout>
      <DetailLayout podcastId={podcastId}>
        {!epispodesLoading && podcastDetail ? (
          <EpisodeList
            episodes={podcastEpisodies}
            podcastDetail={podcastDetail}
          />
        ) : (
          <Loading />
        )}
      </DetailLayout>
    </MainLayout>
  );
}
