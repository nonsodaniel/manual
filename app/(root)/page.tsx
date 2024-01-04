"use client";
import Container from "@/components/Container";
import { DataContext } from "@/context/DataContext";
import { QuizOption } from "@/lib/types";
import React, { useState } from "react";

const page = () => {
  const [showQuiz, setShowQuiz] = useState<boolean>(false);
  const [answers, setAnswers] = useState<Array<QuizOption>>([]);
  const [currentStep, setCurrentStep] = useState<number>(0);
  return (
    <div>
      <DataContext.Provider
        value={{
          showQuiz,
          setShowQuiz,
          answers,
          setAnswers,
          currentStep,
          setCurrentStep,
        }}
      >
        <Container />
      </DataContext.Provider>
    </div>
  );
};

export default page;
