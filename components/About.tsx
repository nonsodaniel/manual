"use client";

import { aboutPageContent } from "@/lib/db";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24 ">
      <h1 className="text-center text-2xl font-normal text-[#0b3b3c] md:my-0 my-12">
        What we can help with
      </h1>
      <div className="overflow-hidden min-h-[625px]">
        {aboutPageContent.map((o, index) => {
          const isOddNumber = index % 2 !== 1;
          return (
            <div
              key={o.label + index}
              className={`flex   ${
                isOddNumber && "md:flex-row-reverse"
              } items-center content-center 
    px-8 md:mx-auto mx-0 leading-6 border-0 
     lg:px-16 min-h-[25rem] md:h-auto md:w-[50%] w-[100%] md:flex-row flex-col md:mb-0 mb-16`}
            >
              <div className="box-1 flex items-center relative md:h-[445px] h-[100%] md:w-[370px] w-[100%]">
                <Image
                  className={`p-2 absolute   h-[445px] w-[370px] hidden md:block ${
                    isOddNumber ? "left-[-17rem] mr-8" : "right-[-105px]"
                  } `}
                  src={o.numberImgPath}
                  alt="number-img"
                  width={0}
                  height={0}
                  sizes="100vh"
                />
                <div
                  className={`relative flex flex-col md:order-1 
                  justify-center md:h-[257px] h-[100%] md:w-[359px]
                   w-[inherit] p md:px-4 px-0 z-[1] text-[#5c8b8b] ${
                     isOddNumber && "md:ml-[-10rem] ml-0 "
                   }`}
                >
                  <h6 className="m-0 font-light md:text-xs text-md underline md:no-underline">
                    {o.label}
                  </h6>
                  <h5 className=" m-0   text-[1.5rem] leading-8 py-[0.8rem] px-0 font-medium text-[#0B3B3C]">
                    {o.heading}
                  </h5>
                  <p className="md:text-[.9rem] text-md  font-light ">
                    {o.description}
                  </p>
                </div>
              </div>
              <div
                className={`relative  md:min-h-[445px] min-w-[370px]
               min-h-[1rem] box-2 max-w-[200px] md:max-w-fit ${
                 isOddNumber && "md:mr-36 mr-0"
               }`}
              >
                <div className="flex justify-center max-w-md h-[100%]">
                  <Image
                    className={`p-2 md:h-[445px] w-[270px] h-[100%] ${
                      isOddNumber ? "md:ml-[-3rem] ml-0" : "ml-0"
                    }`}
                    src={o.aboutImgPath}
                    alt="erection-img"
                    width={0}
                    height={0}
                    sizes="100vh"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
