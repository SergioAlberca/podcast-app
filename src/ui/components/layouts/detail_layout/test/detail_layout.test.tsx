import { renderWithProviders } from "@/test/test_utils";

import { BrowserRouter } from "react-router-dom";
import DetailLayout from "../detail_layout";

describe("MainLayout component tests", () => {
  it("render component", () => {
    const { container } = renderWithProviders(
      <BrowserRouter>
        <DetailLayout podcastId="1234">
          <p>Fake children</p>
        </DetailLayout>
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
