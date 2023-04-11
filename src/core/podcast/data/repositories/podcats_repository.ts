import { PodcastDetail } from "../../domain/models/podcastDetail_model";
import { Podcast } from "../../domain/models/podcast_model";
import { PodcastRepository } from "../../domain/repositories/PodcastRepository";
import { PodcastDetailAPIEntity } from "../DataSource/API/Entity/PodcastDetailApiEntity";
import PodcastDataSource from "../DataSource/podcastDataSource";

export class PodcastRepositoryImpl implements PodcastRepository {
  dataSource: PodcastDataSource;

  constructor(_datasource: PodcastDataSource) {
    this.dataSource = _datasource;
  }

  async getPodcasts(): Promise<Podcast[]> {
    return this.dataSource.getPodcasts();
  }

  async getPodcastDetail(id: string): Promise<PodcastDetail[]> {
    return this.dataSource.getPodcastDetail(id);
  }
}
