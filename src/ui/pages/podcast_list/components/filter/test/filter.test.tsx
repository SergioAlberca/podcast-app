import { vi } from "vitest";
import { fireEvent, render, screen } from "@/test/test_utils";
import Filter from "../filter";

describe("Filter component test", () => {
  it("render component", () => {
    const { container } = render(<Filter payload="fake" setPayload={() => "fake"} />);
    expect(container).toMatchSnapshot();
  });

  it("Payload to be in the document", () => {
    render(<Filter payload="fake" setPayload={() => "fake"} />);
    expect(screen.getByDisplayValue("fake")).toBeInTheDocument();
  });

  it("SetPayload has been called", () => {
    const setValue = vi.fn();
    const { getByTestId } = render(<Filter payload="" setPayload={() => setValue("")} />);
    const input = getByTestId("filter-input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: setValue("fakecustom") } });
    expect(setValue).toHaveBeenCalled();
  });
});
