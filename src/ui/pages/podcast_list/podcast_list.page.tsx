import { Link } from "react-router-dom";
import usePodcastListModelController from "./controllers/podcast_list.controller";
import { useAppSelector } from "../../store/hooks";
import { podcastList } from "./state/podcast_list.slice";

export default function PodcastsList() {
  const podcasts = useAppSelector(podcastList);
  const { setPodcast } = usePodcastListModelController();

  return (
    <div>
      {podcasts.map((podcast, i) => {
        return (
          <div key={i}>
            <h4>{podcast["im:name"].label}</h4>
            <p>{podcast["im:artist"].label}</p>
            <button>
              <Link
                to={`podcast/${podcast.id.attributes["im:id"]}`}
                onClick={() =>
                  setPodcast({
                    name: podcast["im:name"].label,
                    image: podcast["im:image"][0].label,
                    author: podcast["im:artist"].label,
                    description: podcast.summary.label,
                  })
                }
              >
                Ir a detalle
              </Link>
            </button>
          </div>
        );
      })}
    </div>
  );
}
