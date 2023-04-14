import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";
import MainLayout from "@/components/layouts/main_layout/main_layout";
import Loading from "@/components/loading/loading";

const PodcastsList = lazy(
  () => import("@/pages/podcast_list/podcast_list.page")
);
const PodcastDetail = lazy(
  () => import("@/pages/podcast_detail/podcast_detail.page")
);
const EpisodieDetail = lazy(
  () => import("@/pages/episodie_detail/episodie_detail.page")
);

const SwitchRoutes = () => {
  const [progress, setProgress] = useState(false);
  const [prevLoc, setPrevLoc] = useState("");
  const location = useLocation();

  useEffect(() => {
    setPrevLoc(location.pathname);
    setProgress(true);
    if (location.pathname === prevLoc) {
      setPrevLoc("");
      //thanks to ankit sahu
    }
  }, [location]);

  useEffect(() => {
    setProgress(false);
  }, [prevLoc]);

  useEffect(() => {
    console.log("estado", progress);
  }, [progress]);

  return (
    <Suspense fallback={<Loading />}>
      <MainLayout isLoadingRoute={progress}>
        <Routes>
          <Route path="/" element={<PodcastsList />} />
          <Route path="/podcast/:podcastId" element={<PodcastDetail />} />
          <Route
            path="/podcast/:podcastId/episode/:episodeId"
            element={<EpisodieDetail />}
          />
          <Route path="*" element={<PodcastsList />} />
        </Routes>
      </MainLayout>
    </Suspense>
  );
};

export default SwitchRoutes;
