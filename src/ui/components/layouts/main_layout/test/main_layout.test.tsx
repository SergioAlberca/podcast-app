import { render } from "@/test/test_utils";

import MainLayout from "../main_layout";
import { BrowserRouter } from "react-router-dom";

describe("MainLayout component tests", () => {
  it("render component", () => {
    const { container } = render(
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
