import FaqComponent from "./content";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
};

const Index = () => {
  return <FaqComponent />
};

export default Index;
