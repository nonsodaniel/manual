import { QuizOption } from "@/lib/types";
import React from "react";

interface QuizProps {
  question: {
    question: string;
    type: string;
    options: {
      display: string;
      value: string | boolean;
      isRejection: boolean;
    }[];
  };
  answer: string | boolean;
  answers: Array<QuizOption>;
  currentStep: number;
  onAnswer: (answer: QuizOption) => void;
  onBack: () => void;
}

const Quiz: React.FC<QuizProps> = ({
  question,
  answer,
  onAnswer,
  onBack,
  answers,
  currentStep,
}) => {
  const renderOptionContent = (display: string) => {
    // Check if display value starts with '<img'
    if (display.trim().startsWith("<img")) {
      // Extract src attribute from the <img> tag
      const srcMatch = display.match(/src="(.*?)"/);
      const altMatch = display.match(/alt="(.*?)"/);
      const srcsetMatch = display.match(/srcset="(.*?)"/);
      const src = srcMatch ? srcMatch[1] : "";
      const alt = altMatch ? altMatch[1] : "";
      const srcset = srcsetMatch ? srcsetMatch[1] : "";

      return (
        <img
          src={src}
          alt={alt}
          srcSet={srcset}
          className="max-w-full h-auto"
        />
      );
    }

    return display;
  };
  const isBtnEnabled = answers.length !== 0 && currentStep !== 0;

  return (
    <div className="container quiz bg-white p-8  my-8">
      <h1 className="text-center text-4xl py-5">Manual Quiz</h1>
      <h2 className="text-2xl font-normal mb-4" data-testid="quiz-question">
        {question.question}
      </h2>
      <div className="options" data-testid="quiz-options">
        {question.options.map((option, index) => (
          <div
            key={index}
            className="option mb-4 flex items-center"
            data-testid="quiz-option"
          >
            <span className="pr-5"> {index + 1}</span>

            <button
              onClick={() => onAnswer(option)}
              className={`bg-blue-500 text-white py-2 px-4 rounded ${
                answer === option.value ? "bg-green-300" : ""
              }`}
              data-testid="quiz-btn-option"
            >
              {renderOptionContent(option.display)}
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={onBack}
        disabled={!isBtnEnabled}
        className={`mt-4  ${
          isBtnEnabled ? "bg-gray-600" : "bg-gray-300"
        }  text-white py-2 px-4 rounded`}
      >
        Back
      </button>
    </div>
  );
};

export default Quiz;
