import React, { FunctionComponent } from "react";
import Image from "gatsby-image";
import { PostSnippet } from "../../types";

export interface FeaturePosts {
  featurePosts: PostSnippet[];
}

export const FeaturePost: FunctionComponent<PostSnippet> = ({
  title,
  summary,
  href,
  img,
  imgAlt,
  tags,
}) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <a href={href}>
          <Image
            fluid={img}
            alt={imgAlt || title}
            className="h-48 w-full object-cover"
          />
        </a>
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm leading-5 font-medium text-black">
            <span>By </span>
            {tags.map((tag, index) => (
              <span key={index}>
                <a href={`/tags/${tag}`} className="text-indigo-600 hover:underline">
                  {tag}
                </a>{" "}
              </span>
            ))}
          </p>
          <a href={href} className="block">
            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
              {title}
            </h3>
            <p className="mt-3 text-base leading-6 text-gray-500">{summary}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export const TopFeaturePost: FunctionComponent<PostSnippet> = ({
  title,
  summary,
  href,
  img,
  imgAlt,
}) => {
  return (
    <div className="">
      <a href={href}>
        <Image
          fluid={img}
          alt={imgAlt || title}
          className="h-144 w-full object-cover rounded"
        />
        <h1 className="text-4xl text-center my-3 font-sans text-white">{title}</h1>
        <div className="font-serif mb-16 mx-auto text-lg text-white max-w-6xl">
          {summary}
          <div className="mt-8 text-center">
            <a href={href} className="block font-medium tracking-wide font-sans">
              Read More <span className="material-symbols-outlined align-bottom">read_more</span>
            </a>
          </div>
        </div>
      </a>
    </div>
  );
};

export const FeaturePosts: FunctionComponent<FeaturePosts> = ({
  featurePosts,
}) => {
  const [topPost, ...otherFeature] = featurePosts;
  return (
    <div className="relative py-6 mx-auto px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="relative max-w-7xl mx-auto">
        <TopFeaturePost {...topPost} />
        <h2 className="text-4xl leading-9 tracking-tight font-semibold font-sans text-white sm:leading-10 text-center mt-3 mb-8">
          Featured Stories
        </h2>
        <div className="mt-3 grid gap-5 xl:gap-10 max-w-lg mx-auto grid-cols-1 md:grid-cols-3 md:max-w-none">
          {otherFeature.map((featurePost, index) => (
            <FeaturePost {...featurePost} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
