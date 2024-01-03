import useFetch from "@/hooks/useFetch";
import React from "react";
import QuizItem from "./QuizItem";

const Quiz = () => {
  const { data } = useFetch(
    "https://manual-case-study.herokuapp.com/questionnaires/972423.json"
  );
  console.log({ data });

  return (
    <div>
      <QuizItem questions={data} />
    </div>
  );
};

export default Quiz;
