import { useEffect } from "react";
import { useAppSelector } from "../../../store/hooks";
import {
  getPodcastListThunk,
  podcastList,
  setSelectedPodcast,
} from "../state/podcast_list.slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";

interface selectedPodcast {
  name: string;
  image: string;
  author: string;
  description: string;
}
export default function usePodcastListModelController() {
  const dispatch = useDispatch<AppDispatch>();
  const podcasts = useAppSelector(podcastList);

  async function getPodcasts() {
    if (podcasts.length === 0) {
      dispatch(getPodcastListThunk());
    }
  }

  const setPodcast = ({
    name,
    image,
    author,
    description,
  }: selectedPodcast) => {
    dispatch(setSelectedPodcast({ name, image, author, description }));
  };

  useEffect(() => {
    getPodcasts();
  }, []);

  return { setPodcast };
}
