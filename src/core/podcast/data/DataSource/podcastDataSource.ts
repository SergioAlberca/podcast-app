import { Episode } from "../../domain/models/episode_model";
import { Podcast } from "../../domain/models/podcast_model";
import { PodcastDetailAPIEntity } from "./API/Entity/PodcastDetailApiEntity";

export default interface PodcastDataSource {
  getPodcasts(): Promise<Podcast[]>;
  getPodcastDetail(id: string): Promise<Episode[]>;
}
