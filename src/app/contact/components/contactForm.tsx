import Button from "@/components/button";
import { Input } from "@/components/input";
import { TextArea } from "@/components/textArea";
import { inter800 } from "@/styles/fonts";

const ContactForm = () => {
  return (
    <form className="flex desktop:p-[2.5rem] p-[1.56rem] bg-white rounded-[1.5626rem]">
      <fieldset className="flex flex-col desktop:gap-[1.88rem] gap-5 w-full">
        <h3
          className={`${inter800.className} leading-[2.875rem] text-2xl desktop:text-[2.3125rem]`}
        >
          Contact Us
        </h3>

        <div className="flex flex-col desktop:flex-row desktop:gap-[3.06rem] gap-5">
          <Input label="First Name" placeholder="Jane" />
          <Input label="Last Name" placeholder="Danielle" />
        </div>

        <div className="flex gap-5 desktop:gap-[3.06rem] flex-col desktop:flex-row">
          <Input label="Email Address" placeholder="@gmail.com" />
          <Input label="Phone Number" placeholder="080 000 0000" />
        </div>

        <TextArea
          rows={6}
          label="Message"
          placeholder="Type your message here"
        />

        <Button className="w-full desktop:w-[15.625rem]">Send</Button>
      </fieldset>
    </form>
  );
};

export default ContactForm;
