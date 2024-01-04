"use client";
import LandingPage from "@/components/LandingPage";
import Quiz from "@/components/quiz/Quiz";

import React, { useContext, useState } from "react";
import Result from "./quiz/Result";
import { DataContext } from "@/context/DataContext";
import { Question, QuizOption } from "@/lib/types";
import useFetch from "@/hooks/useFetch";

interface QuestionsData {
  questions: Question[] | null;
}

const Container: React.FC = () => {
  const { data } = useFetch<QuestionsData>("/api");

  const { showQuiz, currentStep, setCurrentStep, setAnswers, answers } =
    useContext(DataContext);

  const handleAnswer = (answer: QuizOption) => {
    const updatedAnswers = [...answers!];
    updatedAnswers[currentStep] = answer;
    setAnswers?.(updatedAnswers);
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const questionsData = data?.questions || [];

  const renderCurrentStep = () => {
    if (currentStep < questionsData.length) {
      const question = questionsData[currentStep];
      return (
        <Quiz
          question={question}
          answer={answers[currentStep]?.value}
          onAnswer={handleAnswer}
          onBack={handleBack}
          answers={answers}
          currentStep={currentStep}
        />
      );
    }
    return <Result answers={answers} questionsData={questionsData} />;
  };

  return <div>{showQuiz ? renderCurrentStep() : <LandingPage />}</div>;
};

export default Container;
