import ContactComponent from "./content";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: 'Contact Us',
};

const Index = () => {
  return <ContactComponent />
};

export default Index;
