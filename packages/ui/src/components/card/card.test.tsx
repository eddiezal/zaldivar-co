// packages/ui/src/components/card/card.test.tsx
import { render, screen } from "@testing-library/react";
import { Card } from "./card";

describe("Card Component", () => {
  it("renders correctly", () => {
    render(<Card>Card Content</Card>);
    expect(screen.getByText("Card Content")).toBeInTheDocument();
  });

  it("applies padding variant", () => {
    const { container } = render(<Card padding="lg">Padded Card</Card>);
    expect(container.firstChild).toHaveClass("p-6");
  });
});
