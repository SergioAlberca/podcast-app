import { useEffect, useState } from "react";
import PodcastAPIDataSourceImpl from "../../../../core/podcast/data/DataSource/API/PodcastApiDataSource";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import {
  episodies,
  getPodcastDetailThunk,
} from "../state/podcast_detail.slice";
import { useAppSelector } from "../../../store/hooks";

export default function usePodcastDetailController(podcastId: string) {
  const dispatch = useDispatch<AppDispatch>();
  const podcastEpisodies = useAppSelector(episodies);

  async function getPodcastDetail() {
    if (podcastEpisodies.length === 0) {
      dispatch(getPodcastDetailThunk(podcastId));
    }
  }

  useEffect(() => {
    getPodcastDetail();
  }, []);

  return {};
}
