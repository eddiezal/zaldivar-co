// packages/ui/src/components/card/card.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: "This is a default card.",
  },
};

export const Padded: Story = {
  args: {
    children: "This is a card with padding.",
    padding: "lg",
  },
};
