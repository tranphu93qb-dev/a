import React from 'react';
import type { ResultType } from '../types';

interface ResultScreenProps {
  resultCode: string;
  resultData: ResultType;
  onRetake: () => void;
}

const ResultSection: React.FC<{ title: string; items: string[]; icon: string }> = ({ title, items, icon }) => (
  <div className="bg-slate-50 p-4 rounded-lg">
    <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
      <span className="mr-2 text-xl">{icon}</span> {title}
    </h3>
    <ul className="list-none space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-blue-500 mr-2 mt-1">✓</span>
          <span className="text-slate-600">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ResultScreen: React.FC<ResultScreenProps> = ({ resultCode, resultData, onRetake }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 w-full animate-fade-in">
      <div className="text-center mb-8">
        <p className="text-slate-500">Kết quả của bạn là</p>
        <h1 className="text-6xl font-extrabold text-blue-600 my-2">{resultCode}</h1>
        <h2 className="text-2xl font-bold text-slate-800">{resultData.title}</h2>
        <p className="text-slate-600 mt-4 max-w-prose mx-auto">{resultData.summary}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <ResultSection title="Thế mạnh" items={resultData.strengths} icon="🌟" />
        <ResultSection title="Điểm cần lưu ý" items={resultData.weaknesses} icon="🤔" />
        <ResultSection title="Gợi ý phát triển" items={resultData.development} icon="🚀" />
      </div>

      <div className="text-center mt-8">
        <button
          onClick={onRetake}
          className="bg-slate-600 text-white font-bold py-3 px-8 rounded-full hover:bg-slate-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-slate-300"
        >
          Làm lại trắc nghiệm
        </button>
        <p className="text-xs text-slate-400 mt-6 max-w-md mx-auto">
          <strong>Tuyên bố miễn trừ trách nhiệm:</strong> Bài trắc nghiệm này chỉ mang tính giải trí và tự khám phá. Kết quả không thay thế cho chẩn đoán tâm lý chuyên nghiệp hay bài thi MBTI® chính thức.
        </p>
      </div>
    </div>
  );
};

export default ResultScreen;
