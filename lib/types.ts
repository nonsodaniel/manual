export interface Question {
  question: string;
  type: string;
  options: Option[];
}

interface Option {
  display: string;
  value: string;
  isRejection: boolean;
}
