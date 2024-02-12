'use client'
import React, { useRef, useState } from "react";
import Container from "@/components/container";
import {
  nunito400,
  nunito500,
  nunito600,
  nunito700,
  nunito800
} from "@/styles/fonts";
import Image from "next/image";
import Button from "@/components/button";
import { content, imageCardContent, landingPage } from "../../../../constant";
import { ImageCard } from "@/components/imageCard";
import { Card } from "@/components/card";
import { m } from "framer-motion";


const IndexComponent = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement | null>(null);

  const h1Class = `${nunito800.className} text-4xl desktop:text-[3.625rem] leading-[2.625rem] desktop:leading-[3rem] text-grey-900 inline-flex`;
  const h1ClassAccent = `${nunito800.className} text-4xl desktop:text-[3.625rem] leading-[2.625rem] desktop:leading-[3rem] text-accent-21 inline-flex`;

  return (
    <div ref={ref} className="flex w-screen h-max flex-col mb-[2.5rem] bg-white">
      <div className="w-screen landing-page-background-gradient">
        <Container className="flex w-full desktop:mx-auto destop:pb-[8.56rem]">
          <section className="flex w-full pt-[3.5rem] desktop:pt-[3.88rem] items-center gap-[2.31rem] desktop:gap-10 flex-col desktop:flex-row">
            <div className="hidden desktop:flex flex-col w-[100%] gap-[1.12rem] desktop:gap-[1.5rem]">
              <div className="flex desktop:w-[669px]">
                <m.span 
                  initial={{ opacity: 0, x: '-100px' }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }} 
                  className={`${h1ClassAccent}`}
                >
                  Explore
                </m.span>
                &nbsp; &nbsp; &nbsp;
                <m.span
                  initial={{ opacity: 0, scale: 0, transformOrigin: `0% 50%` }}
                  whileInView={{ opacity: 1, scale: 1, transformOrigin: `0% 50%` }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}  
                  className={`${h1Class}`}
                >
                  the possibilities
                </m.span>
              </div>
              <m.span
                initial={{ opacity: 0, scale: 0, transformOrigin: `0% 50%` }}
                  whileInView={{ opacity: 1, scale: 1, transformOrigin: `0% 50%` }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}  
                className={`${h1Class}`}
              >
                of a redefined
              </m.span>
              <div className="flex desktop:w-[669px]">
                <m.span 
                  initial={{ opacity: 0, x: '-100px' }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }} 
                  className={`${h1ClassAccent}`}
                >
                  healthcare
                </m.span>
                &nbsp; &nbsp; &nbsp;
                <m.span
                  initial={{ opacity: 0, scale: 0, transformOrigin: `0% 50%` }}
                  whileInView={{ opacity: 1, scale: 1, transformOrigin: `0% 50%` }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}  
                  className={`${h1Class}`}
                >
                  experience
                </m.span>
              </div>
               
              <m.p 
                initial={{ opacity: 0, scale: 0, transformOrigin: `0% 50%` }}
                whileInView={{ opacity: 1, scale: 1, transformOrigin: `0% 50%` }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`${nunito500.className} text-lg desktop:text-xl leading-[1.75rem] text-grey-700 desktop:min-w-[47ch] desktop:max-w-[47ch] animate-scale-in-center`}>
                Enhance your patient care by digitizing your operations using
                the power of technology. Ankora is your partner in transforming
                the way you deliver healthcare services.
              </m.p>
              <m.div
                initial={{ opacity: 0, scale: 0.25, transformOrigin: `center` }}
                whileInView={{ opacity: 1, scale: 1, transformOrigin: `center` }}
                transition={{ duration: 0.5, delay: 0.15 }}
                viewport={{ once: true }} 
              >
                <Button className="animate-scale-in-center">
                  <a target="_blank" href="https://calendly.com/ankora-support/30min">
                    Get Started
                  </a>
                </Button>
              </m.div>
            </div>

            <div className="flex desktop:hidden flex-col w-[100%] gap-[1.12rem] desktop:gap-[1.56rem]">
              <m.h1 
                initial={{ opacity: 0, x: '-100px' }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }} 
                className={`${nunito800.className} text-4xl desktop:text-[3.625rem] leading-[2.625rem] desktop:leading-[4.25rem] text-grey-900 desktop:min-w-[19ch] desktop:max-w-[19ch]`}>
                Explore the possibilities of a redefined healthcare experience.
              </m.h1>
              <m.p 
                initial={{ opacity: 0, scale: 0, transformOrigin: `0% 50%` }}
                whileInView={{ opacity: 1, scale: 1, transformOrigin: `0% 50%` }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`${nunito500.className} text-lg desktop:text-xl leading-[1.75rem] text-grey-700 desktop:min-w-[47ch] desktop:max-w-[47ch]`}>
                Enhance your patient care by digitizing your operations using
                the power of technology. Ankora is your partner in transforming
                the way you deliver healthcare services.
              </m.p>

              
              <m.div
                initial={{ opacity: 0, scale: 0.25, transformOrigin: `center` }}
                whileInView={{ opacity: 1, scale: 1, transformOrigin: `center` }}
                transition={{ duration: 0.5, delay: 0.15 }}
                viewport={{ once: true }} 
              >
                <Button className="animate-scale-in-center">
                  <a target="_blank" href="https://calendly.com/ankora-support/30min">
                    Get Started
                  </a>
                </Button>
              </m.div>
            </div>
            <Image
              src={landingPage.url}
              width={landingPage.width}
              height={landingPage.height}
              priority
              onLoad={() => setLoading(false)}
              className={`${loading ? "opacity-0" : `animate-slide-in-right`}`}
              alt={landingPage.title}
              placeholder="blur"
              blurDataURL={landingPage.blurData}
            />
          </section>
        </Container>
      </div>
      <Container id="features" className="flex flex-col w-full pt-[4.94rem] mx-auto gap-[3.75rem]">
        <div className="flex flex-col gap-[0.31rem] w-[100%] justify-center items-center">
          <m.h2 
            initial={{ opacity: 0, scale: 0, transformOrigin: 'center' }}
            whileInView={{ opacity: 1, scale: 1, transformOrigin: 'center' }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }} 
            className={`${nunito700.className} text-grey-900 leading-normal text-[1.625rem] desktop:text-[2.375rem] text-center`}
          >
            Easy Healthcare Unification
          </m.h2>
          <m.p 
            initial={{ opacity: 0, scale: 0, transformOrigin: 'center' }}
            whileInView={{ opacity: 1, scale: 1, transformOrigin: 'center' }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }} 
            className={`${nunito500.className} text-[0.8125rem] desktop:text-base text-grey-700 leading-[1.4375rem] text-center mx-9 desktop:max-w-[65ch]`}
          >
            Discover the potentials to unify and shape a healthier and more
            connected healthcare future. With Ankora, you can expect more than
            just a healthcare solution but a remarkable healthcare
            transformation.
          </m.p>
        </div>
        <div className="py-8 pt-12 flex justify-center h-auto">
          <section className="flex gap-16 relative justify-center items-center desktop:justify-between flex-col h-max">
            {imageCardContent.length > 0 && imageCardContent.map((el, idx) => {
              return (
                <ImageCard 
                  key={idx} 
                  description={el.text} 
                  title={el.title}
                  index={idx}
                >
                  <Image
                    src={el.img}
                    width={400}
                    height={257}
                    alt={el.title}
                  />
                </ImageCard>
              )
            })}
          </section>
        </div>
      </Container>
      <div className="bg-grey-900 w-[100%] flex justify-center">
        <Container className="py-14 px-[1.56rem] desktop:px-0 desktop:py-[7.06rem] w-[100%] flex flex-col gap-[3.44rem]">
          <div className="flex justify-between w-[100%] flex-col desktop:flex-row gap-[2.19rem] desktop:items-end">
            <div className="flex flex-col">
              <m.h4
                initial={{ opacity: 0, x: `-100px` }}
                whileInView={{ opacity: 1, x: `0` }}
                transition={{ duration: 0.5, delay: 0.25 }}
                viewport={{ once: true }} 
                className={`${nunito600.className} text-base leading-normal text-accent-21 mb-5 desktop:mb-0`}>
                WHY CHOOSE US
              </m.h4>
              <m.h5
                initial={{ opacity: 0, scale: 0.25, transformOrigin: `center` }}
                whileInView={{ opacity: 1, scale: 1, transformOrigin: `center` }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }} 
                className={`${nunito400.className} desktop:text-[2.375rem] sm:ext-[1.6rem] lg:text-[1.625rem] leading-normal desktop:leading-[2.875rem] text-accent-25 desktop:max-w-[30ch] max-w-full`}
              >
                Ankora enables data-driven quality improvement initiatives.
              </m.h5>
            </div>
            <m.div
              initial={{ opacity: 0, scale: 0.25, transformOrigin: `center` }}
              whileInView={{ opacity: 1, scale: 1, transformOrigin: `center` }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }} 
            >
              <Button>
                <a href="https://calendly.com/ankora-support/30min">Book a Demo</a>  
              </Button>
            </m.div>
            
          </div>
          <div className="flex gap-[1.88rem] w-[100%] flex-wrap justify-center">
            {content.length > 0 &&
              content.map(({ text, title }, idx) => {
                return (
                  <Card idx={idx} key={idx} title={title}>
                    {text}
                  </Card>
                );
              })}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default IndexComponent;