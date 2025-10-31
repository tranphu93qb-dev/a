
import React from 'react';
import type { Question } from '../types';
import { Trait } from '../types';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (trait: Trait) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, questionNumber, totalQuestions, onAnswer }) => {
  const progressPercentage = (questionNumber / totalQuestions) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 w-full animate-fade-in">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-medium text-blue-700">Câu hỏi {questionNumber}/{totalQuestions}</p>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">{question.question}</h2>

      {/* Options */}
      <div className="grid grid-cols-1 gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option.trait)}
            className="w-full text-left bg-slate-100 text-slate-800 p-4 rounded-lg border-2 border-transparent hover:bg-blue-100 hover:border-blue-500 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <p className="text-base">{option.text}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
