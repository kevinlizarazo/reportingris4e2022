import React, { FunctionComponent } from "react";
import Helmet from "react-helmet";
import { withPrefix } from "gatsby";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { Header, MenuItem } from "./header";
import { Footer } from "./footer";
import icon from "../../../static/logo.png";

const logo = <img className="w-auto h-15" src={icon} alt="Workflow" />;
const menuItems: MenuItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "School of Communication and Journalism",
    href: "https://www.stonybrook.edu/journalism/"
  },
  {
    label: "RISE2",
    href: "https://www.stonybrook.edu/commcms/rise2/"
  }
];

const footer = {
  copyrightOwner: "GEEK SG",
  linkedin: "https://www.linkedin.com/in/raymondyeh/",
  github: "https://github.com/yehjxraymond",
  instagram: "https://www.instagram.com/geek.sg/",
};

export const Layout: FunctionComponent = ({ children }) => {
  const { title } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ffffff"
        />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lora&family=Red+Hat+Display:ital,wght@0,400;0,500;0,600;1,400;1,600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <meta name="theme-color" content="#fff" />
      </Helmet>
      <Header menuItems={menuItems} logo={logo} />
      <div className="min-h-screen">
        {/* <div className="bg-gray-800"><div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div></div> */}
        <div className="">{children}</div>
      </div>
      {/* <Footer {...footer} /> */}
    </>
  );
};

export default Layout;
