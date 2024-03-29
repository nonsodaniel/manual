import { Question, QuizOption } from "@/lib/types";

import Logo from "../Logo";

interface ResultsPageProps {
  answers: Array<QuizOption>;
  questionsData: Question[];
}

const Result: React.FC<ResultsPageProps> = ({ answers }) => {
  const isRejectionCondition = answers?.some((answer) => {
    return answer.isRejection;
  });

  const getResultMessage = () => {
    if (isRejectionCondition) {
      return (
        <p className="text-red-600">
          Unfortunately, we are unable to prescribe this medication for you.
          This is because finasteride can alter the PSA levels, which may be
          used to monitor for cancer. You should discuss this further with your
          GP or specialist if you would still like this medication.
        </p>
      );
    } else {
      return (
        <p className="text-green-600">
          <span className="text-2xl font-bold">Great news!</span> <br /> We have
          the perfect treatment for your hair loss. Proceed to{" "}
          <a
            href="https://www.manual.co"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            www.manual.co
          </a>
          , and prepare to say hello to your new hair!
        </p>
      );
    }
  };

  return (
    <div className="container" data-testid="result-page">
      <div className="logo py-8 flex justify-center">
        <Logo resetQuestion />
      </div>

      <div
        className="results-page flex  justify-center items-center mx-auto lg:w-[800px] w-full"
        data-test
      >
        <div className="bg-white p-8 rounded shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] my-8">
          <h1 className="text-center text-4xl py-5">Quiz Result</h1>
          <div className="text-lg text-center">{getResultMessage()}</div>
        </div>
      </div>
    </div>
  );
};

export default Result;
