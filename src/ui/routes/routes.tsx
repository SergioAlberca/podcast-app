import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PodcastsList from "../pages/podcast_list/podcast_list.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PodcastsList />,
  },
  {
    path: "/podcast/:podcastId",
    element: <p>Detalle de un podcast</p>,
  },
  {
    path: "/podcast/:podcastId/episode/:episodeId",
    element: <p>Detalle de un episodio</p>,
  },
]);
