import React, { FunctionComponent } from "react";
import { PostSnippet } from "../../types";
import { PostList } from "../postList";

export interface StarAcademicsPosts {
  starAcademicsPosts: PostSnippet[];
}

export const StarAcademicsPosts: FunctionComponent<StarAcademicsPosts> = ({
  starAcademicsPosts,
}) => {
  return (
    <div className="relative py-0">
      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-4xl leading-9 tracking-tight font-semibold font-sans text-gray-900 sm:leading-10 text-center my-12">
          Star Academics
        </h2>
        <PostList posts={starAcademicsPosts} />
      </div>
    </div>
  );
};
