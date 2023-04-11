import { useEffect, useState } from "react";
import PodcastAPIDataSourceImpl from "../../../../core/podcast/data/DataSource/API/PodcastApiDataSource";
import { PodcastRepositoryImpl } from "../../../../core/podcast/data/repositories/podcats_repository";
import {
  getLocalStorageElementWithExpiry,
  setLocalStorageElementWithExpiry,
} from "../../../../common/utils/localStorage";
import { GetPodcastDetail } from "../../../../core/podcast/domain/use_cases/get_podcast_detail_use_case";
import { PodcastDetail } from "../../../../core/podcast/domain/models/podcastDetail_model";

export default function usePodcastDetailController() {
  const [podcastDetail, setPodscatDetail] = useState<PodcastDetail[]>(
    getLocalStorageElementWithExpiry("podcast_detail")
  );

  const UseCase = new GetPodcastDetail(
    new PodcastRepositoryImpl(new PodcastAPIDataSourceImpl())
  );

  async function getPodcastDetail() {
    if (podcastDetail.length === 0) {
      const results = await UseCase.invoke("934552872");
      setPodscatDetail(results);
      setLocalStorageElementWithExpiry("podcast_detail", results);
    }
  }

  useEffect(() => {
    getPodcastDetail();
  }, []);

  return {
    podcastDetail,
  };
}
