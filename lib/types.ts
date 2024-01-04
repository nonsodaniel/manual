export interface Question {
  question: string;
  type?: string;
  options: QuizOption[];
}

export interface QuizOption {
  display: string;
  value: string | boolean;
  isRejection: boolean;
}
