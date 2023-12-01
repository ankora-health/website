import React from "react";
import { CancelIcon } from "@/assets/svg/cancel";
import { nunito_sans400 } from "@/styles/fonts";

interface AccordionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ id, title, children }) => {
  return (
    <div className="overflow-hidden">
      <input type="checkbox" name={id} id={id} className="sr-only peer" />
      <label
        htmlFor={id}
        className="peer-checked:[&>section>div>svg]:rotate-45 peer-checked:[&>div]:max-h-screen peer-checked:[&>div]:p-4"
      >
        <section className="py-[1.88rem] cursor-pointer flex justify-between border-b border-[bg-gradient-to-b from-[rgba(0,0,0,0.20)] via-[rgba(0,0,0,0.20)] to-[#EDE9E5]]">
          <h2
            className={`${nunito_sans400.className} text-xl text-grey-900 leading-[1.875rem] max-w-[30ch]`}
          >
            {title}
          </h2>

          <div className="p-2 flex w-[3.12131rem] h-[3.12131rem] justify-center items-center border border-grey-500 rounded-button">
            <CancelIcon />
          </div>
        </section>

        <div
          className={`${nunito_sans400.className} max-h-0 p-[0.001rem] bg-white transition-all duration-[0.2s] text-xl text-grey-900 text-justify leading-[1.875rem]`}
        >
          {children}
        </div>
      </label>
    </div>
  );
};

export default Accordion;
