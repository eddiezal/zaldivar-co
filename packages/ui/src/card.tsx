import React, { ReactNode } from "react";

interface CardProps {
  className?: string;
  title: string;
  children: ReactNode;
  href: string;
}

export const Card: React.FC<CardProps> = ({
  className,
  title,
  children,
  href,
}) => {
  return (
    <a
      className={className}
      href={`${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{children}</p>
    </a>
  );
};
