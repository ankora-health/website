import { nunito600 } from "@/styles/fonts";
import React, { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonVariant = "solid" | "outline" | "text";

const VARIANT_MAPS: Record<ButtonVariant, string> = {
  text: "bg-transparent",
  outline: "border-solid border-2 border-grey-500",
  solid: "bg-orange text-white shadow-[0px_4px_26px_0px_rgba(249,123,92,0.15)]",
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
  const buttonClasses = `-:w-max inline-flex items-center justify-center py-2.5 gap-2.5 px-5 rounded-button ${VARIANT_MAPS[variant]} ${nunito600.className} ${className}`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
