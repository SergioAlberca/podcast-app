import { useEffect } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store/store";
import { episodies, getPodcastDetailThunk, podcastDetailIsLoading } from "../state/podcast_detail.slice";
import { useAppSelector } from "@/store/hooks";
import { selectedPodcast } from "../../podcast_list/state/podcast_list.slice";
import { useParams } from "react-router-dom";

export default function usePodcastDetailController() {
  const { podcastId } = useParams() as { podcastId: string };
  const dispatch = useDispatch<AppDispatch>();
  const podcastDetail = useAppSelector((state) => selectedPodcast(podcastId, state));
  const podcastEpisodies = useAppSelector(episodies);
  const epispodesLoading = useAppSelector(podcastDetailIsLoading);

  async function getPodcastDetail() {
    if (podcastEpisodies.length === 0 || !podcastEpisodies.find((episode) => episode.collectionId.toString() === podcastId)) {
      dispatch(getPodcastDetailThunk(podcastId));
    }
  }

  useEffect(() => {
    getPodcastDetail();
  }, []);

  return { podcastId, podcastEpisodies, podcastDetail, epispodesLoading };
}
