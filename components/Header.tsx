import { DataContext } from "@/context/DataContext";
import Link from "next/link";
import React, { useContext } from "react";
import Logo from "./Logo";

const Header = () => {
  //@ts-ignore
  const { setShowQuiz } = useContext(DataContext);
  return (
    <div className="bg-[#a4b59e]">
      <nav className="w-full max-w-6xl mx-auto  ">
        <div className="container h-[100%] py-5">
          <div className="relative flex flex-col md:flex-row  ">
            <Link
              href="#_"
              className=" mb-5 lg:w-auto lg:items-center lg:justify-center md:mb-0"
            >
              <Logo />
            </Link>
          </div>
        </div>
      </nav>

      <div
        className="w-full bg-no-repeat bg-cover h-[100%] "
        style={{ backgroundImage: 'url("/hero.svg")' }}
      >
        <section className="md:px-0 h-[35rem] w-full max-w-6xl mx-auto px-2">
          <div className="container h-[100%] items-center mx-auto xl:px-5">
            <div className="flex flex-wrap sm:-mx-3 h-[100%]">
              <div className="w-full md:w-1/2 md:px-3 flex flex-col justify-center">
                <h1 className="flex flex-col  tracking-tight ">
                  <p className="text-[4rem] text-7xl   text-[#0b3b3c]">
                    Be good
                  </p>
                  <p className="text-[4rem] text-7xl text-[#0b3b3c]">
                    to yourself
                  </p>
                </h1>
                <p className=" py-5 sm:max-w-md text-base md:max-w-3xl font-light text-[#0b3b3c]">
                  We are working round the clock to bring you a hoistic
                  approcach to your wellness. From top to boottom,inside and
                  outside.
                </p>
                <div className="relative flex flex-row sm:space-x-4 py-5">
                  <Link
                    href="#_"
                    className="flex items-center px-6 py-3 text-xs text-white bg-red-900 "
                    onClick={(e) => setShowQuiz(true)}
                  >
                    TAKE THE QUIZ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
