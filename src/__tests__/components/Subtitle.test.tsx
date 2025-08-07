import { render, screen } from "@testing-library/react";
import Subtitle from "../../components/Subtitle";

describe("Test subtitle", () => {
  test("Test props inside Subtitle", () => {
    render(<Subtitle text="test subtitle props" />);

    const subtitleText = screen.getByRole("heading", { level: 2 });
    expect(subtitleText).toHaveTextContent("test subtitle props");
  });
});
