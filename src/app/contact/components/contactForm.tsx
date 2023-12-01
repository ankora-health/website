import Button from "@/components/button";
import { Input } from "@/components/input";
import { TextArea } from "@/components/textArea";
import { inter800 } from "@/styles/fonts";

const ContactForm = () => {
  return (
    <form className="flex p-[2.5rem] bg-white rounded-[1.5626rem]">
      <fieldset className="flex flex-col gap-[1.88rem]">
        <h3
          className={`${inter800.className} leading-[2.875rem] text-[2.3125rem]`}
        >
          Contact Us
        </h3>

        <div className="flex gap-[3.06rem]">
          <Input label="First Name" placeholder="Jane" />
          <Input label="Last Name" placeholder="Danielle" />
        </div>

        <div className="flex gap-[3.06rem]">
          <Input label="Email Address" placeholder="@gmail.com" />
          <Input label="Phone Number" placeholder="080 000 0000" />
        </div>

        <TextArea
          rows={6}
          label="Message"
          placeholder="Type your message here"
        />

        <Button className="w-[15.625rem]">Send</Button>
      </fieldset>
    </form>
  );
};

export default ContactForm;
