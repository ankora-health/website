"use client";
import Container from "@/components/container";
import NavLink from "@/components/navLink";
import useHash from "@/hooks/useHash";
import { inter800, nunito600, nunito_sans400 } from "@/styles/fonts";

const links = [
  { href: "#selector1", label: "Introduction" },
  { href: "#selector2", label: "Information we collect" },
  { href: "#selector3", label: "Why we collect your Information" },
  { href: "#selector4", label: "Sharing your Information With Third Parties" },
  { href: "#selector5", label: "Cookie Policy" },
  { href: "#selector6", label: "Governing Principles of Data Processing" },
  { href: "#selector7", label: "Data Security and Protection" },
  { href: "#selector8", label: "Links to Third Party Websites" },
  { href: "#selector9", label: "Your Privacy Rights" },
  { href: "#selector10", label: "International Transfer of your Information" },
  { href: "#selector11", label: "Data Retention Period" },
  { href: "#selector12", label: "Contact details" },
  { href: "#selector13", label: "Updates to this Policy" },
];

const article = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vitae, accusamus ab officiis consequuntur ad officia eos obcaecati tempora autem suscipit at modi sapiente sed adipisci quasi pariatur laboriosam ratione. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis laboriosam, temporibus porro accusamus veniam ipsum ex, alias vitae harum consectetur blanditiis minus, optio commodi beatae tempora dolore. Laborum, aut explicabo? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto sapiente odit maiores dicta tempore quae error alias, quos reprehenderit iste rerum culpa eveniet, minus qui! Odit sed iusto reiciendis voluptates Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia quia a dolores quam aliquam exercitationem, dolorum molestias minima ullam? Accusamus corporis sequi aliquam error nulla dolores reiciendis iusto vero itaque!`;

const Index = () => {
  const { hash, setHash } = useHash();

  return (
    <Container className="flex flex-col w-[100%] pt-[7.81rem] mr-[auto] ml-[auto]">
      <h1
        className={`${inter800.className} text-[3.625rem] leading-[4.25rem] text-grey-900 pb-[3.06rem]`}
      >
        Privacy Policy
      </h1>
      <hr className="bg-gradient-to-b from-[rgba(0,0,0,0.20)] via-[rgba(0,0,0,0.20)] to-[#EDE9E5]" />

      <section className="flex justify-between pt-[4.12rem] gap-[2.38rem] mb-[2.56rem]">
        <div className="flex flex-col gap-[1.44rem] min-w-[29.4375rem] max-h-[40.52rem] overflow-y-auto relative pr-2">
          <h2
            className={`${nunito600.className} text-base uppercase leading-[1.875rem] text-[#FFB341] sticky top-0 bg-white`}
          >
            sections
          </h2>
          <ul className="flex flex-col gap-[0.44rem]">
            {links.length > 0 &&
              links.map(({ href, label }, idx) => {
                const isActive = href === hash;
                const activeStyles = "bg-accent-25 rounded-lg";

                return (
                  <li key={idx}>
                    <NavLink
                      onClick={() => setHash(href)}
                      className={`${nunito_sans400.className} ${
                        isActive ? activeStyles : ""
                      } flex leading-[1.875rem] text-grey-900 text-xl px-[0.5rem] py-[0.625rem] w-full`}
                      href={href}
                    >
                      {label}
                    </NavLink>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="flex flex-col gap-[3.06rem] max-h-[40.52rem] overflow-y-auto pr-2">
          {links.length > 0 &&
            links.map(({ href, label }, idx) => {
              return (
                <article
                  key={idx}
                  id={href.substring(1)}
                  className="text-justify gap-[0.94rem]"
                >
                  <h3
                    className={`text-grey-900 text-[2rem] ${nunito600.className} leading-[2.40625rem]`}
                  >
                    {`${idx + 1}. ${label}`}
                  </h3>
                  <p
                    className={`${nunito_sans400.className} text-grey-700 text-xl leading-[2.04625rem]`}
                  >
                    {article}
                  </p>
                </article>
              );
            })}
        </div>
      </section>
    </Container>
  );
};

export default Index;
