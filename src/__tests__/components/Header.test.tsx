import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";

describe("Test Header component", () => {
  test("Page title text shown", () => {
    render(<Header />);

    const pageTitle = screen.getByText(/flags of the world/i);
    expect(pageTitle).toBeInTheDocument();
  });

  test("Page title h1", () => {
    render(<Header />);

    const pageTitleByRole = screen.getByRole("heading", {
      level: 1,
      name: /flags of the world/i,
    });
    expect(pageTitleByRole).toBeInTheDocument();
  });

  test("Subtitle inside Header", () => {
    render(<Header />);

    const subTitle = screen.getByRole("heading", {
      level: 2,
      name: /our world is full of beautiful flags/i,
    });
    expect(subTitle).toBeInTheDocument();
  });
});
