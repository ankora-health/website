import React from "react";
import { nunito400, nunito700 } from "../styles/fonts";
import { m } from "framer-motion";

interface ImageCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}


export const ImageCard: React.FC<ImageCardProps> = ({
  title,
  description,
  children,
}) => {

  return (
    <m.article
      initial={{ scale: 0.65, opacity: 0.65 }}
      whileInView={{ opacity: 1, scale: 1.05 }}
      exit={{ scale: 0.65, opacity: 0.65 }}
      viewport={{
        // once: true,
        margin: "0px 50% 0px 50%",
      }}
      transition={{ duration: 0.25, type: 'spring' }}
      className={`flex flex-col py-[2.5rem] px-[1.5625rem] self-stretch bg-[#F4F4F4] rounded-[0.875rem] w-[20.5rem] desktop:min-w-[37.8rem] h-auto desktop:h-[25rem] gap-[1.5rem] snap-center`}
    >
      <div className="flex flex-col gap-[0.44rem] w-[100%]">
        <h3 className={`${nunito700.className} text-xl leading-[1.6875rem] text-center text-grey-800`}>
          {title}
        </h3>
        <span className={`${nunito400.className} text-sm leading-[1.375rem] text-center text-grey-700`}>
          {description}
        </span>
      </div>
      <div className="w-[100%] h-[100%] flex justify-center">{children}</div>
    </m.article>
  );
};