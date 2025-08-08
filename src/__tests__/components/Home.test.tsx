import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Test Home", () => {
  test("Renders all four buttons", () => {
    render(<Home />);
    const choiceButtons = screen.getAllByRole("button");
    expect(choiceButtons.length).toBe(4);
  });

  test("Each button text is non-empty string", () => {
    render(<Home />);
    const choiceButtons =
      screen.getAllByRole("button"); /* return an array of buttons */
    choiceButtons.forEach((button) => {
      expect(button).toHaveTextContent(/.+/);
    });
  });

  test("A button with text `Sweden`", () => {
    render(<Home />);
    const choiceButtons = screen.getAllByRole("button");
    const filteredCountry = choiceButtons.filter(
      (country) => country.textContent === "Sweden"
    ); /* this still returns an array */
    expect(filteredCountry[0]).toBeInTheDocument();
  });
});
