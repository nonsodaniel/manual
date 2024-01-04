import { DataContext } from "@/context/DataContext";
import Image from "next/image";
import React, { useContext } from "react";

const Logo = () => {
  const context = useContext(DataContext);
  const setShowQuiz = context?.setShowQuiz;
  return (
    <div className="h-12 w-10">
      <Image
        className="cursor-pointer"
        src="/assets/img/logo.svg"
        alt="Some-img"
        width={100}
        height={100}
        style={{ objectFit: "contain" }}
        onClick={() => setShowQuiz?.(false)}
      />
    </div>
  );
};

export default Logo;
