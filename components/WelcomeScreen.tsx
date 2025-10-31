
import React from 'react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center animate-fade-in">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">Khám Phá Bản Thân</h1>
      <p className="text-lg text-slate-600 mb-2">
        Chào mừng bạn đến với bài trắc nghiệm tính cách 4 chữ cái!
      </p>
      <p className="text-slate-600 mb-8">
        Hãy trả lời 20 câu hỏi để hiểu thêm về xu hướng tự nhiên của bạn. Hãy chọn câu trả lời phù hợp nhất với bạn, đừng suy nghĩ quá lâu nhé.
      </p>
      <button
        onClick={onStart}
        className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Bắt đầu ngay
      </button>
       <p className="text-xs text-slate-400 mt-8">
        <strong>Lưu ý:</strong> Bài trắc nghiệm này chỉ mang tính giải trí và tự khám phá. Không thay thế chẩn đoán tâm lý hay bài MBTI® chính thức.
      </p>
    </div>
  );
};

export default WelcomeScreen;
