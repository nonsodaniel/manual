import { Question } from "@/lib/types";
import React from "react";

interface ResultsPageProps {
  answers: Array<string | boolean>;
  questionsData: Question[];
}

const Result: React.FC<ResultsPageProps> = ({ answers, questionsData }) => {
  const isRejectionCondition = answers.some((answer, index) => {
    return answer === true && questionsData[index].options[index].isRejection;
  });

  const getResultMessage = () => {
    if (isRejectionCondition) {
      return (
        <p>
          Unfortunately, we are unable to prescribe this medication for you.
          This is because finasteride can alter the PSA levels, which may be
          used to monitor for cancer. You should discuss this further with your
          GP or specialist if you would still like this medication.
        </p>
      );
    } else {
      return (
        <p>
          Great news! We have the perfect treatment for your hair loss. Proceed
          to www.manual.co, and prepare to say hello to your new hair!
        </p>
      );
    }
  };

  return (
    <div className="results-page">
      <h2>Results</h2>
      {getResultMessage()}
    </div>
  );
};

export default Result;
