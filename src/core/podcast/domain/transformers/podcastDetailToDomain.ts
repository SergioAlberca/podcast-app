import { PodcastDetailAPIEntity } from "../../data/DataSource/API/Entity/PodcastDetailApiEntity";

export const podcastDetailToDomain = (
  apiResponse: Record<string, string>
): PodcastDetailAPIEntity => {
  const formatedData = JSON.parse(apiResponse.contents);
  const { resultCount, results } = formatedData;
  return { resultCount, results };
};
