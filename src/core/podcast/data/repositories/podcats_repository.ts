import type { Episode } from "../../domain/models/episode_model";
import type { Podcast } from "../../domain/models/podcast_model";
import type { PodcastRepository } from "../../domain/repositories/PodcastRepository";
import type PodcastDataSource from "../DataSource/podcastDataSource";

export class PodcastRepositoryImpl implements PodcastRepository {
  dataSource: PodcastDataSource;

  constructor(_datasource: PodcastDataSource) {
    this.dataSource = _datasource;
  }

  async getPodcasts(): Promise<Podcast[]> {
    return this.dataSource.getPodcasts();
  }

  async getPodcastDetail(id: string): Promise<Episode[]> {
    return this.dataSource.getPodcastDetail(id);
  }
}
