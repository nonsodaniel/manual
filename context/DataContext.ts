import { createContext, Dispatch, SetStateAction } from "react";

interface DataContextProps {
  showQuiz: boolean;
  setShowQuiz: Dispatch<SetStateAction<boolean>>;
}

export const DataContext = createContext<DataContextProps | null>(null);
