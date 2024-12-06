import React, { FunctionComponent } from "react";
import { PostSnippet } from "../../types";
import { PostList } from "../postList";

export interface PlanetaryProtegesPosts {
  planetaryProtegesPosts: PostSnippet[];
}

export const PlanetaryProtegesPosts: FunctionComponent<PlanetaryProtegesPosts> = ({
  planetaryProtegesPosts,
}) => {
  return (
    <div className="relative py-6 pb-0 px-4">
      <div className="relative max-w-7xl mx-auto" style={{borderBottom: "1px solid lightgrey"}}>
        <h2 className="text-4xl leading-9 tracking-tight font-semibold font-sans text-gray-900 sm:leading-10 text-center my-12">
          Planetary Proteges
        </h2>
        <PostList posts={planetaryProtegesPosts} />
      </div>
    </div>
  );
};
