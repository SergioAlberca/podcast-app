import { RestClient } from "@/common/network/rest_client";
import type { Episode } from "../../../domain/models/episode_model";
import type { Podcast } from "../../../domain/models/podcast_model";
import type PodcastDataSource from "../podcastDataSource";
import type { PodcastAPIEntity } from "./Entity/PodcastApiEntity";
import type { PodcastDetailAPIEntity } from "./Entity/PodcastDetailApiEntity";

export default class PodcastAPIDataSourceImpl implements PodcastDataSource {
  async getPodcasts(): Promise<Podcast[]> {
    const service = new RestClient();
    const response = await service.get<PodcastAPIEntity>(`${import.meta.env.VITE_BASE_URL}/us/rss/toppodcasts/limit=100/genre=1310/json`);
    return response.data.feed.entry.map((item) => ({
      ...item
    }));
  }

  async getPodcastDetail(id: string): Promise<Episode[]> {
    const service = new RestClient();
    const response = await service.get<PodcastDetailAPIEntity>(
      `${import.meta.env.VITE_BASE_URL}/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`
    );
    return response.data.results;
  }
}
