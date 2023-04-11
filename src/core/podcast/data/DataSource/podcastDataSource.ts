import { PodcastDetail } from "../../domain/models/podcastDetail_model";
import { Podcast } from "../../domain/models/podcast_model";
import { PodcastDetailAPIEntity } from "./API/Entity/PodcastDetailApiEntity";

export default interface PodcastDataSource {
  getPodcasts(): Promise<Podcast[]>;
  getPodcastDetail(id: string): Promise<PodcastDetail[]>;
}
