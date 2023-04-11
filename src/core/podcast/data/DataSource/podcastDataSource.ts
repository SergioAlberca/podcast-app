import { Podcast } from "../../domain/models/podcast_model";

export default interface PodcastDataSource {
  getPodcasts(): Promise<Podcast[]>;
}
