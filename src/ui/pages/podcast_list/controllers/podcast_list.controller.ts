import { useEffect, useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import {
  getPodcastListThunk,
  podcastList,
  podcastListIsLoading,
} from "../state/podcast_list.slice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../store/store";
import { useNavigate } from "react-router-dom";

export default function usePodcastListModelController() {
  const dispatch = useDispatch<AppDispatch>();
  const podcasts = useAppSelector(podcastList);
  const navigate = useNavigate();
  const [filterPayload, setFilterPayload] = useState<string>("");
  const filteredPodcasts = useAppSelector(podcastList).filter(
    (podcast) =>
      podcast.title.label
        .toLocaleLowerCase()
        .includes(filterPayload.toLocaleLowerCase()) ||
      podcast["im:artist"].label
        .toLowerCase()
        .includes(filterPayload.toLocaleLowerCase())
  );
  const podcastListLoading = useAppSelector(podcastListIsLoading);

  const goToDetail = (podcastId: string) => {
    navigate(`podcast/${podcastId}`);
  };

  async function getPodcasts() {
    if (podcasts.length === 0) {
      dispatch(getPodcastListThunk());
    }
  }

  useEffect(() => {
    getPodcasts();
  }, []);

  return {
    filteredPodcasts,
    podcastListLoading,
    goToDetail,
    filterPayload,
    setFilterPayload,
  };
}
