import podcastListReducer, { getPodcastListThunk, setSelectedPodcast } from "../podcast_list.slice";
import type { PodcastListState } from "../podcast_list.slice";

const podcastListInitialState: PodcastListState = {
  podcastList: [],
  isLoading: false,
  hasError: false,
  selectedPodcast: {}
};

describe("podcast list reducer sync actions", () => {
  it("should handle initial state", () => {
    expect(podcastListReducer(undefined, { type: "unknown" })).toEqual({
      podcastList: [],
      isLoading: false,
      hasError: false,
      selectedPodcast: {}
    });
  });

  it("should handle setSelectedPodcast", () => {
    const payload = {
      name: "Example",
      image: "image-url",
      author: "Fake Author",
      description: "Fake description"
    };
    const actual = podcastListReducer(podcastListInitialState, setSelectedPodcast(payload));
    expect(actual.selectedPodcast).toEqual(payload);
  });
});

describe("podcast list reducer async actions", () => {
  const initialState: PodcastListState = {
    podcastList: [],
    isLoading: false,
    hasError: false,
    selectedPodcast: {}
  };

  it('should set isLoading to "pending"', async () => {
    const action = { type: getPodcastListThunk.pending.type };
    const state = podcastListReducer(podcastListInitialState, action);
    expect(state).toEqual({
      ...podcastListInitialState,
      isLoading: true
    });
  });

  it("should set podcaslit to array with element", async () => {
    const podcast = { title: 2 };
    const action = { type: getPodcastListThunk.fulfilled.type, payload: podcast };
    const state = podcastListReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      podcastList: action.payload
    });
  });

  it("should set hasError to true", async () => {
    const action = {
      type: getPodcastListThunk.rejected.type
    };
    const state = podcastListReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      hasError: true
    });
  });
});
