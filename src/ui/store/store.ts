import type { PreloadedState } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import podcastListReducer from "../pages/podcast_list/state/podcast_list.slice";
import podcastDetailSlice from "../pages/podcast_detail/state/podcast_detail.slice";
import { useDispatch } from "react-redux";

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: {
      podcastList: podcastListReducer,
      podcastDetail: podcastDetailSlice
    },
    preloadedState
  });
}

export const store = configureStore({
  reducer: {
    podcastList: podcastListReducer,
    podcastDetail: podcastDetailSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
