import type { PodcastRepository } from "../repositories/PodcastRepository";
import type { Podcast } from "../models/podcast_model";

export interface GetPodcastsUseCase {
  invoke: () => Promise<Podcast[]>;
}

export class GetPodcasts implements GetPodcastsUseCase {
  private repository: PodcastRepository;
  constructor(_podcastRepo: PodcastRepository) {
    this.repository = _podcastRepo;
  }

  async invoke() {
    return this.repository.getPodcasts();
  }
}
