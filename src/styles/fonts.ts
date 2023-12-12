import { Nunito } from "next/font/google";

const nunito400 = Nunito({ 
  subsets: ["latin"], 
  weight: "400", 
  variable: "--font-nunito-400" 
});

const nunito500 = Nunito({ 
  subsets: ["latin"], 
  weight: "500", 
  variable: "--font-nunito-600" 
});

const nunito600 = Nunito({ 
  subsets: ["latin"], 
  weight: "600", 
  variable: "--font-nunito-600" 
});

const nunito700 = Nunito({ 
  subsets: ["latin"], 
  weight: "700", 
  variable: "--font-nunito-700" 
});

const nunito800 = Nunito({ 
  subsets: ["latin"], 
  weight: "800", 
  variable: "--font-nunito-800" 
});

export {
  nunito400,
  nunito500,
  nunito600,
  nunito700,
  nunito800
};
