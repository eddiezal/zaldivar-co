// packages/ui/src/components/typography/typography.tsx
import { ElementType, HTMLAttributes, ReactNode } from "react";

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  variant?: "h1" | "h2" | "h3" | "p" | "span";
  children: ReactNode;
}

export const Typography = ({
  as: Tag = "p",
  variant = "p",
  className = "",
  children,
  ...props
}: TypographyProps) => {
  const baseClass = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-semibold",
    h3: "text-2xl font-medium",
    p: "text-base",
    span: "text-sm",
  };

  return (
    <Tag className={`${baseClass[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  );
};
