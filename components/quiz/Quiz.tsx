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
  onAnswer: (answer: string | boolean) => void;
  onBack: () => void;
}

const Quiz: React.FC<QuizProps> = ({ question, answer, onAnswer, onBack }) => {
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

  return (
    <div className="quiz bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">{question.question}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <div key={index} className="option mb-4">
            <span className="pr-3"> {index + 1}</span>

            <button
              onClick={() => onAnswer(option.value)}
              className={`bg-blue-500 text-white py-2 px-4 rounded ${
                answer === option.value ? "bg-green-300" : ""
              }`}
            >
              {renderOptionContent(option.display)}
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={onBack}
        disabled={answer === ""}
        className="mt-4 bg-gray-500 text-white py-2 px-4 rounded"
      >
        Back
      </button>
    </div>
  );
};

export default Quiz;
