"use client";
import parse from 'html-react-parser';
import Container from "@/components/container";
import NavLink from "@/components/navLink";
import useHash from "@/hooks/useHash";
import useMediaQuery from "@/hooks/useMediaQuery";
import { nunito800, nunito600, nunito400, nunito700 } from "@/styles/fonts";
import { terms } from "./terms";


const Index = () => {
  const { hash, setHash } = useHash();
  const desktop = useMediaQuery('(min-width: 1240px)');

  return (
    <Container className="flex flex-col w-[100%] pt-[3.5rem] desktop:pt-[7.81rem] mx-[auto]">
      <h1
        className={`${desktop ? nunito800.className : nunito700.className} text-4xl desktop:text-[3.625rem] leading-[2.625rem] desktop:leading-[4.25rem] text-grey-900 desktop:pb-[3.06rem]`}
      >
        Terms Of Use
      </h1>
      <p className={`${nunito400.className} text-grey-700 text-base leading-[1.5rem] desktop:text-xl desktop:leading-[2.04625rem] pb-5`}>
        Welcome to our Terms and Conditions of Use. It might be alluring to overlook these Terms of Service, yet it’s crucial to define the expectations regarding your use of Ankora’s services and what we anticipate from you.
      </p>
      <hr className="hidden desktop:block bg-gradient-to-b from-[rgba(0,0,0,0.20)] via-[rgba(0,0,0,0.20)] to-[#EDE9E5]" />

      <section className="flex justify-between pt-[1.8rem] desktop:pt-[4.12rem] gap-[2.38rem] mb-[2.56rem]">
        <div className="hidden desktop:flex flex-col gap-[1.44rem] min-w-[29.4375rem] relative">
          <h2
            className={`${nunito600.className} text-base uppercase leading-[1.875rem] text-[#FFB341] sticky top-0 bg-white`}
          >
            sections
          </h2>
          <ul className="flex flex-col gap-[0.44rem]">
            {terms.map(({ href, label }, idx) => {
                const isActive = href === hash;
                const activeStyles = "bg-accent-25 rounded-lg";

                return (
                  <li key={idx}>
                    <NavLink
                      onClick={() => setHash(href)}
                      className={`${nunito400.className} ${isActive ? activeStyles : ""
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
        <div className="flex flex-col gap-[3.06rem] desktop:max-h-[55rem] desktop:overflow-y-auto desktop:no-scrollbar">
          {terms.map(({ href, label, content }, idx) => {
            return (
              <article
                key={idx}
                id={href.substring(1)}
                className="flex flex-col text-justify gap-[0.94rem]"
              >
                <h3
                  className={`text-grey-900 text-[1.75rem] text-left desktop:text-[2rem] ${nunito600.className} desktop:leading-[2.40625rem]`}
                >
                  {`${idx + 1}. ${label}`}
                </h3>
                <div
                  className={`${nunito400.className} text-grey-700 text-base leading-[1.5rem] desktop:text-xl desktop:leading-[2.04625rem] [&>li]:list-disc [&>h6]:font-bold [&>h6]:pt-2`}
                >
                  {parse(content)}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </Container>
  );
};

export default Index;