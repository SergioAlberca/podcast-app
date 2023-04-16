import { RestClient } from "@/common/network/rest_client";
import type { Episode } from "../../../domain/models/episode_model";
import type { Podcast } from "../../../domain/models/podcast_model";
import { podcastDetailToDomain } from "../../../domain/transformers/podcastDetailToDomain";
import type PodcastDataSource from "../podcastDataSource";
import type { PodcastAPIEntity } from "./Entity/PodcastApiEntity";

export default class PodcastAPIDataSourceImpl implements PodcastDataSource {
  async getPodcasts(): Promise<Podcast[]> {
    const response = await RestClient<PodcastAPIEntity>(`${import.meta.env.VITE_BASE_URL}/us/rss/toppodcasts/limit=100/genre=1310/json`);
    const data = await response.json();
    return data.feed.entry.map((item) => ({
      ...item
    }));
  }

  async getPodcastDetail(id: string): Promise<Episode[]> {
    const response = await RestClient<Record<string, string>>(
      `${import.meta.env.VITE_CORS_URL}/get?url=${encodeURIComponent(
        `${import.meta.env.VITE_BASE_URL}/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`
      )}`
    );
    const data = await response.json();
    return podcastDetailToDomain(data).results;
  }
}
