import React, { TextareaHTMLAttributes } from "react";
import Label from "./label";
import { nunito700 } from "@/styles/fonts";

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  className?: string;
}

export const TextArea: React.FC<InputProps> = ({
  className = "",
  label,
  ...props
}) => {
  return (
    <div className="min-w-[15.625rem] flex-col gap-[0.625rem] inline-flex">
      <Label>{label}</Label>
      <textarea
        className={`resize-none placeholder:text-sm placeholder:text-[#ccc] px-[0.94rem] py-[0.81rem] focus:outline-none text-black rounded-[0.625rem] bg-[#F9F9F9] ${nunito700.className} ${className}`}
        {...props}
      />
    </div>
  );
};
