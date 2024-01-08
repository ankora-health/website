import React from "react";
import { nunito400 } from "@/styles/fonts";

interface ExternalLinkProps {
  icon: React.ReactElement;
  link?: string;
  text?: string;
}

export const ExternalLinks: React.FC<ExternalLinkProps> = ({
  icon,
  link,
  text,
}) => {
  return (
    <div className="flex gap-[1.06rem]">
      <div className="min-w-[2.125rem] min-h-[2.125rem] bg-grey-900 rounded-[1.3125rem] flex justify-center items-center">
        {icon}
      </div>
      {link && text && (
        <a
          href={link}
          className={`${nunito400.className} text-xl text-grey-900`}
        >
          {text}
        </a>
      )}
      {text && !link && (
        <span className={`${nunito400.className} text-xl text-grey-900`}>
          {text}
        </span>
      )}
    </div>
  );
};
