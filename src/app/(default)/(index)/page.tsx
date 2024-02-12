import IndexComponent from "./content";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: 'Home',
};

const Index = () => {
  return <IndexComponent />
};

export default Index;
