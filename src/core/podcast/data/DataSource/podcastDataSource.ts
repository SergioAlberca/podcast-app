import type { Episode } from "../../domain/models/episode_model";
import type { Podcast } from "../../domain/models/podcast_model";

export default interface PodcastDataSource {
  getPodcasts(): Promise<Podcast[]>;
  getPodcastDetail(id: string): Promise<Episode[]>;
}
