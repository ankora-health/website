'use client'
import Accordion from "@/components/accordion";
import Container from "@/components/container";
import useMediaQuery from "@/hooks/useMediaQuery";
import { nunito800, nunito700 } from "@/styles/fonts";

const links = [
  { 
    title: `What is Ankora, and how does it work?`,
    content: `Ankora is a health tech solution that connects healthcare facilities, healthcare professionals, and patients. It seamlessly integrates with EMR systems, streamlines administrative tasks, offers telehealth services, and provides driven insights to enhance healthcare delivery.`
  },
  { 
    title: `How can Ankora benefit healthcare facilities and patients?`,
    content: `Ankora improves efficiency, accessibility, and personalization in healthcare. For facilities, it reduces administrative burdens and enhances patient care. For patients, it provides easy access to health information and convenient telehealth services.` 
  },
  {
    title: `What sets Ankora apart from other healthcare technology solutions?`,
    content: `What sets Ankora apart from other healthcare technology solutions?
    Ankora's unique blend of data integration, secure data transfers, and patient engagement tools make it a comprehensive and transformative solution for healthcare facilities and patients in Africa.`
  },
  {
    title: `How does Ankora integrate with our existing Electronic Medical Record (EMR) system?`,
    content: `How can healthcare facilities and patients get started with Ankora?
    Healthcare facilities can reach out to Ankora for consultation and integration support. Patients can typically access Ankora through their healthcare providers or by signing up for a patient portal provided by their facility.`
  },
  {
    title: `How can healthcare facilities and patients get started with Ankora?`,
    content: `Ankora seamlessly integrates with your EMR system using industry-standard protocols. Our technical team will work closely with your IT department to ensure a smooth integration process.`
  },
  {
    title: `Can Ankora help us reduce administrative tasks and paperwork in our facility?`,
    content: `Yes, Ankora is designed to streamline administrative workflows. It automates tasks like appointment scheduling, data entry, and patient record retrieval, allowing your staff to focus more on patient care.`
  },
  {
    title: `What kind of support and training does Ankora provide for our staff?`,
    content: `Ankora offers comprehensive onboarding, training, and 24/7 customer support. Our team will ensure that your staff is fully equipped to utilize Ankora effectively.`
  },
  {
    title: `How does Ankora handle data security and patient confidentiality?`,
    content: `Ankora prioritizes data security and complies with healthcare data privacy regulations. We implement robust encryption, access controls, and audit trails to protect patient data.`
  },
  { 
    title: `What are the benefits of Ankora's solutions for our facility?`,
    content: `Ankora's solutions enable digitized and seamless workflow. It reduces wait times, optimizes appointment scheduling, and enhances patient engagement.`
  },
];

const Index = () => {
  const desktop = useMediaQuery('(min-width: 1240px)');
  return (
    <Container className={`flex flex-col w-[100%] mt-[3.31rem] mb-[2.75rem] desktop:mb-[4.81rem] mx-auto desktop:pt-[4.47rem] desktop:pl-[3.87rem] desktop:pr-[3.5rem] desktop:pb-[4.07rem] gap-[1.18rem] desktop:gap-0 bg-white`}>
      <h1
        className={`${desktop ? nunito800.className : nunito700.className} text-4xl desktop:text-[3.625rem] leading-[2.625rem] desktop:leading-[4.25rem] text-grey-900 desktop:pb-[3.06rem]`}
      >
        Frequently Asked Questions
      </h1>
      <hr className="hidden desktop:flex bg-gradient-to-b from-[rgba(0,0,0,0.20)] via-[rgba(0,0,0,0.20)] to-[#EDE9E5]" />

      <article className="flex flex-col">
        {links.length > 0 &&
          links.map(({ title, content }, idx) => {
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

export default Index;
