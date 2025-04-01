// packages/ui/src/components/modal/modal.test.tsx
import { render } from "@testing-library/react";
import { Modal } from "./modal";

describe("Modal Component", () => {
  it("renders when open", () => {
    const { getByText } = render(
      <Modal isOpen={true} onClose={() => {}}>
        Modal Content
      </Modal>
    );
    expect(getByText("Modal Content")).toBeInTheDocument();
  });

  it("does not render when closed", () => {
    const { queryByText } = render(
      <Modal isOpen={false} onClose={() => {}}>
        Modal Content
      </Modal>
    );
    expect(queryByText("Modal Content")).not.toBeInTheDocument();
  });
});
