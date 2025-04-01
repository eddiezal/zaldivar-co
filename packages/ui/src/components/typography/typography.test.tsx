// packages/ui/src/components/typography/typography.test.tsx
import { render, screen } from "@testing-library/react";
import { Typography } from "./typography";

describe("Typography Component", () => {
  it("renders a heading", () => {
    render(<Typography as="h1">Heading</Typography>);
    expect(screen.getByText("Heading")).toHaveClass("text-4xl");
  });

  it("renders a paragraph", () => {
    render(<Typography as="p">Paragraph</Typography>);
    expect(screen.getByText("Paragraph")).toHaveClass("text-base");
  });
});
