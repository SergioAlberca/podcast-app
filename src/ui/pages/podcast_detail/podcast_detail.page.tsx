import DetailLayout from "@/components/layouts/detail_layout/detail_layout";
import Loading from "@/components/loading/loading";
import usePodcastDetailController from "./controller/podcast_detail.controller";
import EpisodeList from "./components/episode_list/episode_list";

export default function PodcastDetail() {
  const { podcastId, podcastDetail, epispodesLoading, podcastEpisodies } = usePodcastDetailController();
  return (
    <>
      <DetailLayout podcastId={podcastId}>
        {!epispodesLoading && podcastDetail ? <EpisodeList episodes={podcastEpisodies} podcastDetail={podcastDetail} /> : <Loading />}
      </DetailLayout>
    </>
  );
}
