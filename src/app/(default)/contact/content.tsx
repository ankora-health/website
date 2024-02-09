'use client'
import Container from "@/components/container";
import { nunito800, nunito400, nunito700 } from "@/styles/fonts";
import { ExternalLinks } from "./components/externalLinks";
import { EmailIcon } from "@/assets/svg/email";
import { DeviceIcon } from "@/assets/svg/device";
import { LocationIcon } from "@/assets/svg/location";
import useMediaQuery from "@/hooks/useMediaQuery";
import Calendly from "./components/calendly";
import { m } from "framer-motion";


const ContactComponent = () => {
  const desktop = useMediaQuery('(min-width: 1240px)');
  return (
    <div className="w-screen contact-us-background-gradient mb-[3.88rem]">
      <Container className="flex flex-col desktop:flex-row w-[100%] mx-[auto] pt-14 desktop:pt-[4.13rem] pb-[4.94rem] gap-5 desktop:gap-[4.62rem]">
        <section className="flex flex-col w-full pt-0 desktop:pt-[2.5rem] gap-5">
          <m.h1
            initial={{ opacity: 0, y: '50px' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }} 
            className={`${desktop ? nunito800.className : nunito700.className} text-[2.25rem] desktop:text-[3.625rem] leading-[2.625rem] desktop:leading-[4.25rem] text-grey-900 desktop:mb-[1.37rem] mb-0`}
          >
            Your hospital management dashboard
          </m.h1>
          <m.h2
            initial={{ opacity: 0, y: '50px' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }} 
            className={`${nunito400.className} text-xl max-w-[45ch] desktop:mb-8 mb-0`}
          >
            Ankora dashboard allows you to effectively manage your patient’s
            data; your Nurses and Doctors Schedule, and all your hospital
            facilities. Let’s work together!
          </m.h2>
          <m.div 
            initial={{ opacity: 0, x: '-100px' }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }} 
            className="flex flex-col gap-[1.19rem]"
          >
            <ExternalLinks
              icon={<EmailIcon />}
              link="mailto:support@ankora.health"
              text="support@ankora.health"
            />
            <ExternalLinks
              icon={<DeviceIcon />}
              text="0816 274 0774, 0701 426 1943"
            />
            <ExternalLinks
              icon={<LocationIcon />}
              text="Victoria Island, Lagos, Nigeria"
            />
          </m.div>
        </section>
        <section className="flex flex-col w-full">
          <Calendly />
        </section>
      </Container>
    </div>
  );
};

export default ContactComponent;
