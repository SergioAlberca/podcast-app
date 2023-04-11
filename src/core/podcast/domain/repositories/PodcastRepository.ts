import { PodcastDetailAPIEntity } from "../../data/DataSource/API/Entity/PodcastDetailApiEntity";
import { PodcastDetail } from "../models/podcastDetail_model";
import { Podcast } from "../models/podcast_model";

export interface PodcastRepository {
  getPodcasts(): Promise<Podcast[]>;
  getPodcastDetail(id: string): Promise<PodcastDetail[]>;
}
