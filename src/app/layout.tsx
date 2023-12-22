import React from "react";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Ankora Health | Connecting the healthcare dots",
  description: "We provide  technical solutions for healthcare Facilities. Our commitment to innovation, accessibility, and data security drives us to continually enhance our services.",
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {

  return (
    <html lang="en">
      <body
        className={`flex flex-col items-center justify-between w-screen pb-[2.88rem] overflow-x-clip max-w-[1440px] desktop:mx-auto ${nunito.variable}`}
      >
        <NavBar />
        <main className="w-[inherit] relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;