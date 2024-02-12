import React, { useRef } from "react";
import { nunito400, nunito700 } from "../styles/fonts";
import { m, useScroll, useTransform } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";

interface ImageCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  index?: number;
}


export const ImageCard: React.FC<ImageCardProps> = ({
  title,
  description,
  children,
  index = 0
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1])
  const desktop = useMediaQuery('(min-width: 960px)');
  const destopAnimationClass = `sticky shadow-sm border border-grey-300 border-solid ${ index !== 0 ? `desktop:mt-[50vh]` : `desktop:mt-8`} desktop:top-32`;

  return (
    <m.article
      ref={container}
      style={{ 
        scale: desktop ? scale : 1, 
        top: desktop ? `calc(10vh + ${(index + 1) * 25}px)` : 0
      }}
      className={`flex flex-col desktop:py-[2.5rem] py-[1.5rem] desktop:px-[1.5625rem] px-[1rem] self-stretch bg-[#F4F4F4] rounded-[0.875rem] w-[20.5rem] desktop:min-w-[37.8rem] h-auto desktop:h-[25rem] gap-[1.5rem] ${desktop ? destopAnimationClass : ''}`}
    >
      <div className="flex flex-col gap-[0.44rem] w-[100%]">
        <h3 className={`${nunito700.className} desktop:text-xl text-lg leading-[1.6875rem] text-center text-grey-800`}>
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