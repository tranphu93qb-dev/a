
import React, { useState, useCallback, useMemo } from 'react';
import { QUESTIONS, RESULTS } from './constants';
import type { Question, ResultType, Scores } from './types';
import { Trait } from './types';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionCard from './components/QuestionCard';
import ResultScreen from './components/ResultScreen';

type QuizState = 'welcome' | 'questions' | 'result';

export default function App() {
  const [quizState, setQuizState] = useState<QuizState>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Scores>({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
  const [resultCode, setResultCode] = useState<string | null>(null);

  const handleStart = useCallback(() => {
    setQuizState('questions');
  }, []);

  const calculateResult = useCallback((finalScores: Scores) => {
    const e_i = finalScores.E > finalScores.I ? 'E' : 'I';
    const s_n = finalScores.S > finalScores.N ? 'S' : 'N';
    const t_f = finalScores.T > finalScores.F ? 'T' : 'F';
    const j_p = finalScores.J > finalScores.P ? 'J' : 'P';
    
    const code = `${e_i}${s_n}${t_f}${j_p}`;
    setResultCode(code);
    setQuizState('result');
  }, []);

  const handleAnswer = useCallback((trait: Trait) => {
    const newScores = { ...scores, [trait]: scores[trait] + 1 };
    setScores(newScores);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      calculateResult(newScores);
    }
  }, [scores, currentQuestionIndex, calculateResult]);

  const handleRetake = useCallback(() => {
    setQuizState('welcome');
    setCurrentQuestionIndex(0);
    setScores({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
    setResultCode(null);
  }, []);

  const resultData = useMemo(() => {
    if (resultCode && RESULTS[resultCode]) {
      return RESULTS[resultCode];
    }
    return null;
  }, [resultCode]);

  const renderContent = () => {
    switch (quizState) {
      case 'questions':
        return (
          <QuestionCard
            question={QUESTIONS[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={QUESTIONS.length}
            onAnswer={handleAnswer}
          />
        );
      case 'result':
        if (resultCode && resultData) {
          return (
            <ResultScreen
              resultCode={resultCode}
              resultData={resultData}
              onRetake={handleRetake}
            />
          );
        }
        return null;
      case 'welcome':
      default:
        return <WelcomeScreen onStart={handleStart} />;
    }
  };

  return (
    <div className="bg-slate-100 min-h-screen text-slate-800 flex items-center justify-center p-4">
      <main className="w-full max-w-2xl mx-auto">
        {renderContent()}
      </main>
    </div>
  );
}
