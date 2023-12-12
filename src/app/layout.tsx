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
  title: "Ankora Health Tech | We provide  technical solutions for healthcare Facilities",
  description: "We provide  technical solutions for healthcare Facilities",
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {

  return (
    <html lang="en">
      <body
        className={`flex flex-col items-center justify-between w-screen pb-[2.88rem] overflow-x-hidden ${nunito.variable}`}
      >
        <NavBar />
        <main className="w-[inherit] relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;