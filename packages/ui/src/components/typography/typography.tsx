// packages/ui/src/components/typography/typography.tsx
import React from "react";

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  variant?: "h1" | "h2" | "h3" | "p" | "span";
}

export const Typography: React.FC<TypographyProps> = ({
  as: Tag = "p",
  variant = "p",
  className,
  children,
  ...props
}) => {
  const baseClass = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-semibold",
    h3: "text-2xl font-medium",
    p: "text-base",
    span: "text-sm",
  };

  return (
    <Tag
      className={`${baseClass[variant]} ${className || ""}`}
      {...props}
    >
      {children}
    </Tag>
  );
};
