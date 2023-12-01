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
      className={`flex flex-col px-[2.5rem] py-[1.5625rem] self-stretch bg-[#F4F4F4] rounded-[0.875rem] w-[37.48375rem] h-[25rem]`}
    >
      <div className="flex flex-col gap-[0.44rem] w-[100%]">
        <h3
          className={`${nunito700.className} text-xl leading-[1.6875rem] text-center text-grey-800`}
        >
          {title}
        </h3>
        <span
          className={`${nunito400.className} text-xs leading-[1.375rem] text-center text-grey-700`}
        >
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
        <Container className="flex w-[100%] mr-[auto] ml-[auto] pb-[8.56rem]">
          <section className="flex w-[100%] pt-[3.88rem] items-center gap-10">
            <div className="flex flex-col w-[100%] gap-[1.56rem]">
              <h1
                className={`${nunito_sans800.className} text-[3.625rem] leading-[4.25rem] text-grey-900 min-w-[19ch] max-w-[19ch]`}
              >
                Explore the possibilities of a redefined healthcare experience.
              </h1>
              <p
                className={`${nunito500.className} text-xl leading-[1.75rem] text-grey-700 min-w-[47ch] max-w-[47ch]`}
              >
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
      <Container className="flex flex-col w-[100%] pt-[4.94rem] mr-auto ml-auto gap-[3.75rem]">
        <div className="flex flex-col gap-[0.31rem] w-[100%] justify-center items-center">
          <h2
            className={`${nunito_sans700.className} text-grey-900 leading-normal text-[2.375rem]`}
          >
            Easy Healthcare Unification
          </h2>
          <p
            className={`${nunito500.className} text-base text-grey-700 leading-[1.4375rem] text-center max-w-[65ch]`}
          >
            Discover the potentials to unify and shape a healthier and more
            connected healthcare future. With Ankora, you can expect more than
            just a healthcare solution but a remarkable healthcare
            transformation.
          </p>
        </div>
        <div className="flex gap-[1.88rem] w-[100%] flex-wrap">
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
      <div className="bg-grey-900 w-[100%]">
        <Container className="mr-auto ml-auto py-[7.06rem] w-[100%] flex flex-col gap-[3.44rem]">
          <div className="flex justify-between items-end w-[100%]">
            <div className="flex flex-col">
              <h4
                className={`${nunito600.className} text-base leading-normal text-accent-21`}
              >
                WHY CHOOSE US
              </h4>
              <h5
                className={`${nunito_sans400.className} text-[2.375rem] leading-[2.875rem] text-accent-25 max-w-[30ch]`}
              >
                Ankora enables data-driven quality improvement initiatives.
              </h5>
            </div>
            <Button>Book a Demo</Button>
          </div>
          <div className="flex gap-[1.88rem] w-[100%] flex-wrap">
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
