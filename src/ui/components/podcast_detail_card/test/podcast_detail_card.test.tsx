import { render, screen } from "@/test/test_utils";
import PodcastDetailCard from "../podcast_detail_card";
import { fixtures } from "./fixtures";

describe("PodcastCardDetail component tests", () => {
  it("render component", () => {
    const { container } = render(<PodcastDetailCard podcastDetail={fixtures} />);
    expect(container).toMatchSnapshot();
  });

  it("Title podcast is in the document", () => {
    render(<PodcastDetailCard podcastDetail={fixtures} />);
    expect(screen.getByText(fixtures["im:artist"].label)).toBeInTheDocument();
  });
});
