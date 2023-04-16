import usePodcastListModelController from "./controllers/podcast_list.controller";
import PodcastCard from "./components/podcast_card/podcast_card";
import styles from "./podcast_list.module.css";
import Loading from "@/components/loading/loading";
import Filter from "./components/filter/filter";

export default function PodcastsList() {
  const { filteredPodcasts, podcastListLoading, goToDetail, filterPayload, setFilterPayload } = usePodcastListModelController();

  if (podcastListLoading) return <Loading />;

  return (
    <>
      <Filter payload={filterPayload} setPayload={setFilterPayload} podcastLength={filteredPodcasts.length} />
      <div className={styles.container}>
        {filteredPodcasts.map((podcast) => {
          return <PodcastCard key={podcast.id.attributes["im:id"]} podcast={podcast} goToDetail={goToDetail} />;
        })}
      </div>
    </>
  );
}
