import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "@/components/loading/loading";

const PodcastsList = lazy(() => import("@/pages/podcast_list/podcast_list.page"));
const PodcastDetail = lazy(() => import("@/pages/podcast_detail/podcast_detail.page"));
const EpisodieDetail = lazy(() => import("@/pages/episodie_detail/episodie_detail.page"));

const SwitchRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<PodcastsList />} />
        <Route path="/podcast/:podcastId" element={<PodcastDetail />} />
        <Route path="/podcast/:podcastId/episode/:episodeId" element={<EpisodieDetail />} />
        <Route path="*" element={<PodcastsList />} />
      </Routes>
    </Suspense>
  );
};

export default SwitchRoutes;
