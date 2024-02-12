"use client";
import React from "react";
import { LazyMotion, domAnimation } from "framer-motion";

interface MotionProps {
  children: React.ReactNode;
}


const Motion: React.FC<MotionProps> = ({ children }) => {
  return (
    <LazyMotion features={domAnimation}>
      {children}
    </LazyMotion>
  );
};

export default Motion;