import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"], // Enables automatic prop table from react-docgen-typescript
  args: {
    onClick: fn(), // Track clicks in Storybook actions
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click Me",
    variant: "default",
    size: "md",
  },
};

export const Secondary: Story = {
  args: {
    children: "Learn More",
    variant: "secondary",
    size: "md",
  },
};

export const Outline: Story = {
  args: {
    children: "Outlined Button",
    variant: "outline",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    children: "Big Button",
    variant: "default",
    size: "lg",
  },
};

export const Small: Story = {
  args: {
    children: "Tiny Button",
    variant: "default",
    size: "sm",
  },
};
