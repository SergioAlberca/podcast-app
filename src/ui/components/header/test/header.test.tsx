import { render, screen } from "@/test/test_utils";
import Header from "../header_component";
import { BrowserRouter } from "react-router-dom";

describe("Header component tests", () => {
  it("render component", () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });

  it("Podcaster test is in the document", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText("Podcaster")).toBeInTheDocument();
  });

  it("Loading is showing", () => {
    render(
      <BrowserRouter>
        <Header isLoadingRoute={true} />
      </BrowserRouter>
    );
    expect(screen.getByAltText("loading")).toBeInTheDocument();
  });
});
