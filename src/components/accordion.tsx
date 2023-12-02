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
        className="peer-checked:[&>section>div>svg]:rotate-45 peer-checked:[&>section>div]:scale-95 peer-checked:[&>section>article]:max-h-screen peer-checked:[&>section>article]:opacity-100"
      >
        <section className="py-[1.88rem] cursor-pointer flex justify-between border-b border-[bg-gradient-to-b from-[rgba(0,0,0,0.20)] via-[rgba(0,0,0,0.20)] to-[#EDE9E5]]">
          <h2
            className={`${nunito_sans400.className} text-xl text-grey-900 leading-[1.875rem] min-w-[35ch] max-w-[35ch]`}
          >
            {title}
          </h2>

          <article
            className={`${nunito_sans400.className} opacity-0 max-h-0 bg-white transition-all duration-[0.2s] text-xl text-grey-900 text-justify leading-[1.875rem] px-[48px]`}
          >
            {children}
          </article>

          <div className="p-2 flex w-[3.12131rem] h-[3.12131rem] justify-center items-center border border-grey-500 rounded-button transition-all duration-[0.2s]">
            <CancelIcon />
          </div>
        </section>

  
      </label>
    </div>
  );
};

export default Accordion;
