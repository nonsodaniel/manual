"use client";

import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24 ">
      <h1 className="text-center text-2xl font-bold text-[#0b3b3c] my-12">
        What we can help with
      </h1>
      <div
        className="flex flex-col items-center content-center px-8
       mx-auto leading-6 border-gray-400  md:mb-12 mb-48
        md:flex-row lg:max-w-4xl max-w-5xl lg:px-16 h-[25rem] md:h-auto "
      >
        <div
          className="relative w-full h-[100%]  max-w-md px-4 mt-5 mb-4 
         text-center md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10"
        >
          <div className="flex justify-center max-w-md h-[100%]">
            <Image
              className="p-2   "
              src="/about-1.svg"
              alt="Some-img"
              width={0}
              height={0}
              sizes="100vh"
              style={{ width: "90%", height: "100%" }}
            />
          </div>
        </div>

        <div className="flex flex-col  justify-center w-full h-[100%]  text-[#0b3b3c]  md:w-1/3  ">
          <h6 className="m-0 font-light leading-tight text-xs ">Hair Loss</h6>
          <h5 className="py-3 md:py-0 m-0 leading-7 font-bold ">
            Hair loss needn’t be irreversible. We can help!
          </h5>
          <p className="text-xs font-light ">
            We’re working around the clock to bring you a holistic approach to
            your wellness. From top to bottom, inside and out.
          </p>
        </div>
      </div>

      <div
        className="flex flex-col-reverse items-center content-center px-8
       mx-auto leading-6 border-0 my-4
        md:flex-row lg:max-w-4xl max-w-5xl lg:px-16 min-h-[25rem] md:h-auto"
      >
        <div className="flex flex-col md:order-1  justify-center w-full h-[100%] text-[#0b3b3c]  md:w-1/3  ">
          <h6 className="m-0 font-light text-xs ">Erecetile dysfunction</h6>
          <h5 className="py-3 md:py-0 m-0 leading-7 font-bold lg:text-lg ">
            Erections can be a tricky thing. But no need to feel down!
          </h5>
          <p className="text-xs font-light ">
            We’re working around the clock to bring you a holistic approach to
            your wellness. From top to bottom, inside and out.
          </p>
        </div>
        <div className="relative w-full h-[100%] md:order-2  max-w-md px-4 mt-5 mb-4  text-center md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
          <div className="flex justify-center max-w-md h-[100%]">
            <Image
              className="p-2   "
              src="/about-2.svg"
              alt="Some-img"
              width={0}
              height={0}
              sizes="100vh"
              style={{ width: "90%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
