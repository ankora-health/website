import Container from "@/components/container";
import { inter800, nunito_sans400 } from "@/styles/fonts";
import { ExternalLinks } from "./components/externalLinks";
import { EmailIcon } from "@/assets/svg/email";
import { DeviceIcon } from "@/assets/svg/device";
import { LocationIcon } from "@/assets/svg/location";
import ContactForm from "./components/contactForm";

const Index = () => {
  return (
    <div className="w-screen contact-us-background-gradient mb-[3.88rem]">
      <Container className="flex w-[100%] mr-[auto] ml-[auto] pt-[4.13rem] pb-[4.94rem] gap-[4.62rem]">
        <section className="flex flex-col w-full pt-[2.5rem]">
          <h1
            className={`${inter800.className} text-[3.625rem] leading-[4.25rem] text-grey-900 mb-[1.37rem]`}
          >
            Your hospital management dashboard
          </h1>
          <h2
            className={`${nunito_sans400.className} text-xl max-w-[45ch] mb-8`}
          >
            Ankora dashboard allows you to effectively manage your patient’s
            data; your Nurses and Doctors Schedule, and all your hospital
            facilities. Let’s work together
          </h2>
          <div className="flex flex-col gap-[1.19rem]">
            <ExternalLinks
              icon={<EmailIcon />}
              link="mailto:support@ankora.health"
              text="support@ankora.health"
            />
            <ExternalLinks
              icon={<DeviceIcon />}
              text="0809 000 9999, 0808 000 8888"
            />
            <ExternalLinks
              icon={<LocationIcon />}
              text="Victoria Island, Lagos, Nigeria"
            />
          </div>
        </section>
        <section className="flex flex-col w-full">
          <ContactForm />
        </section>
      </Container>
    </div>
  );
};

export default Index;
