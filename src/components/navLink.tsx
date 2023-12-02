"use client";
import { nunito400, nunito600 } from "@/styles/fonts";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  styleActive?: boolean;
  activeClassStyles?: string;
}

const NavLink: React.FC<NavLinkProps> = ({
  children,
  styleActive = true,
  className: externalClassName = "", 
  activeClassStyles = "",
  ...props
}) => {
  const pathname = usePathname();
  const isActive = pathname === props.href;
  const defaultStyles =
    isActive && styleActive
      ? `${nunito600.className} text-[#FFB341]`
      : `${nunito400.className} text-black`;

  const combinedClassName = `text-base ${defaultStyles} ${
    isActive && styleActive && activeClassStyles
  } ${externalClassName}`;

  return (
    <Link className={combinedClassName} {...props}>
      {children}
    </Link>
  );
};

export default NavLink;
