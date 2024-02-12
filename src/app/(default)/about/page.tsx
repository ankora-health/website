import { Metadata } from "next/types";
import AboutComponent from "./aboutComponent";

export const metadata: Metadata = {
  title: 'About Us',
};

const Index = () => {
  return <AboutComponent />
};

export default Index;
