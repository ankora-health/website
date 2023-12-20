import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={`desktop:container -:desktop:px-0 -:px-5 ${className}`}>
    {children}
  </div>;
};

export default Container;
