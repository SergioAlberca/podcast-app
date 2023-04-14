import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import {
  episodies,
  getPodcastDetailThunk,
  podcastDetailIsLoading,
} from "../state/podcast_detail.slice";
import { useAppSelector } from "@/store/hooks";
import { selectedPodcast } from "../../podcast_list/state/podcast_list.slice";

export default function usePodcastDetailController(podcastId: string) {
  const dispatch = useDispatch<AppDispatch>();
  const podcastDetail = useAppSelector((state) =>
    selectedPodcast(podcastId, state)
  );
  const podcastEpisodies = useAppSelector(episodies);
  const epispodesLoading = useAppSelector(podcastDetailIsLoading);

  async function getPodcastDetail() {
    if (
      podcastEpisodies.length === 0 ||
      !podcastEpisodies.find(
        (episode) => episode.collectionId.toString() === podcastId
      )
    ) {
      dispatch(getPodcastDetailThunk(podcastId));
    }
  }

  useEffect(() => {
    getPodcastDetail();
  }, []);

  return { podcastEpisodies, podcastDetail, epispodesLoading };
}
