import { DataContext } from "@/context/DataContext";
import Image from "next/image";
import React, { useContext } from "react";

const Logo = ({ resetQuestion }: { resetQuestion?: boolean }) => {
  const { setCurrentStep, setShowQuiz, setAnswers } = useContext(DataContext);

  return (
    <div className="h-12 w-10">
      <Image
        className="cursor-pointer"
        src="/assets/img/logo.svg"
        alt="Some-img"
        width={100}
        height={100}
        style={{ objectFit: "contain" }}
        onClick={() => {
          if (resetQuestion) {
            setCurrentStep(0);
            setShowQuiz(false);
            setAnswers([]);
          }
        }}
      />
    </div>
  );
};

export default Logo;
