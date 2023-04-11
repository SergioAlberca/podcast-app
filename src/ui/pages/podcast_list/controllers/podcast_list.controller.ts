import { useEffect, useState } from "react";
import { Podcast } from "../../../../core/podcast/domain/models/podcast_model";
import { GetPodcasts } from "../../../../core/podcast/domain/use_cases/get_podcasts_use_case";
import PodcastAPIDataSourceImpl from "../../../../core/podcast/data/DataSource/API/PodcastApiDataSource";
import { PodcastRepositoryImpl } from "../../../../core/podcast/data/repositories/podcats_repository";
import {
  getLocalStorageElementWithExpiry,
  setLocalStorageElementWithExpiry,
} from "../../../../common/utils/localStorage";

export default function usePodcastListModelController() {
  const [podcasts, setPodscats] = useState<Podcast[]>(
    getLocalStorageElementWithExpiry("podcasts")
  );

  const UseCase = new GetPodcasts(
    new PodcastRepositoryImpl(new PodcastAPIDataSourceImpl())
  );

  async function getPodcasts() {
    if (podcasts.length === 0) {
      const results = await UseCase.invoke();
      setPodscats(results);
      setLocalStorageElementWithExpiry("podcasts", results);
    }
  }

  useEffect(() => {
    getPodcasts();
  }, []);

  return {
    getPodcasts,
    podcasts,
  };
}
