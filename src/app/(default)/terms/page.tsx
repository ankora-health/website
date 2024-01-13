import TermsComponent from './content';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Terms of Use',
};

const Index = () => {
  return <TermsComponent />
};

export default Index;