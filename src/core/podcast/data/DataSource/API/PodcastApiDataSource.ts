import { Podcast } from "../../../domain/models/podcast_model";
import PodcastDataSource from "../podcastDataSource";
import { PodcastAPIEntity } from "./Entity/PodcastApiEntity";

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
}
