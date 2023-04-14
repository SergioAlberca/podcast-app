import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import MainLayout from "@/components/layouts/main_layout/main_layout";
import { useRouterController } from "@/common/hooks/router_controller";

const PodcastsList = lazy(() => import("@/pages/podcast_list/podcast_list.page"));
const PodcastDetail = lazy(() => import("@/pages/podcast_detail/podcast_detail.page"));
const EpisodieDetail = lazy(() => import("@/pages/episodie_detail/episodie_detail.page"));

const SwitchRoutes = () => {
  const { isLoading } = useRouterController();
  return (
    <Suspense fallback={<MainLayout isLoadingRoute={true} />}>
      <MainLayout isLoadingRoute={isLoading}>
        <Routes>
          <Route path="/" element={<PodcastsList />} />
          <Route path="/podcast/:podcastId" element={<PodcastDetail />} />
          <Route path="/podcast/:podcastId/episode/:episodeId" element={<EpisodieDetail />} />
          <Route path="*" element={<PodcastsList />} />
        </Routes>
      </MainLayout>
    </Suspense>
  );
};

export default SwitchRoutes;
