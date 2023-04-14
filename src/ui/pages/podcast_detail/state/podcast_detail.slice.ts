import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getLocalStorageElementWithExpiry, setLocalStorageElementWithExpiry } from "@/common/utils/localStorage";
import { PodcastRepositoryImpl } from "@/core/podcast/data/repositories/podcats_repository";
import PodcastAPIDataSourceImpl from "@/core/podcast/data/DataSource/API/PodcastApiDataSource";
import type { RootState } from "@/store/store";
import type { Episode } from "@/core/podcast/domain/models/episode_model";
import { GetPodcastDetail } from "@/core/podcast/domain/use_cases/get_podcast_detail_use_case";

export interface PodcastDetailState {
  episodies: Episode[];
  isLoading: boolean;
  hasError: boolean;
}

const initialState: PodcastDetailState = {
  episodies: getLocalStorageElementWithExpiry("podcasts_detail"),
  isLoading: false,
  hasError: false
};

export const getPodcastDetailThunk = createAsyncThunk<Episode[], string>("getPodcastDetailThunk", async (id) => {
  const UseCase = new GetPodcastDetail(new PodcastRepositoryImpl(new PodcastAPIDataSourceImpl()));

  const results = await UseCase.invoke(id);
  setLocalStorageElementWithExpiry("podcasts_detail", results);
  return results;
});

export const podcastDetailSlice = createSlice({
  name: "podcastDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPodcastDetailThunk.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
    });
    builder.addCase(getPodcastDetailThunk.fulfilled, (state, { payload }) => {
      state.episodies = payload;
      state.isLoading = false;
      state.hasError = false;
    });
    builder.addCase(getPodcastDetailThunk.rejected, (state) => {
      state.episodies = [];
      state.isLoading = false;
      state.hasError = true;
    });
  }
});

export const episodies = (state: RootState) => state.podcastDetail.episodies;
export const podcastDetailIsLoading = (state: RootState) => state.podcastDetail.isLoading;
export const podcastDetailtHasError = (state: RootState) => state.podcastDetail.hasError;
export const selectedEpisodie = (id: string, state: RootState) =>
  state.podcastDetail.episodies.find((episodie) => episodie.trackId.toString() === id);

export default podcastDetailSlice.reducer;
