import React, { useRef } from 'react';
import { QuizState } from '../types';
import { Button } from './Button';
import { RefreshCw, AlertCircle, XCircle, CheckCircle } from 'lucide-react';

interface ResultsViewProps {
  state: QuizState;
  onRestart: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({ state, onRestart }) => {
  const certificateRef = useRef<HTMLDivElement>(null);

  const correctCount = state.questions.reduce((acc, q, idx) => {
    return acc + (state.answers[idx] === q.correctAnswerIndex ? 1 : 0);
  }, 0);
  
  const total = state.questions.length;
  const percentage = Math.round((correctCount / total) * 100);
  const isPass = percentage >= 85;
  const date = new Date().toLocaleDateString();

  // Rank Logic
  let rank = "Agroforestry Practitioner";
  if (percentage >= 95) rank = "Master of Syntropy";
  else if (percentage >= 85) rank = "Stratification Specialist";

  // Render: SUCCESS (PASS)
  if (isPass) {
    return (
      <div className="w-full max-w-4xl animate-fade-in flex flex-col items-center gap-8">
        
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-emerald-950 serif">Examination Complete</h2>
          <p className="text-stone-600">
            Congratulations! You have demonstrated a deep understanding of the Macro-organism.
          </p>
        </div>

        {/* Certificate Container */}
        <div ref={certificateRef} className="bg-white p-1 md:p-2 shadow-2xl w-full max-w-3xl mx-auto overflow-hidden">
          <div className="border-4 border-double border-stone-800 p-8 md:p-12 flex flex-col items-center text-center relative bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
            
            {/* Header */}
            <div className="space-y-3 mb-8 w-full border-b-2 border-stone-800 pb-8">
              <h1 className="text-3xl md:text-5xl font-bold text-emerald-900 tracking-wide font-sans">SYNTROPIC AGROFORESTRY</h1>
              <h2 className="text-lg md:text-xl font-bold text-emerald-800 tracking-[0.2em] uppercase font-sans mt-2">Certificate of Mastery</h2>
            </div>

            {/* Body */}
            <div className="space-y-8 flex-1 w-full">
              <p className="text-xl italic text-stone-900 serif">This is to certify that</p>
              
              <div className="space-y-2">
                <h3 className="text-4xl md:text-6xl serif text-blue-900 py-2 border-b border-stone-200 inline-block px-8">
                  {state.studentName || "Student Name"}
                </h3>
                <p className="text-stone-500 font-sans text-sm tracking-wider uppercase mt-2">Student ID: {state.studentId || "000000"}</p>
              </div>

              <div className="pt-6">
                <p className="text-stone-900 font-sans text-lg">Has successfully completed the examination with a score of:</p>
                <p className="text-6xl md:text-7xl font-bold text-red-700 py-4 font-sans">{percentage}%</p>
              </div>

              <div className="pb-8">
                <p className="text-stone-900 font-sans text-xs uppercase tracking-widest mb-2 text-stone-500">Rank Awarded</p>
                <p className="text-3xl md:text-4xl font-bold text-emerald-950 serif">{rank}</p>
              </div>
            </div>

            {/* Footer */}
            <div className="w-full flex flex-col md:flex-row justify-between items-end mt-12 gap-8 md:gap-0">
              <div className="text-left">
                <p className="text-stone-900 font-sans font-bold text-xs uppercase tracking-wider mb-1">Date Issued</p>
                <p className="text-stone-800 serif text-xl border-b border-stone-400 pb-1 pr-8">{date}</p>
              </div>

              <div className="text-center md:text-right flex flex-col items-center md:items-end">
                <div className="signature text-4xl md:text-5xl text-stone-900 mb-2 transform -rotate-2">Tobias Neugebauer</div>
                <div className="w-56 h-px bg-stone-900 mb-2"></div>
                <p className="text-xs font-bold text-stone-900 uppercase tracking-wider">Tobias Neugebauer, Instructor</p>
                <p className="text-xs text-stone-600 font-serif italic">USR Tzu Chi University</p>
              </div>
            </div>

          </div>
        </div>

        <p className="text-stone-500 text-sm italic flex items-center gap-2">
           Please take a screenshot of the certificate above to submit to your professor.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={onRestart} variant="primary" size="lg" className="flex items-center gap-2 shadow-xl">
            <RefreshCw className="w-4 h-4" />
            Restart System
          </Button>
        </div>
      </div>
    );
  }

  // Render: RETRY (FAIL)
  return (
    <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100 animate-fade-in">
      
      {/* Header */}
      <div className="p-8 text-center border-b border-stone-100 bg-stone-50/50">
        <div className="mb-4 flex justify-center">
          <div className="bg-amber-100 p-4 rounded-full">
             <AlertCircle className="w-10 h-10 text-amber-600" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-stone-800 mb-2 serif">{state.studentName}, Score: {percentage}%</h2>
        <p className="text-stone-600">
          You achieved {percentage}%. To receive the Syntropic Agroforestry Certificate, a score of <span className="font-bold text-emerald-700">85%</span> is required.
        </p>
        <p className="text-stone-500 text-sm mt-2">Let's review your learning opportunities:</p>
      </div>

      {/* Error Review List */}
      <div className="p-6 md:p-8 space-y-6 bg-white">
        {state.questions.map((q, idx) => {
          const userAnswerIdx = state.answers[idx];
          const isCorrect = userAnswerIdx === q.correctAnswerIndex;
          
          if (isCorrect) return null; // Only show errors

          return (
            <div key={q.id} className="p-4 rounded-xl border border-red-100 bg-red-50/30">
              <div className="flex items-start gap-3 mb-3">
                <span className="bg-stone-200 text-stone-600 text-xs font-bold px-2 py-1 rounded">Q{idx + 1}</span>
                <h3 className="font-semibold text-stone-800 text-sm md:text-base">{q.questionText}</h3>
              </div>
              
              <div className="space-y-2 ml-1 md:ml-10 text-sm">
                <div className="flex items-start gap-2 text-red-700 bg-red-100/50 p-2 rounded">
                  <XCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-xs uppercase block opacity-70">Your Answer</span>
                    {q.options[userAnswerIdx]}
                  </div>
                </div>
                
                <div className="flex items-start gap-2 text-emerald-800 bg-emerald-100/50 p-2 rounded">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-xs uppercase block opacity-70">Correct Answer</span>
                    {q.options[q.correctAnswerIndex]}
                  </div>
                </div>

                <div className="mt-3 text-stone-600 italic border-l-2 border-stone-300 pl-3">
                  <span className="font-bold text-xs text-stone-400 uppercase mr-2">Professor's Guidance:</span>
                  {q.explanation}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-6 bg-stone-50 border-t border-stone-100 flex justify-center gap-4">
        <Button onClick={onRestart} variant="primary" size="lg" className="w-full md:w-auto flex items-center justify-center gap-2">
          <RefreshCw className="w-4 h-4" />
          Restart Exam to Improve Score
        </Button>
      </div>
    </div>
  );
};