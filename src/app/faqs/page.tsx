import Accordion from "@/components/accordion";
import Container from "@/components/container";
import { inter800 } from "@/styles/fonts";

const links = [
  { title: `What is Ankora, and how does it work?` },
  { title: `How can Ankora benefit healthcare facilities and patients?` },
  {
    title: `What sets Ankora apart from other healthcare technology solutions?`,
  },
  {
    title: `How does Ankora integrate with our existing Electronic Medical Record (EMR) system?`,
  },
  {
    title: `How can healthcare facilities and patients get started with Ankora?`,
  },
  {
    title: `Can Ankora help us reduce administrative tasks and paperwork in our facility?`,
  },
  {
    title: `What kind of support and training does Ankora provide for our staff?`,
  },
  {
    title: `How does Ankora handle data security and patient confidentiality?`,
  },
  { title: `What are the benefits of Ankora's solutions for our facility?` },
];

const article = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vitae, accusamus ab officiis consequuntur ad officia eos obcaecati tempora autem suscipit at modi sapiente sed adipisci quasi pariatur laboriosam ratione. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis laboriosam, temporibus porro accusamus veniam ipsum ex, alias vitae harum consectetur blanditiis minus, optio commodi beatae tempora dolore. Laborum, aut explicabo? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto sapiente odit maiores dicta tempore quae error alias, quos reprehenderit iste rerum culpa eveniet, minus qui! Odit sed iusto reiciendis voluptates Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia quia a dolores quam aliquam exercitationem, dolorum molestias minima ullam? Accusamus corporis sequi aliquam error nulla dolores reiciendis iusto vero itaque!`;

const Index = () => {
  return (
    <Container className="flex flex-col w-[100%] mt-[3.31rem] mb-[4.81rem] mr-[auto] ml-[auto] pt-[4.47rem] pl-[3.87rem] pr-[3.5rem] pb-[4.07rem]">
      <h1
        className={`${inter800.className} text-[3.625rem] leading-[4.25rem] text-grey-900 pb-[3.06rem]`}
      >
        Frequently Asked Questions
      </h1>
      <hr className="bg-gradient-to-b from-[rgba(0,0,0,0.20)] via-[rgba(0,0,0,0.20)] to-[#EDE9E5]" />

      <article className="flex flex-col">
        {links.length > 0 &&
          links.map(({ title }, idx) => {
            return (
              <Accordion key={idx} title={title} id={`accordion-${idx}`}>
                {article}
              </Accordion>
            );
          })}
      </article>
    </Container>
  );
};

export default Index;
