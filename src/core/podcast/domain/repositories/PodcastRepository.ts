import { Podcast } from "../models/podcast_model";

export interface PodcastRepository {
  getPodcasts(): Promise<Podcast[]>;
}
