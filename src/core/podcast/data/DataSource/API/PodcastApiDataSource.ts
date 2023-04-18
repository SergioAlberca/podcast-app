import { RestClient } from "@/common/network/rest_client";
import type { Episode } from "../../../domain/models/episode_model";
import type { Podcast } from "../../../domain/models/podcast_model";
import { podcastDetailToDomain } from "../../../domain/transformers/podcastDetailToDomain";
import type PodcastDataSource from "../podcastDataSource";
import type { PodcastAPIEntity } from "./Entity/PodcastApiEntity";
import type { AxiosInstance } from "axios";
import axios from "axios";

export default class PodcastAPIDataSourceImpl implements PodcastDataSource {
  private client: AxiosInstance;
  constructor() {
    this.client = axios.create({
      timeout: 5000
    });
  }

  async getPodcasts(): Promise<Podcast[]> {
    const service = new RestClient();
    const response = await service.get<PodcastAPIEntity>(`${import.meta.env.VITE_BASE_URL}/us/rss/toppodcasts/limit=100/genre=1310/json`);
    return response.data.feed.entry.map((item) => ({
      ...item
    }));
  }

  async getPodcastDetail(id: string): Promise<Episode[]> {
    const service = new RestClient();
    const response = await service.get<Record<string, string>>(
      `${import.meta.env.VITE_CORS_URL}/get?url=${encodeURIComponent(
        `${import.meta.env.VITE_BASE_URL}/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`
      )}`
    );
    const data = await response.data;
    return podcastDetailToDomain(data).results;
  }
}
