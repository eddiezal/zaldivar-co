// packages/ui/src/components/typography/typography.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./typography";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Heading1: Story = {
  args: {
    as: "h1",
    children: "This is a Heading 1",
  },
};

export const Paragraph: Story = {
  args: {
    as: "p",
    children: "This is a paragraph.",
  },
};
