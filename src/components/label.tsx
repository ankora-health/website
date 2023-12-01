import React from "react";
import { nunito400 } from "@/styles/fonts";
import { ReactNode, LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  className?: string;
}

const Label: React.FC<LabelProps> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <label
      className={`text-[#282828] text-sm ${nunito400} ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
