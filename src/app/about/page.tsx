import Container from "@/components/container";
import { nunito400, nunito800 } from "@/styles/fonts";
import Image from "next/image";
import Button from "@/components/button";
import { about_us } from "../../../images";

const Index = () => {

  return (
    <div className="w-screen flex flex-col gap-[4.31rem]">
      <div className="w-screen about-us-background-gradient gap-[4.62rem]">
        <Container className="flex flex-col w-[100%] mx-[auto] desktop:pt-[4.13rem] gap-[3.19rem]">
          <section className="flex flex-col desktop:flex-row w-full pt-14 desktop:pt-10 justify-between gap-[1.12rem] desktop:gap-[7.31rem]">
            <h1
              className={`${nunito800.className} desktop:text-[3.625rem] text-4xl leading-[2.625rem] desktop:leading-[4.25rem] text-grey-900 desktop:w-[34rem]`}
            >
              Our story, Why we have done what we did
            </h1>
            <p
              className={`${nunito400.className} text-base leading-normal desktop:text-xl text-grey-700 desktop:w-[37.1875rem]`}
            >
              At Ankora, we believe in a future where healthcare is not just a
              service but a seamless journey, where patients receive
              personalized care, and healthcare providers operate at peak
              efficiency.
              <br />
              <br />
              Our journey began with a vision to bridge the healthcare divide in
              Africa, where fragmented data, slow services, and administrative
              burdens were impeding the delivery of quality healthcare.
            </p>
          </section>
          <section className="flex justify-between self-center desktop:self-end gap-3 desktop:gap-8 h-auto desktop:h-[312px] max-w-full desktop:max-w-[1081px]">
            {about_us.map(({ url, title, height, width, blurData }, index) => {
              return (
                <Image
                  key={index}
                  src={url}
                  className="rounded-[0.9375rem] desktop:flex-1 w-[31%]"
                  width={width}
                  height={height}
                  alt={title}
                  placeholder="blur"
                  blurDataURL={blurData}
                />
              );
            })}
          </section>
        </Container>
      </div>
      <Container className="desktop:mx-auto">
        <div className="py-10 px-[1.94rem] desktop:p-[4.3rem] bg-grey-900 desktop:mx-auto rounded-[0.9375rem] mb-[4.31rem] flex items-start desktop:items-center justify-between flex-col desktop:flex-row gap-5">
          <div className="flex flex-col gap-[0.63rem]">
            <h2
              className={`${nunito800.className} text-[1.75rem] leading-normal desktop:text-[2.375rem] desktop:leading-[4.25rem] text-accent-23`}
            >
              Our Mission
            </h2>
            <p
              className={`${nunito400.className} text-accent-25 text-base desktop:text-xl desktop:min-w-[49ch] desktop:max-w-[49ch] leading-[normal] desktop:leading-[30px]`}
            >
              To make healthcare more accessible, efficient, and personalised for
              both the patients and healthcare stakeholders in Africa
            </p>
          </div>
          <Button className="min-w-max">
            <a target="_blank" href="https://calendly.com/ankora-support/30min">
              Get Started
            </a>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Index;
