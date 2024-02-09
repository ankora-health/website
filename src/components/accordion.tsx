import React from "react";
import { CancelIcon } from "@/assets/svg/cancel";
import { nunito400 } from "@/styles/fonts";
import { m } from "framer-motion";

interface AccordionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ id, title, children }) => {
  return (
    <m.div 
      initial={{ opacity: 0, y: '50px' }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '50px' }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }} 
      className="overflow-hidden"
    >
      <input type="checkbox" name={id} id={id} className="sr-only peer" />
      <label
        htmlFor={id}
        className="peer-checked:[&>section>div>svg]:rotate-45 peer-checked:[&>section>div]:scale-95 peer-checked:[&>section>div]:transition-all peer-checked:[&>section>div]:duration-[0.2s] peer-checked:[&>section>article]:max-h-screen peer-checked:[&>section>article]:opacity-100 peer-checked:[&>article]:max-h-screen peer-checked:[&>article]:opacity-100 peer-checked:[&>article]:p-4 peer-checked:[&>section>article]:transition-all peer-checked:[&>section>article]:duration-[0.2s]"
      >
        <section className="py-[1.88rem] cursor-pointer flex justify-between border-b border-[bg-gradient-to-b from-[rgba(0,0,0,0.20)] via-[rgba(0,0,0,0.20)] to-[#EDE9E5]] transition-all duration-[0.2s]">
          <h2
            className={`${nunito400.className} text-xl text-grey-900 leading-[1.875rem]  desktop:min-w-[35ch] desktop:max-w-[35ch] min-w-[23ch] max-w-[23ch]`}
          >
            {title}
          </h2>

          <article
            className={`${nunito400.className} hidden desktop:flex opacity-0 max-h-0 bg-white transition-all duration-[0.2s] text-xl text-grey-900 leading-[1.875rem] px-12`}
          >
            {children}
          </article>

          <m.div 
            className="desktop:p-2 flex w-min h-min desktop:w-[3.12131rem] desktop:h-[3.12131rem] justify-center items-center border border-grey-500 rounded-button">
            <CancelIcon />
          </m.div>
        </section>
        <article
          className={`${nunito400.className} flex desktop:hidden opacity-0 max-h-0 bg-white transition-all duration-[0.2s] text-xl text-grey-900 leading-[1.875rem]`}
        >
          {children}
        </article>
  
      </label>
    </m.div>
  );
};

export default Accordion;
