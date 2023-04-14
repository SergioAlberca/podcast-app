import type { Episode } from "../models/episode_model";
import type { PodcastRepository } from "../repositories/PodcastRepository";

export interface GetPodcastDetailUseCase {
  invoke: (id: string) => Promise<Episode[]>;
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
