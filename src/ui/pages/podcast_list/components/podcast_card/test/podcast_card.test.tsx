import { vi } from "vitest";
import { fireEvent, render } from "@/test/test_utils";
import PodcastCard from "../podcast_card";
import { fixtures } from "./fixtures/fixtures";

const goToDetail = vi.fn();

describe("Podcast Card component test", () => {
  it("render component", () => {
    const { container } = render(<PodcastCard podcast={fixtures} goToDetail={goToDetail} />);
    expect(container).toMatchSnapshot();
  });

  it("Author name to be in the document", () => {
    const { getByText } = render(<PodcastCard podcast={fixtures} goToDetail={goToDetail} />);
    expect(getByText(fixtures["im:name"].label)).toBeInTheDocument();
  });

  it("goToDetail has been called", () => {
    const { getByTestId } = render(<PodcastCard podcast={fixtures} goToDetail={goToDetail} />);
    fireEvent.click(getByTestId("podcast_card"));
    expect(goToDetail).toHaveBeenCalled();
  });
});
