import React from "react";
import { storiesOf } from "@storybook/react";
import { Footer } from "./footer";

const story = storiesOf("Components|Layout", module);

const data: Footer = {
  copyrightOwner: "",
  facebook: "https://www.facebook.com/sbujournalism/",
  instagram: "https://www.instagram.com/sbujournalism/",
  twitter: "https://twitter.com/SBUjournalism",
};

story.add("Footer", () => <Footer {...data} />);
