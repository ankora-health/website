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
        className="peer-checked:[&>section>div>svg]:rotate-45 peer-checked:[&>section>div]:scale-95 peer-checked:[&>section>article]:max-h-screen peer-checked:[&>section>article]:opacity-100 peer-checked:[&>article]:max-h-screen peer-checked:[&>article]:opacity-100 peer-checked:[&>article]:p-4"
      >
        <section className="py-[1.88rem] cursor-pointer flex justify-between border-b border-[bg-gradient-to-b from-[rgba(0,0,0,0.20)] via-[rgba(0,0,0,0.20)] to-[#EDE9E5]]">
          <h2
            className={`${nunito_sans400.className} text-xl text-grey-900 leading-[1.875rem]  desktop:min-w-[35ch] desktop:max-w-[35ch] min-w-[23ch] max-w-[23ch]`}
          >
            {title}
          </h2>

          <article
            className={`${nunito_sans400.className} hidden desktop:flex opacity-0 max-h-0 bg-white transition-all duration-[0.2s] text-xl text-grey-900 text-justify leading-[1.875rem] px-12`}
          >
            {children}
          </article>

          <div className="desktop:p-2 flex w-min h-min desktop:w-[3.12131rem] desktop:h-[3.12131rem] justify-center items-center border border-grey-500 rounded-button transition-all duration-[0.2s]">
            <CancelIcon />
          </div>
        </section>
        <article
          className={`${nunito_sans400.className} flex desktop:hidden opacity-0 max-h-0 bg-white transition-all duration-[0.2s] text-xl text-grey-900 text-justify leading-[1.875rem]`}
        >
          {children}
        </article>
  
      </label>
    </div>
  );
};

export default Accordion;
