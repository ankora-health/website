import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className, ...props }) => {
  return <div className={`desktop:container -:desktop:px-0 -:px-5 ${className}`} {...props}>
    {children}
  </div>;
};

export default Container;
