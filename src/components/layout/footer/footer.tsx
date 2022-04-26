import React, { FunctionComponent } from "react";

export interface Footer {
  copyrightOwner: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  github?: string;
  dribble?: string;
  linkedin?: string;
}

export const Footer: FunctionComponent<Footer> = ({
  copyrightOwner,
  facebook,
  instagram,
  twitter,
  github,
  dribble,
  linkedin,
}) => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base leading-6 text-gray-400">
            © {new Date().getFullYear()} ReportingRISE. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
