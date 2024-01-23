import React from "react";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {

  return (
    <>
      <NavBar />
      <main className="w-[inherit] relative">{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;