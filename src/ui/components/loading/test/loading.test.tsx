import { render, screen } from "@/test/test_utils";
import Loading from "../loading";

describe("Loading component tests", () => {
  it("render component", () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });

  it("loading is in the document", () => {
    render(<Loading />);
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });
});
