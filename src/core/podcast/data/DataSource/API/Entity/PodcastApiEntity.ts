import { Podcast } from "../../../../domain/models/podcast_model";

export interface PodcastAPIEntity {
  feed: {
    entry: Podcast[];
  };
}
