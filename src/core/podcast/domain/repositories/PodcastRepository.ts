import { PodcastDetailAPIEntity } from "../../data/DataSource/API/Entity/PodcastDetailApiEntity";
import { Episode } from "../models/episode_model";
import { Podcast } from "../models/podcast_model";

export interface PodcastRepository {
  getPodcasts(): Promise<Podcast[]>;
  getPodcastDetail(id: string): Promise<Episode[]>;
}
