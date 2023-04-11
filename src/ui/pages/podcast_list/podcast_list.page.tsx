import { useEffect } from "react";
import usePodcastListModelController from "./controllers/podcast_list.controller";

export default function PodcastsList() {
  const { getPodcasts, podcasts } = usePodcastListModelController();

  return (
    <div>
      {podcasts.map((podcast, i) => {
        return (
          <div key={i}>
            <h4>{podcast["im:name"].label}</h4>
            <p>{podcast["im:artist"].label}</p>
          </div>
        );
      })}
    </div>
  );
}
