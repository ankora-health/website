import React, { InputHTMLAttributes } from "react";
import Label from "./label";
import { nunito700 } from "@/styles/fonts";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="min-w-[15.625rem] flex-col gap-[0.625rem] inline-flex">
      <Label>{label}</Label>
      <input
        className={`${nunito700.className} placeholder:text-sm placeholder:text-[#ccc] px-[0.94rem] py-[0.81rem] focus:outline-none text-black rounded-[0.625rem] bg-[#F9F9F9]`}
        {...props}
      />
    </div>
  );
};

export default Input;
