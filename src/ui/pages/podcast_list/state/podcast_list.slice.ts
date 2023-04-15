import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Podcast } from "@/core/podcast/domain/models/podcast_model";
import { getLocalStorageElementWithExpiry, setLocalStorageElementWithExpiry } from "@/common/utils/localStorage";
import { GetPodcasts } from "@/core/podcast/domain/use_cases/get_podcasts_use_case";
import { PodcastRepositoryImpl } from "@/core/podcast/data/repositories/podcats_repository";
import PodcastAPIDataSourceImpl from "@/core/podcast/data/DataSource/API/PodcastApiDataSource";
import type { RootState } from "@/store/store";

export interface PodcastListState {
  podcastList: Podcast[];
  isLoading: boolean;
  hasError: boolean;
  selectedPodcast: {
    name?: string;
    image?: string;
    author?: string;
    description?: string;
  };
}

export const initialState: PodcastListState = {
  podcastList: getLocalStorageElementWithExpiry("podcasts"),
  isLoading: false,
  hasError: false,
  selectedPodcast: {}
};

export const getPodcastListThunk = createAsyncThunk<Podcast[]>("getPodcastListThunk", async () => {
  const UseCase = new GetPodcasts(new PodcastRepositoryImpl(new PodcastAPIDataSourceImpl()));

  const results = await UseCase.invoke();
  setLocalStorageElementWithExpiry("podcasts", results);
  return results;
});

export const podcastListSlice = createSlice({
  name: "podcastList",
  initialState,
  reducers: {
    setSelectedPodcast: (state, action) => {
      state.selectedPodcast = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPodcastListThunk.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
    });
    builder.addCase(getPodcastListThunk.fulfilled, (state, { payload }) => {
      state.podcastList = payload;
      state.isLoading = false;
      state.hasError = false;
    });
    builder.addCase(getPodcastListThunk.rejected, (state) => {
      state.podcastList = [];
      state.isLoading = false;
      state.hasError = true;
    });
  }
});

export const { setSelectedPodcast } = podcastListSlice.actions;
export const podcastList = (state: RootState) => state.podcastList.podcastList;
export const podcastListIsLoading = (state: RootState) => state.podcastList.isLoading;
export const podcastListHasError = (state: RootState) => state.podcastList.hasError;
export const selectedPodcast = (id: string, state: RootState) =>
  state.podcastList.podcastList.find((podcast) => podcast.id.attributes["im:id"] === id);

export default podcastListSlice.reducer;
