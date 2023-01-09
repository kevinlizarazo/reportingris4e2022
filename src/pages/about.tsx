import React, { FunctionComponent } from "react";
import { format } from "date-fns";
import Image, { FluidObject } from "gatsby-image";
import { Layout } from "../components/layout";

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
      <div className="">
        <h1 className="text-3xl sm:text-5xl text-center font-semibold mt-8 mb-2">
          About Reporting RISE2
        </h1>
        
        
        <div className="flex justify-center">
          <div className="max-w-screen-lg">
            <div className="prose sm:prose-lg md:prose-xl text-gray-700">
            <p>When Stony Brook University geoscientist Timothy Glotch was putting together the pieces for his Remote In Situ and Synchrotron Studies for Science and Exploration (RIS4E) grant proposal to NASA in 2013, he and his colleagues at NASA’s Goddard Space Flight Center thought it was important to communicate the research they were undertaking—to make the science and its relevance to the future of space exploration understandable to the public.</p>
 
            <p>That initiative led to an unusual partnership between the RIS4E project and the Stony Brook University School of Communication and Journalism, which included the Alan Alda Center for Communicating Science. “Communicating science is a necessary part of the scientific enterprise,” they wrote in the grant proposal. “On one end are those who are trained in communication, but perhaps have had minimal exposure to scientific research. On the other hand, trained scientists often lack the tools and skills necessary to effectively communicate their science to a general audience.” The partnership between RIS4E and the Alda Center “will bridge the gap.”</p>
  
            <p>Among the ideas that emerged was a new “special topics” course for students in the School of Communication and Journalism who were interested in science reporting. Students would get access to a high-level scientific research endeavor by visiting scientists in their labs, interviewing them and writing articles and producing multimedia reports on their work. In addition, a small number of the student journalists would accompany a field team on its research mission to Hawaii’s Mount Kilauea volcano in June 2015, and to the Potrillo Volcanic Field in southern New Mexico in June 2017 and April 2022.</p>
  
            <p>In New Mexico, the students and their faculty supervisors went on the team’s research treks, observing, videotaping and photographing as the geoscientists tested instruments for possible use by astronauts and mapped volcanic features that might shed light on the terrain of the moon and Mars. The journalism teams worked cooperatively with the scientists, without restriction on its reporting or prior review. The team’s travel and lodging expenses were covered by the grant from NASA. However, editorial control remained with the School of Communication and Journalism.</p>
  
 <p>This website is the result of the reporting during this memorable partnership in 2022. Eight SBU students reported on the fieldwork of dozens of NASA scientists conducting research for the Artemis Project – the mission to place humans on the Moon in 2025 with the goal of further exploration of other worlds in space, especially Mars.</p>
 
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
