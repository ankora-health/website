import React from "react";
import { CheckCircleIcon } from "../assets/svg/checkCircle";
import { nunito400, nunito600 } from "../styles/fonts";
import { m } from "framer-motion";

interface CardProps {
  title: string;
  children: React.ReactNode;
  idx: number;
}

export const Card: React.FC<CardProps> = ({ title, children, idx }) => {
  return (
    <m.article
      key={idx}
      initial={{ opacity: 0, scale: 0.5 }}
      viewport={{ once: true }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
        transition: { delay: 0.25 * idx, type: "spring" }  
      }}
    >
      <m.div
        whileHover={{ scale: 1.1, transition: { type: "spring" }}}
        className="flex flex-col bg-[#353534] rounded-[1.625rem] py-[2.5rem] px-[1.25rem] w-[24.5rem]"
      >
        <CheckCircleIcon />
        <h6 className={`${nunito600.className} leading-[3rem] text-[1.375rem] text-white mb-[0.31rem]`}>
          {title}
        </h6>
        <p className={`${nunito400.className} leading-[1.375rem] text-base text-accent-25 w-[18.9375rem]`}>
          {children}
        </p>
      </m.div>
    </m.article>
  );
};