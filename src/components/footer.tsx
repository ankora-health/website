import React from "react";
import Container from "./container";
import Button from "./button";
import NavLink from "./navLink";
import { nunito400, nunito600, nunito700 } from "@/styles/fonts";
import { FacebookIcon, InstagramIcon, LinkedInIcon, XIcon } from "@/assets/svg";

interface Props {
  href: string;
  label: string;
}

interface IconProps {
  href: string;
  icon: React.ReactElement;
}

interface NavigationProps {
  links: Props[];
  title: string;
}

const links: Props[] = [
  { href: `/about`, label: `About Us` },
  { href: `/contact`, label: `Contact Us` },
  { href: `/#features`, label: `Features` },
  { href: `/faqs`, label: `FAQ's` },
  { href: `/privacy`, label: `Privacy Policy` },
  { href: `/terms`, label: `Terms of Use` },
];

const linkIcons: IconProps[] = [
  { href: `#`, icon: <FacebookIcon /> },
  { href: `#`, icon: <XIcon /> },
  { href: `#`, icon: <LinkedInIcon /> },
  { href: `#`, icon: <InstagramIcon /> },
];

const Navigation: React.FC<NavigationProps> = ({ links, title }) => {
  return (
    <div className="flex flex-col gap-[0.31]">
      <span className={`leading-[1.875rem] ${nunito600.className} text-base`}>
        {title}
      </span>
      {links.length > 0 &&
        links.map(({ href, label }, idx) => {
          return (
            <NavLink
              styleActive={false}
              key={idx}
              className={`${nunito400.className} text-sm leading-[1.875rem]`}
              href={href}
            >
              {label}
            </NavLink>
          );
        })}
    </div>
  );
};

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Container className="flex justify-between items-center">
      <footer className="w-screen flex justify-between flex-col px-5 desktop:px-[3.12rem] desktop:pt-[3.56rem] pt-[3.38rem] pb-[0.62rem] bg-footer rounded-[1.5625rem]">
        <div className="flex justify-between w-full flex-col desktop:flex-row ">
          <div className="flex desktop:max-w-[50ch] max-w-full flex-col desktop:mb-[6.125rem] mb-[2.06rem]">
            <p
              className={`${nunito700.className} desktop:text-[1.75rem] text-2xl leading[2.76175rem] text-primary mb-[0.31rem]`}
            >
              Experience the Future of Endless Possibilities with Ankora!
            </p>
            <span
              className={`${nunito400.className} text-grey-700 text-sm mb-[1.94rem] leading-[1.375rem]`}
            >
              We provide more than just healthcare solutions but redefine the
              experience for Patients and Caregivers
            </span>
            <Button className="desktop:text-xl w-max">
              Get Started
            </Button>
          </div>
 
          <div className="flex w-max gap-[4.94rem] desktop:gap-[6.69rem] pb-[1.44rem]">
            <Navigation title="Company" links={links.slice(0, 3)} />
            <Navigation title="Learn More" links={links.slice(3, 6)} />
          </div>
        </div>

        <div className="border-solid border-grey-300 border-t py-[1.25rem] flex justify-between w-full items-center flex-wrap-reverse desktop:gap-8 gap-[0.62rem]">
          <div className="flex gap-[0.31rem] md:gap-[2.38rem] flex-col basis-full md:flex-row md:basis-auto">
            {links.length > 0 &&
              links.slice(4, 7).map(({ href, label }, idx) => {
                return (
                  <NavLink
                    styleActive={false}
                    key={idx}
                    className={`${nunito400.className} flex text-sm text-grey-700 leading-[1.875rem]`}
                    href={href}
                  >
                    {label}
                  </NavLink>
                );
              })}
            <p
              className={`${nunito400.className} text-sm text-grey-700 leading-[1.875rem]`}
            >
              &copy; {year} Ankora Health Technologies Inc. All rights reserved.
            </p>
          </div>
          <div className="flex gap-[0.62rem]">
            {linkIcons.length > 0 &&
              linkIcons.map(({ href, icon }, idx) => {
                return (
                  <a
                    className="flex p-[0.3125rem] rounded-[0.3125rem] items-center justify-center border-solid border-[#FFE2BB] border"
                    key={idx}
                    href={href}
                  >
                    {icon}
                  </a>
                );
              })}
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
