import React from "react";
import Container from "@/components/container";
import {
  nunito400,
  nunito500,
  nunito600,
  nunito700,
  nunito_sans400,
  nunito_sans700,
  nunito_sans800,
} from "@/styles/fonts";
import Image from "next/image";
import landing_page1 from "@/assets/images/landing_page1.png";
import patientJourney from "@/assets/svg/patientJourney.svg";
import patientRecord from "@/assets/svg/patientRecord.svg";
import operationalAnalysis from "@/assets/svg/operationalAnalysis.svg";
import appointment from "@/assets/svg/appointment.svg";
import reporting from "@/assets/svg/reporting.svg";
import inventory from "@/assets/svg/inventory.svg";
import staffAvailability from "@/assets/svg/staffAvailability.svg";
import taskManagement from "@/assets/svg/taskManagement.svg";
import Button from "@/components/button";
import { CheckCircleIcon } from "@/assets/svg";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

interface ImageCardProps extends CardProps {
  description: string;
  gap?: number;
}

const imageCardContent = [
  {
    title: "Patient Journey",
    height: 230,
    width: 385,
    img: patientJourney,
    text: `Simplified patient visit flow`,
  },
  {
    title: "Easy and Unified record for all patients",
    height: 216,
    width: 384,
    img: patientRecord,
    text: `Digitised Patient Record`,
  },
  {
    title: "Robost Reporting Systems",
    height: 234,
    width: 427,
    img: reporting,
    text: `Generated activity charts and statistics`,
  },
  {
    title: "Inventory Management",
    height: 222,
    width: 423,
    img: inventory,
    text: `Manage products in your store`,
  },
  {
    title: "Operations Analysis",
    height: 212,
    width: 311,
    img: operationalAnalysis,
    text: `Gain insights into your healthcare operations`,
  },
  {
    title: "Staff Availability",
    height: 304,
    width: 367,
    img: staffAvailability,
    text: `Manage staffs schedules and work hours`,
  },
  {
    title: "Appointment Scheduling",
    height: 256,
    width: 279,
    img: appointment,
    text: `Easy hospital bill & HMO management`,
  },
  {
    title: "Efficient Task Management System",
    height: 192,
    width: 408,
    img: taskManagement,
    text: `Task allocation for hospital staffs`,
  },
];

const content = [
  {
    title: "Patient Outcomes",
    text: `Minimise paperwork and transcription errors using Ankora. It flags potential errors, improving patient safety.`,
  },
  {
    title: "Seamless Interoperability",
    text: `Seamless data exchange with other healthcare systems, laboratories, and pharmacies.`,
  },
  {
    title: "Reduced Errors",
    text: `Minimise paperwork and transcription errors using Ankora. It flags potential errors, improving patient safety.`,
  },
  {
    title: "Offline Capabilities",
    text: `Access and utilize Ankora's features even in offline mode, ensuring continuity of care and information access.`,
  },
  {
    title: "Billing Accuracy",
    text: `Automates billing processes, reducing billing errors and improving revenue capture. Streamlines insurance claims.`,
  },
  {
    title: "Patient Engagement",
    text: `Robust patient engagement tools, fostering better communication and involvement in their care.`,
  },
];

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <article className="flex flex-col bg-[#353534] rounded-[1.625rem] py-[2.5rem] px-[1.25rem] w-[24.5rem]">
      <CheckCircleIcon />
      <h6
        className={`${nunito600.className} leading-[3rem] text-[1.375rem] text-white mb-[0.31rem]`}
      >
        {title}
      </h6>
      <p
        className={`${nunito400.className} leading-[1.375rem] text-base text-accent-25 w-[18.9375rem]`}
      >
        {children}
      </p>
    </article>
  );
};

const ImageCard: React.FC<ImageCardProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <article
      className={`flex flex-col py-[2.5rem] px-[1.5625rem] self-stretch bg-[#F4F4F4] rounded-[0.875rem] w-[20.5rem] desktop:w-[37.8rem] h-auto desktop:h-[25rem] gap-[1.88rem]`}
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
    </article>
  );
};

const Index = () => {
  return (
    <div className="flex w-screen flex-col mb-[2.5rem]">
      <div className="w-screen landing-page-background-gradient">
        <Container className="flex w-[100%] mx-auto destop:pb-[8.56rem]">
          <section className="flex w-[100%] pt-[3.5rem] desktop:pt-[3.88rem] items-center gap-[2.31rem] desktop:gap-10 flex-col desktop:flex-row">
            <div className="flex flex-col w-[100%] gap-[1.12rem] desktop:gap-[1.56rem]">
              <h1 className={`${nunito_sans800.className} text-4xl desktop:text-[3.625rem] leading-[2.625rem] desktop:leading-[4.25rem] text-grey-900 desktop:min-w-[19ch] desktop:max-w-[19ch]`}>
                Explore the possibilities of a redefined healthcare experience.
              </h1>
              <p className={`${nunito500.className} text-lg desktop:text-xl leading-[1.75rem] text-grey-700 desktop:min-w-[47ch] desktop:max-w-[47ch]`}>
                Enhance your patient care by digitizing your operations using
                the power of technology. Ankora is your partner in transforming
                the way you deliver healthcare services
              </p>
              <Button>Get Started</Button>
            </div>
            <Image
              src={landing_page1}
              width={853}
              height={533}
              priority
              style={{
                height: "auto",
                objectFit: "cover",
              }}
              alt="landing_page1"
              placeholder="blur"
            />
          </section>
        </Container>
      </div>
      <Container className="flex flex-col w-[100%] pt-[4.94rem] mx-auto gap-[3.75rem]">
        <div className="flex flex-col gap-[0.31rem] w-[100%] justify-center items-center">
          <h2 className={`${nunito_sans700.className} text-grey-900 leading-normal text-[1.625rem] desktop:text-[2.375rem] text-center w-10/12`}>
            Easy Healthcare Unification
          </h2>
          <p
            className={`${nunito500.className} text-[0.8125rem] desktop:text-base text-grey-700 leading-[1.4375rem] text-center mx-9 desktop:max-w-[65ch]`}
          >
            Discover the potentials to unify and shape a healthier and more
            connected healthcare future. With Ankora, you can expect more than
            just a healthcare solution but a remarkable healthcare
            transformation.
          </p>
        </div>
        <div className="flex gap-[1.88rem] justify-center w-[100%] flex-wrap desktop:justify-between mb-8">
          {imageCardContent.length > 0 &&
            imageCardContent.map((el, idx) => {
              return (
                <ImageCard key={idx} description={el.text} title={el.title}>
                  <Image
                    src={el.img}
                    width={el.width}
                    height={el.height}
                    alt={`landing_page_image${idx}`}
                  />
                </ImageCard>
              );
            })}
        </div>
      </Container>
      <div id="features" className="bg-grey-900 w-[100%] flex justify-center">
        <Container className="py-14 px-[1.56rem] desktop:px-0 desktop:py-[7.06rem] w-[100%] flex flex-col gap-[3.44rem]">
          <div className="flex justify-between w-[100%] flex-col desktop:flex-row gap-[2.19rem] desktop:items-end">
            <div className="flex flex-col">
              <h4 className={`${nunito600.className} text-base leading-normal text-accent-21 mb-5 desktop:mb-0`}>
                WHY CHOOSE US
              </h4>
              <h5
                className={`${nunito_sans400.className} desktop:text-[2.375rem] text-[1.625rem] leading-normal desktop:leading-[2.875rem] text-accent-25 max-w-[30ch]`}
              >
                Ankora enables data-driven quality improvement initiatives.
              </h5>
            </div>
            <Button>Book a Demo</Button>
          </div>
          <div className="flex gap-[1.88rem] w-[100%] flex-wrap justify-center">
            {content.length > 0 &&
              content.map(({ text, title }, idx) => {
                return (
                  <Card key={idx} title={title}>
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

export default Index;