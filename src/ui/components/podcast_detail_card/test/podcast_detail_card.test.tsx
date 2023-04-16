import { render, screen } from "@/test/test_utils";
import PodcastDetailCard from "../podcast_detail_card";
import { fixtures } from "./fixtures";
import { BrowserRouter } from "react-router-dom";

describe("PodcastCardDetail component tests", () => {
  it("render component", () => {
    const { container } = render(
      <BrowserRouter>
        <PodcastDetailCard podcastDetail={fixtures} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });

  it("Title podcast is in the document", () => {
    render(
      <BrowserRouter>
        <PodcastDetailCard podcastDetail={fixtures} />
      </BrowserRouter>
    );
    expect(screen.getByText(fixtures["im:artist"].label)).toBeInTheDocument();
  });
});
