// Quiz.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Quiz from "@/components/quiz/Quiz";

const mockQuestion = {
  question: "Test Question",
  options: [
    { display: "Option 1", value: "option1", isRejection: false },
    { display: "Option 2", value: "option2", isRejection: false },
  ],
};

const mockAnswer = {
  display: "Option 1",
  value: "option1",
  isRejection: false,
};

describe("Quiz Component", () => {
  test("renders Quiz correctly", () => {
    render(
      <Quiz
        question={mockQuestion}
        answer={mockAnswer.value}
        answers={[mockAnswer]}
        currentStep={0}
        onAnswer={jest.fn()}
        onBack={jest.fn()}
      />
    );
    expect(screen.getByText("Manual Quiz")).toBeInTheDocument();
    expect(screen.getByTestId("quiz-question")).toHaveTextContent(
      "Test Question"
    );
    expect(screen.getByTestId("quiz-btn-option-1")).toBeInTheDocument();
  });

  test("handles button click correctly", () => {
    const onAnswerMock = jest.fn();
    const onBackMock = jest.fn();
    render(
      <Quiz
        question={mockQuestion}
        answer={mockAnswer.value}
        answers={[mockAnswer]}
        currentStep={0}
        onAnswer={onAnswerMock}
        onBack={onBackMock}
      />
    );

    fireEvent.click(screen.getByTestId("quiz-btn-option-1"));
    expect(onAnswerMock).toHaveBeenCalledWith(mockAnswer);
  });

  test("disables back button when isBtnEnabled is false", () => {
    render(
      <Quiz
        question={mockQuestion}
        answer={mockAnswer.value}
        answers={[]}
        currentStep={0}
        onAnswer={jest.fn()}
        onBack={jest.fn()}
      />
    );
    expect(screen.getByText("Back")).toBeDisabled();
  });

  test("enables back button when isBtnEnabled is true", () => {
    render(
      <Quiz
        question={mockQuestion}
        answer={mockAnswer.value}
        answers={[mockAnswer]}
        currentStep={1}
        onAnswer={jest.fn()}
        onBack={jest.fn()}
      />
    );
    expect(screen.getByText("Back")).not.toBeDisabled();
  });
});
