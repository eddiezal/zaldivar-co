import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Button } from "./button";

describe("Button Component", () => {
  it("renders primary button correctly", async () => {
    await act(async () => {
      render(<Button variant="primary">Click Me</Button>);
    });
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("renders secondary button correctly", async () => {
    await act(async () => {
      render(<Button variant="secondary">Secondary</Button>);
    });
    expect(screen.getByText("Secondary")).toBeInTheDocument();
  });

  it("handles button click correctly", async () => {
    const handleClick = vi.fn(); // If using Vitest for mock
    render(
      <Button variant="primary" onClick={handleClick}>
        Click Me
      </Button>
    );

    const button = screen.getByText("Click Me");

    // Wrap click interaction with act
    await act(async () => {
      fireEvent.click(button);
    });

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
