import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Container from "@/components/Container";
import { DataContext } from "@/context/DataContext";

const obj = {
  showQuiz: true,
  setShowQuiz: jest.fn(),
  answers: [],
  setAnswers: jest.fn(),
  currentStep: 0,
  setCurrentStep: jest.fn(),
};

describe("Container Component", () => {
  test("renders LandingPage when showQuiz is false", () => {
    render(
      <DataContext.Provider value={{ ...obj, showQuiz: false }}>
        <Container />
      </DataContext.Provider>
    );
    expect(screen.getByTestId("landing-page")).toBeInTheDocument();
    expect(screen.queryByTestId("quiz-page")).not.toBeInTheDocument();
    expect(screen.queryByTestId("result-page")).not.toBeInTheDocument();
  });

  test("renders Result component", () => {
    render(
      <DataContext.Provider value={{ ...obj, showQuiz: true }}>
        <Container />
      </DataContext.Provider>
    );

    expect(screen.queryByTestId("landing-page")).not.toBeInTheDocument();
    expect(screen.queryByTestId("quiz-page")).not.toBeInTheDocument();
    expect(screen.getByTestId("result-page")).toBeInTheDocument();
  });
});
