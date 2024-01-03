import { Question } from "@/lib/types";
import React from "react";

interface IQuizItemProps {
  questions: Question | null;
}

const QuizItem = ({ questions }: IQuizItemProps) => {
  return <div>QuizItem</div>;
};

export default QuizItem;
