import { PodcastRepository } from "../repositories/PodcastRepository";
import { Podcast } from "../models/podcast_model";

export interface GetPodcastDetailUseCase {
  invoke: (id: string) => Promise<any>;
}

export class GetPodcastDetail implements GetPodcastDetailUseCase {
  private repository: PodcastRepository;
  constructor(_podcastRepo: PodcastRepository) {
    this.repository = _podcastRepo;
  }

  async invoke(id: string) {
    return this.repository.getPodcastDetail(id);
  }
}
