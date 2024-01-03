"use client";

import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
      <p className="text-center">What we can help with</p>
      <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
        <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
          <Image
            className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "
            src="/file_fav.png"
            alt="Some-img"
            width={350}
            height={700}
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
          <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
            Hair Loss
          </h2>
          <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
            Hair loss needn’t be irreversible. We can help!
          </p>
          <p>
            We’re working around the clock to bring you a holistic approach to
            your wellness. From top to bottom, inside and out.
          </p>
        </div>
      </div>
      <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
        <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
          <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
            Erecetile dysfunction
          </h2>
          <h5 className="h5t-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
            Erections can be a tricky thing. But no need to feel down!
          </h5>
          <h6>
            We’re working around the clock to bring you a holistic approach to
            your wellness. From top to bottom, inside and out.
          </h6>
        </div>

        <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
          <Image
            className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"
            src="/file_fav.png"
            alt="Some-img"
            width={350}
            height={700}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
