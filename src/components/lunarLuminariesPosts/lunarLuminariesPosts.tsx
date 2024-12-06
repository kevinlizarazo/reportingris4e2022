import React, { FunctionComponent } from "react";
import { PostSnippet } from "../../types";
import { PostList } from "../postList";

export interface LunarLuminariesPosts {
  lunarLuminariesPosts: PostSnippet[];
}

export const LunarLuminariesPosts: FunctionComponent<LunarLuminariesPosts> = ({
  lunarLuminariesPosts,
}) => {
  return (
    <div className="relative py-0 px-4">
      <div className="relative max-w-7xl mx-auto" style={{borderBottom: "1px solid lightgrey"}}>
        <h2 className="text-4xl leading-9 tracking-tight font-semibold font-sans text-gray-900 sm:leading-10 text-center my-12">
          Lunar Luminaries
        </h2>
        <PostList posts={lunarLuminariesPosts} />
      </div>
    </div>
  );
};
