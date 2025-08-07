import { render, screen } from "@testing-library/react";
import Subtitle from "../../components/Subtitle";

describe("Test subtitle component", () => {
  const testText = "beautiful";

  test("Renders if subtitle shown on screen", () => {
    render(<Subtitle text={testText} />);

    const subtitleText = screen.getByRole("heading", { level: 2 });
    expect(subtitleText).toBeInTheDocument();
    expect(subtitleText).toHaveTextContent(
      `Our world is full of ${testText} flags.`
    );
  });

  test("Check subtitle className", () => {
    render(<Subtitle text={testText} />);

    expect(
      screen.getByText(/Our world is full of beautiful flags./i)
    ).toHaveClass("py-4 text-2xl");
  });
});
