import { useEffect } from "react";
import { useAppSelector } from "../../../store/hooks";
import { getPodcastListThunk, podcastList } from "../state/podcast_list.slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { useNavigate } from "react-router-dom";

export default function usePodcastListModelController() {
  const dispatch = useDispatch<AppDispatch>();
  const podcasts = useAppSelector(podcastList);
  const navigate = useNavigate();

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

  return { goToDetail };
}
