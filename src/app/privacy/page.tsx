"use client";
import Container from "@/components/container";
import NavLink from "@/components/navLink";
import useHash from "@/hooks/useHash";
import { inter800, nunito600, nunito_sans400 } from "@/styles/fonts";

const links = [
  { 
    href: "#introduction", 
    label: "Introduction",
    content: `ANKORA HEALTH LIMITED  (“The Company”, “we” “our” “us”) values your privacy and the security of the information you share with us. This Privacy Policy explains how we collect, use, disclose and safeguard the information we obtain from you in relation to your use of our website, and application (“Platform”). ThisPrivacy Policy applies to our website [ www.ankora.health ] and all related sites, mobile applications, services, and tools regardless of how you access or use them. By using our Platform, you consent to the terms and practices contained in thisPrivacy Policy and you grant us the right to collect and process your data in accordance with the terms of this Policy. For the purposes of clarity, “User,” “customer,”, or “subscriber,” refers to visitors to our website. “Personal Information,” or “Personal Data,” means any information that identifies or can be used to identify a User, directly or indirectly, including, but not limited to name, email address, mobile number, photograph, or IP address.`
  },
  { 
    href: "#information_we_collect", 
    label: "Information we collect",
    content: `When you use our Platform, we may collect certain types of information aboutyou including the following:Information you provide to us We collect personal information about prospective clients and their beneficialowners   or   controllers   as   part   of   business   development   initiatives   and   ourbusiness acceptance process. This includes but is not limited to your personaldata (such as your full name, nationality, phone number(s), email address, dateof birth, home or office addresses, and location.Information collected automaticallyThis includes but is not limited to your IP address, browser type, mobile deviceID,   device   type,   operating   system   version,   connection   information,   mobilenetwork information, location derived from GPS-enabled services, informationbased on your usage of the service such as time, date and duration of your use,referral   URLs,   search   terms   and   search   history,   browsing   history   andadvertisement interactions.Information we obtain from 3rd PartiesWe may retrieve additional personal information about you from third partiesand other identification/verification services such as your financial institution andpayment processor. With your consent, we may also collect additional PersonalInformation   in   other   ways   including   emails,   surveys,   and   other   forms   ofcommunication. We will not share or disclose your Personal Information with a
    third party without your consent except as may be required for the purpose ofproviding you with our services or under applicable legislation.In providing you with our services, we may rely on third-party servers located inforeign jurisdictions from time to time, which as a result, may require thetransfer or maintenance of your personally identifiable information on computersor servers in foreign jurisdictions. We will endeavour to ensure that such foreignjurisdictions have data protection legislation that is no less than the existing dataprotection   regulations   in   force   in   Nigeria   and   your   personally   identifiableinformation is treated in a safe and secure manner.
    `
  },
  { 
    href: "#why_we_collect_yourInformation", 
    label: "Why we collect your Information",
    content: `We collect your information to ensure your easy and seamless access to ourservices. We use the information we collect for the following purposes:i. To enable us to provide you with a personalized experience of ourproduct and services.ii. To communicate with you and provide you with information on ourprogrammes and initiatives, such marketing content, newsletters andservice   update.   However,   we   will   provide   you   with   an   option   tounsubscribe if you do not want to hear from usiii. To provide support services to you.iv. To analyse and understand your use of our products and services.v. To protect against illegal, malicious, and fraudulent activity.vi. To analyse and improve the quality of our services and offerings.vii. To facilitate your interactions with our social media platforms.viii. To analyse and learn about our users’ demographics, interests, andbehaviour.ix. To identify and repair errors and bugs on our websites.x. To facilitate dissemination of information about our services and ourpartners`
  },
  { 
    href: "#sharing_your_information_with_third_parties", 
    label: "Sharing your Information With Third Parties",
    content: `We may sometimes share the information we have collected from you with thirdparties. These third parties include our affiliates, subsidiaries, partners, third-party vendors and suppliers who render services for us or on our behalf and ourprofessional advisers (such as our auditors, accountants, lawyers, etc.). We mayshare the information to facilitate the seamless delivery of our services or incompliance with applicable legal requirements and assisting law enforcementagencies   by   responding   to   requests   for   the   disclosure   of   information   inaccordance with local laws.` 
  },
  { 
    href: "#cookie_policy", 
    label: "Cookie Policy",
    content: `We use cookies to identify you as a User and make your user experience easier,customise our services, content and advertising; help you ensure that youraccount security is not compromised, mitigate risk and prevent fraud; and topromote trust and safety on our website. Cookies allow our servers to rememberIP addresses, date and time of visits, monitor web traffic and prevent fraudulentactivities. Our cookies never store personal or sensitive information; they simply hold aunique random reference to you so that once you visit the site we can recognizewho you are and provide certain content to you.If your browser or browser add-on permits, you have the choice to disablecookies on our website, however this may impact your experience using our website` 
  },
  { 
    href: "#governing_principles_of_data_processing", 
    label: "Governing Principles of Data Processing",
    content: `We process your information in accordance with the provisions of the NigeriaData Protection Regulation (NDPR) and these principles:i. Your personal data is collected and processed in accordance withspecific, legitimate and lawful purpose consented to by you, providedthat further processing may be done by archiving the data for publicinterest, scientific or research purposes, or statistical purposes.ii. The data collected is adequate, accurate and without prejudice to thedignity of the human person.iii. The data collected is stored only for the period within which it isreasonably needed.iv. The data collected is secured against all foreseeable hazards andbreaches   such   as   theft,   cyberattack,   viral   attack,   dissemination,manipulations of any kind, damage by rain, fire or exposure to othernatural elements.v. We owe a duty of care to you in respect of the data we have obtainedfrom you.` 
  },
  { 
    href: "#selector7", 
    label: "Data Security and Protection",
    content: `` 
  },
  { 
    href: "#selector8", 
    label: "Links to Third Party Websites",
    content: `` 
  },
  { 
    href: "#selector9", 
    label: "Your Privacy Rights",
    content: `` 
  },
  { 
    href: "#selector10", 
    label: "International Transfer of your Information",
    content: `` 
  },
  { 
    href: "#selector11", 
    label: "Data Retention Period",
    content: `` 
  },
  { 
    href: "#selector12", 
    label: "Contact details",
    content: `` 
  },
  { 
    href: "#selector13", 
    label: "Updates to this Policy",
    content: `` 
  },
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
        <div className="flex flex-col gap-[1.44rem] min-w-[29.4375rem] relative">
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
                      className={`${nunito_sans400.className} ${isActive ? activeStyles : ""
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
        <div className="flex flex-col gap-[3.06rem] max-h-[48rem] overflow-y-auto no-scrollbar">
          {links.length > 0 &&
            links.map(({ href, label, content }, idx) => {
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
                    {content || article}
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
