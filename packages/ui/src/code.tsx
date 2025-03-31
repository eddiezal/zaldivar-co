import React, { ReactNode } from "react";

interface CodeProps {
  children: ReactNode;
  className?: string;
}

export const Code: React.FC<CodeProps> = ({ children, className }) => {
  return <code className={className}>{children}</code>;
};
export default Code;