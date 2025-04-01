// packages/ui/src/components/modal/modal.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./modal";
import { useState } from "react";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Modal>;

const Template: Story = (args) => {
  const [open, setOpen] = useState(true);
  return (
    <Modal {...args} isOpen={open} onClose={() => setOpen(false)}>
      <div className="p-4">
        <h2 className="text-lg font-bold">Modal Title</h2>
        <p className="mt-2 text-sm">This is a modal content.</p>
      </div>
    </Modal>
  );
};

export const Default = Template.bind({});
