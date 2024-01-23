'use client'
import Accordion from "@/components/accordion";
import Container from "@/components/container";
import useMediaQuery from "@/hooks/useMediaQuery";
import { nunito800, nunito700 } from "@/styles/fonts";
import { articles } from "./articles";

const FaqComponent = () => {
  const desktop = useMediaQuery('(min-width: 1240px)');
  return (
    <Container className={`flex flex-col w-[100%] mt-[3.31rem] mb-[2.75rem] desktop:mb-[4.81rem] desktop:mx-auto desktop:pt-[4.47rem] desktop:pl-[3.87rem] desktop:pr-[3.5rem] desktop:pb-[4.07rem] gap-[1.18rem] desktop:gap-0 bg-white`}>
      <h1
        className={`${desktop ? nunito800.className : nunito700.className} text-4xl desktop:text-[3.625rem] leading-[2.625rem] desktop:leading-[4.25rem] text-grey-900 desktop:pb-[3.06rem]`}
      >
        Frequently Asked Questions
      </h1>
      <hr className="hidden desktop:flex bg-gradient-to-b from-[rgba(0,0,0,0.20)] via-[rgba(0,0,0,0.20)] to-[#EDE9E5]" />

      <article className="flex flex-col">
        {articles.length > 0 && articles.map(({ title, content }, idx) => {
          return (
            <Accordion key={idx} title={title} id={`accordion-${idx}`}>
              {content}
            </Accordion>
          );
        })}
      </article>
    </Container>
  );
};

export default FaqComponent;
