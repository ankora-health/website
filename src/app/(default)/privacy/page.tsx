import { Metadata } from 'next/types';
import PrivacyComponent from './content';


export const metadata: Metadata = {
  title: 'Privacy Policy',
};

const Index = () => {
  return <PrivacyComponent />
};

export default Index;
