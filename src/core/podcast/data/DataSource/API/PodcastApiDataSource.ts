import { Episode } from "../../../domain/models/episode_model";
import { Podcast } from "../../../domain/models/podcast_model";
import { podcastDetailToDomain } from "../../../domain/transformers/podcastDetailToDomain";
import PodcastDataSource from "../podcastDataSource";
import { PodcastAPIEntity } from "./Entity/PodcastApiEntity";

interface TypedResponse<T = any> extends Response {
  json<P = T>(): Promise<P>;
}

function myFetch<T>(...args: any): Promise<TypedResponse<T>> {
  return fetch.apply(window, args);
}

export default class PodcastAPIDataSourceImpl implements PodcastDataSource {
  async getPodcasts(): Promise<Podcast[]> {
    const response = await myFetch<PodcastAPIEntity>(
      `${
        import.meta.env.VITE_BASE_URL
      }/us/rss/toppodcasts/limit=100/genre=1310/json`
    );
    const data = await response.json();
    return data.feed.entry.map((item) => ({
      ...item,
    }));
  }

  async getPodcastDetail(id: string): Promise<Episode[]> {
    const response = await myFetch<Record<string, string>>(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`
      )}`
    );
    const data = await response.json();
    return podcastDetailToDomain(data).results;
  }
}
