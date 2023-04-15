import type { PodcastDetailState } from "../podcast_detail.slice";
import podcastDetailReducer, { getPodcastDetailThunk } from "../podcast_detail.slice";

const podcastDetailInitialState: PodcastDetailState = {
  episodies: [],
  isLoading: false,
  hasError: false
};

describe("podcast detail reducer sync actions", () => {
  it("should handle initial state", () => {
    expect(podcastDetailReducer(undefined, { type: "unknown" })).toEqual({
      episodies: [],
      isLoading: false,
      hasError: false
    });
  });
});

describe("podcast list reducer async actions", () => {
  const initialState: PodcastDetailState = {
    episodies: [],
    isLoading: false,
    hasError: false
  };

  it('should set isLoading to "pending"', async () => {
    const action = { type: getPodcastDetailThunk.pending.type };
    const state = podcastDetailReducer(podcastDetailInitialState, action);
    expect(state).toEqual({
      ...podcastDetailInitialState,
      isLoading: true
    });
  });

  it("should set podcaslit to array with element", async () => {
    const detail = [{ title: "Fake detail" }];
    const action = { type: getPodcastDetailThunk.fulfilled.type, payload: detail };
    const state = podcastDetailReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      episodies: action.payload
    });
  });

  it("should set hasError to true", async () => {
    const action = {
      type: getPodcastDetailThunk.rejected.type
    };
    const state = podcastDetailReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      hasError: true
    });
  });
});
