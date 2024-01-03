"use client";
import LandingPage from "@/components/LandingPage";
import Quiz from "@/components/quiz/Quiz";
import { questions } from "@/lib/db";
import React, { useContext, useState } from "react";
import Result from "./quiz/Result";
import { DataContext } from "@/context/DataContext";

const Container: React.FC = () => {
  const { showQuiz } = useContext(DataContext);
  console.log({ showQuiz });
  const questionsData: any = questions.questions;
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Array<string | boolean>>([]);

  const handleAnswer = (answer: string | boolean) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentStep] = answer;
    console.log({ updatedAnswers, answer });
    setAnswers(updatedAnswers);
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderCurrentStep = () => {
    if (currentStep < questionsData.length) {
      return (
        <Quiz
          question={questionsData[currentStep]}
          answer={answers[currentStep]}
          onAnswer={handleAnswer}
          onBack={handleBack}
        />
      );
    } else {
      return <Result answers={answers} questionsData={questionsData} />;
    }
  };

  return (
    <div className="container">
      {showQuiz ? renderCurrentStep() : <LandingPage />}
    </div>
  );
};

export default Container;
