import usePodcastListModelController from "./controllers/podcast_list.controller";
import { useAppSelector } from "../../store/hooks";
import { podcastList, podcastListIsLoading } from "./state/podcast_list.slice";
import MainLayout from "../../components/layouts/main_layout/main_layout";
import PodcastCard from "./components/podcast_card/podcast_card";
import "./podcast_list.css";
import Loading from "../../components/loading/loading";
import Filter from "./components/filter/filter";

export default function PodcastsList() {
  const {
    filteredPodcasts,
    podcastListLoading,
    goToDetail,
    filterPayload,
    setFilterPayload,
  } = usePodcastListModelController();

  if (podcastListLoading) return <Loading />;

  return (
    <MainLayout>
      <Filter payload={filterPayload} setPayload={setFilterPayload} />
      <div className="container">
        {filteredPodcasts.map((podcast) => {
          return (
            <PodcastCard
              key={podcast.id.attributes["im:id"]}
              podcast={podcast}
              goToDetail={goToDetail}
            />
          );
        })}
      </div>
    </MainLayout>
  );
}
