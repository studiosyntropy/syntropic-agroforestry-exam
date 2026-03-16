import React from 'react';
import { Question } from '../types';
import { Button } from './Button';
import { Leaf, CheckCircle, XCircle, BookOpen } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  onAnswer: (index: number) => void;
  isAnswered: boolean;
  selectedAnswerIndex: number | null;
  onNext: () => void;
  isLast: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionIndex,
  totalQuestions,
  onAnswer,
  isAnswered,
  selectedAnswerIndex,
  onNext,
  isLast
}) => {
  const isCorrect = isAnswered && selectedAnswerIndex === question.correctAnswerIndex;

  const getOptionStyle = (index: number) => {
    if (!isAnswered) {
      return selectedAnswerIndex === index
        ? "border-emerald-500 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-500"
        : "border-stone-200 hover:border-emerald-300 hover:bg-stone-50";
    }

    if (index === question.correctAnswerIndex) {
      return "border-green-500 bg-green-50 text-green-900 ring-2 ring-green-500";
    }

    if (selectedAnswerIndex === index && index !== question.correctAnswerIndex) {
      return "border-red-400 bg-red-50 text-red-900 ring-1 ring-red-400";
    }

    return "border-stone-100 opacity-50";
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100">
      {/* Question Header */}
      <div className="bg-stone-50 px-6 py-4 border-b border-stone-100 flex items-center justify-between">
         <span className="font-bold text-emerald-700 uppercase tracking-widest text-sm">
           Question {questionIndex + 1} of {totalQuestions}
         </span>
         <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wide uppercase">
            {question.category}
          </span>
      </div>

      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-semibold text-stone-800 mb-8 leading-relaxed serif">
          {question.questionText}
        </h3>

        <div className="space-y-3">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              disabled={isAnswered}
              onClick={() => onAnswer(idx)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${getOptionStyle(idx)}`}
            >
              <span className="flex-1 font-medium">{option}</span>
              {isAnswered && idx === question.correctAnswerIndex && (
                <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              )}
              {isAnswered && selectedAnswerIndex === idx && idx !== question.correctAnswerIndex && (
                <XCircle className="w-5 h-5 text-red-500 ml-2" />
              )}
            </button>
          ))}
        </div>

        {isAnswered && (
          <div className="mt-8 animate-fade-in">
            <div className={`p-4 rounded-lg border mb-6 ${isCorrect ? 'bg-emerald-50 border-emerald-100' : 'bg-stone-50 border-stone-200'}`}>
              <div className="flex items-start gap-3">
                {isCorrect ? (
                   <Leaf className="w-5 h-5 text-emerald-600 mt-1 shrink-0" />
                ) : (
                   <BookOpen className="w-5 h-5 text-amber-600 mt-1 shrink-0" />
                )}
                
                <div>
                  <h4 className={`font-bold text-sm mb-1 uppercase ${isCorrect ? 'text-emerald-800' : 'text-stone-800'}`}>
                    {isCorrect ? "Professor's Praise & Insight" : "Professor's Guidance"}
                  </h4>
                  <p className="text-stone-700 leading-relaxed text-sm">
                    {question.explanation}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
               <Button onClick={onNext} size="lg" className="w-full md:w-auto shadow-md">
                 {isLast ? "View Report Card" : "Next Question"}
               </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};