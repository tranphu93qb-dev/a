export enum Trait {
  E = 'E', // Extroversion - Hướng ngoại
  I = 'I', // Introversion - Hướng nội
  S = 'S', // Sensing - Cảm nhận
  N = 'N', // Intuition - Trực giác
  T = 'T', // Thinking - Suy nghĩ
  F = 'F', // Feeling - Cảm xúc
  J = 'J', // Judging - Đánh giá
  P = 'P', // Perceiving - Nhận thức
}

export interface QuestionOption {
  text: string;
  trait: Trait;
}

export interface Question {
  question: string;
  options: [QuestionOption, QuestionOption];
}

export interface ResultType {
  title: string;
  summary: string;
  strengths: string[];
  weaknesses: string[];
  development: string[];
}

export type Scores = Record<Trait, number>;