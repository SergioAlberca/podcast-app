import type { Episode } from "../models/episode_model";
import type { Podcast } from "../models/podcast_model";

export interface PodcastRepository {
  getPodcasts(): Promise<Podcast[]>;
  getPodcastDetail(id: string): Promise<Episode[]>;
}
