export interface Episode {
  artistId: number;
  artistName: string;
  artistViewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  artworkUrl600: string;
  collectionCensoredName: string;
  collectionExplicitness: string;
  collectionHdPrice: number;
  collectionId: number;
  collectionName: string;
  collectionPrice: number;
  collectionViewUrl: string;
  country: string;
  currency: string;
  description: string;
  episodeUrl: string;
  feedUrl: string;
  genreIds: string[];
  genres: string[];
  kind: string;
  primaryGenreName: string;
  releaseDate: string;
  trackCensoredName: string;
  trackCount: number;
  trackExplicitness: string;
  trackId: number;
  trackName: string;
  trackPrice: number;
  trackTimeMillis: number;
  trackViewUrl: string;
  wrapperType: string;
}