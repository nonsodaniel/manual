import { Question, QuizOption } from "@/lib/types";
import { createContext, Dispatch, SetStateAction } from "react";

interface DataContextProps {
  showQuiz: boolean;
  setShowQuiz: Dispatch<SetStateAction<boolean>>;
  answers: Array<QuizOption>;
  setAnswers: Dispatch<SetStateAction<QuizOption[]>>;
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

export const DataContext = createContext<DataContextProps>(
  {} as DataContextProps
);
