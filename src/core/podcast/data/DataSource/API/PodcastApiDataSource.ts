import { PodcastDetail } from "../../../domain/models/podcastDetail_model";
import { Podcast } from "../../../domain/models/podcast_model";
import { podcastDetailToDomain } from "../../../domain/transformers/podcastDetailToDomain";
import PodcastDataSource from "../podcastDataSource";
import { PodcastAPIEntity } from "./Entity/PodcastApiEntity";
import { PodcastDetailAPIEntity } from "./Entity/PodcastDetailApiEntity";

const BASE_URL =
  "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

interface TypedResponse<T = any> extends Response {
  json<P = T>(): Promise<P>;
}

function myFetch<T>(...args: any): Promise<TypedResponse<T>> {
  return fetch.apply(window, args);
}

export default class PodcastAPIDataSourceImpl implements PodcastDataSource {
  async getPodcasts(): Promise<Podcast[]> {
    const response = await myFetch<PodcastAPIEntity>(`${BASE_URL}`);
    const data = await response.json();
    return data.feed.entry.map((item) => ({
      ...item,
    }));
  }

  async getPodcastDetail(id: string): Promise<PodcastDetail[]> {
    const response = await myFetch<Record<string, string>>(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`
      )}`
    );
    const data = await response.json();
    return podcastDetailToDomain(data).results;
  }
}
