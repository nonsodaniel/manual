import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Container from "@/components/Container";
import { DataContext } from "@/context/DataContext";

describe("Container Component", () => {
  test("renders LandingPage when showQuiz is false", () => {
    render(
      <DataContext.Provider value={{ showQuiz: false, setShowQuiz: jest.fn() }}>
        <Container />
      </DataContext.Provider>
    );
    expect(screen.getByTestId("landing-page")).toBeInTheDocument();
    expect(screen.queryByTestId("quiz-page")).not.toBeInTheDocument();
    expect(screen.queryByTestId("result-page")).not.toBeInTheDocument();
  });

  test("renders Result when showQuiz is true and currentStep is not < questionsData.length", () => {
    const mockData = {
      questions: [
        { question: "Question 1", type: "Type 1", options: [] },
        { question: "Question 2", type: "Type 2", options: [] },
      ],
    };

    render(
      <DataContext.Provider
        value={{
          showQuiz: true,
          setShowQuiz: jest.fn(),
          questionsData: mockData.questions,
        }}
      >
        <Container />
      </DataContext.Provider>
    );

    expect(screen.queryByTestId("landing-page")).not.toBeInTheDocument();
    expect(screen.queryByTestId("quiz-page")).not.toBeInTheDocument();
    expect(screen.getByTestId("result-page")).toBeInTheDocument();
  });
});
