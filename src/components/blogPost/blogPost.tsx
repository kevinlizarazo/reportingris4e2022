import React, { FunctionComponent } from "react";
import { format } from "date-fns";
import Image, { FluidObject } from "gatsby-image";
import { Layout } from "../../components/layout";

interface BlogPost {
  title: string;
  tags: string[];
  img: FluidObject;
  imgAlt?: string;
  publishedDate: Date;
}

export const BlogPost: FunctionComponent<BlogPost> = ({
  title,
  tags,
  img,
  imgAlt,
  publishedDate,
  children,
}) => {
  return (
    <Layout>
      <div className="px-5">
        <h1 className="text-3xl sm:text-5xl text-center font-semibold mt-8 mb-2">
          {title}
        </h1>
        <div className="text-center mb-3 text-gray-500">
          April 2022
        </div>
        <Image fluid={img} alt={imgAlt || title} className="w-full" />
        {imgAlt && (
          <div className="text-center my-2 text-gray-500">{imgAlt}</div>
        )}
        <div className="flex justify-center">
          <div className="max-w-screen-lg">
            <div className="mt-3 text-gray-500 uppercase">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm leading-5 font-medium text-indigo-600"
                >By
                  <a href={`/tags/${tag}`}> {tag}</a>
                </span>
              ))}
            </div>
            <div className="prose sm:prose-lg md:prose-xl text-gray-700">
              {children}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
