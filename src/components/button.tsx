import { nunito600 } from "@/styles/fonts";
import React, { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonVariant = "solid" | "outline" | "text" | "unstyled";

const VARIANT_MAPS: Record<ButtonVariant, string> = {
  text: "bg-transparent",
  outline: "border-solid border border-grey-500",
  solid: "bg-orange text-white shadow-[0px_4px_26px_0px_rgba(249,123,92,0.15)] border-solid border border-orange",
  unstyled: ''
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  children?: ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "solid",
  className = "",
  ...props
}) => {
  const buttonClasses = variant === "unstyled" ? className : 
  `btn ${VARIANT_MAPS[variant]} ${nunito600.className} ${className}`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
