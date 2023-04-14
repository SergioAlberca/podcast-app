import type { Episode } from "../../../../domain/models/episode_model";

export interface PodcastDetailAPIEntity {
  resultCount: number;
  results: Episode[];
}
