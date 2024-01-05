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

interface Label {
  label: string;
}

export interface PageContent extends Label {
  heading: string;
  description: string;
  numberImgPath: string;
  aboutImgPath: string;
}

export interface MediaContent extends Label {
  path: string;
}
