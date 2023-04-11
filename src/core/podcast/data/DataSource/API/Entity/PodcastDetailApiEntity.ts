import { PodcastDetail } from "../../../../domain/models/podcastDetail_model";

export interface PodcastDetailAPIEntity {
  resultCount: number;
  results: PodcastDetail[];
}
