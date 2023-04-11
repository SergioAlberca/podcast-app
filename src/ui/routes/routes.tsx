import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PodcastsList from "../pages/podcast_list/podcast_list.page";
import PodcastDetail from "../pages/podcast_detail/podcast_detail.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PodcastsList />,
  },
  {
    path: "/podcast/:podcastId",
    element: <PodcastDetail />,
  },
  {
    path: "/podcast/:podcastId/episode/:episodeId",
    element: <p>Detalle de un episodio</p>,
  },
]);
