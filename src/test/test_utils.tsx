import { configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import type { AppStore, RootState } from "@/store/store";
import type { RenderOptions } from "@testing-library/react";
import { render } from "@testing-library/react";
import podcastListReducer from "@/pages/podcast_list/state/podcast_list.slice";
import podcastDetailSlice from "@/pages/podcast_detail/state/podcast_detail.slice";
import type { PropsWithChildren } from "react";
import { Provider } from "react-redux";

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options
  });

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {
      podcastDetail: { episodies: [], isLoading: false, hasError: false },
      podcastList: { podcastList: [], isLoading: false, hasError: false, selectedPodcast: {} }
    },
    // Automatically create a store instance if no store was passed in
    store = configureStore({ reducer: { podcastList: podcastListReducer, podcastDetail: podcastDetailSlice }, preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { customRender as render };
