import React, { useState, useEffect } from 'react';
import { generateQuizQuestions, getRandomWisdom } from './services/geminiService';
import { QuizState, Difficulty } from './types';
import { Button } from './components/Button';
import { ProgressBar } from './components/ProgressBar';
import { QuestionCard } from './components/QuestionCard';
import { ResultsView } from './components/ResultsView';
import { Sprout, Wind, Droplets, Lightbulb, User, IdCard, CheckCircle2 } from 'lucide-react';
import { APP_NAME } from './constants';

const initialState: QuizState = {
  currentQuestionIndex: 0,
  score: 0,
  answers: [],
  isFinished: false,
  questions: [],
  status: 'idle',
  studentName: '',
  studentId: ''
};

const App: React.FC = () => {
  const [state, setState] = useState<QuizState>(initialState);
  // Difficulty is fixed for the Official Exam
  const difficulty = Difficulty.INTERMEDIATE; 
  const [dailyWisdom, setDailyWisdom] = useState<string>("");

  // Local state for login inputs
  const [nameInput, setNameInput] = useState("");
  const [idInput, setIdInput] = useState("");

  useEffect(() => {
    setDailyWisdom(getRandomWisdom());
  }, []);

  const startQuiz = async () => {
    if (!nameInput.trim() || !idInput.trim()) return;

    setState(prev => ({ ...prev, status: 'loading' }));
    
    try {
      // Fetch 30 questions for the Official Exam
      const questions = await generateQuizQuestions(difficulty, 30);
      
      // Phase 0: Registration Confirmation
      setState({
        ...initialState,
        studentName: nameInput,
        studentId: idInput,
        questions,
        status: 'registered'
      });

      // Proceed to Phase 1: Active Exam after a brief acknowledgement delay
      setTimeout(() => {
        setState(prev => ({ ...prev, status: 'active' }));
      }, 2500);

    } catch (error) {
      console.error("Failed to start quiz", error);
      setState(prev => ({ ...prev, status: 'error', error: "Could not generate questions." }));
    }
  };

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...state.answers];
    newAnswers[state.currentQuestionIndex] = answerIndex;

    setState(prev => ({
      ...prev,
      answers: newAnswers
    }));
  };

  const handleNext = () => {
    const isLast = state.currentQuestionIndex === state.questions.length - 1;
    
    if (isLast) {
      setState(prev => ({ ...prev, isFinished: true, status: 'finished' }));
    } else {
      setState(prev => ({ ...prev, currentQuestionIndex: prev.currentQuestionIndex + 1 }));
    }
  };

  const restart = () => {
    // We preserve the student name/id in local inputs for convenience, but reset the quiz state
    setState(initialState);
    setDailyWisdom(getRandomWisdom()); 
  };

  // Render Logic
  return (
    <div className="min-h-screen bg-[#f5f5f4] text-stone-800 flex flex-col font-sans selection:bg-emerald-200">
      
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-emerald-800 cursor-pointer" onClick={restart}>
            <Sprout className="w-6 h-6" />
            <h1 className="font-bold text-lg tracking-tight serif">{APP_NAME}</h1>
          </div>
          
          {state.status === 'active' && (
            <div className="w-32 md:w-48">
              <ProgressBar current={state.currentQuestionIndex + 1} total={state.questions.length} />
            </div>
          )}

          {state.status === 'active' && state.studentName && (
             <div className="hidden md:flex items-center gap-2 text-xs font-mono text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
                <User className="w-3 h-3" />
                {state.studentName}
             </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
        
        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-20 left-10 text-emerald-100 opacity-50"><Wind className="w-32 h-32" /></div>
          <div className="absolute bottom-20 right-10 text-stone-200 opacity-50"><Droplets className="w-40 h-40" /></div>
        </div>

        {state.status === 'idle' && (
          <div className="max-w-xl w-full text-center space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-emerald-950 serif tracking-tight">
                Final Examination
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed italic">
                "Welcome to the official examination on Syntropic Agroforestry. Before we begin the 30-question assessment, please <strong>Log In</strong> by entering your <strong>Full Name</strong> and <strong>Student ID</strong>."
              </p>
            </div>

            {/* Professor's Insight Card */}
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-emerald-100/50 relative overflow-hidden group hover:border-emerald-200 transition-all">
               <div className="absolute top-0 left-0 w-1 h-full bg-emerald-400"></div>
               <div className="flex flex-col items-center gap-3">
                 <div className="flex items-center gap-2 text-emerald-700 font-semibold uppercase tracking-wider text-xs">
                   <Lightbulb className="w-4 h-4" />
                   Professor's Thought of the Day
                 </div>
                 <p className="text-stone-700 font-medium italic serif text-center leading-relaxed">
                   "{dailyWisdom}"
                 </p>
               </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200 space-y-6 text-left">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-500 uppercase tracking-wider flex items-center gap-2">
                    <User className="w-4 h-4" /> Full Name
                  </label>
                  <input 
                    type="text" 
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    placeholder="e.g. Jane Doe"
                    className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-500 uppercase tracking-wider flex items-center gap-2">
                    <IdCard className="w-4 h-4" /> Student ID
                  </label>
                  <input 
                    type="text" 
                    value={idInput}
                    onChange={(e) => setIdInput(e.target.value)}
                    placeholder="e.g. ST-2024-001"
                    className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <Button 
                onClick={startQuiz} 
                size="lg" 
                className="w-full shadow-emerald-200/50 shadow-lg"
                disabled={!nameInput.trim() || !idInput.trim()}
              >
                Register & Begin Exam
              </Button>
            </div>
            
            <p className="text-xs text-stone-400">Official Certification Module • Agenda Götsch</p>
          </div>
        )}

        {state.status === 'loading' && (
          <div className="flex flex-col items-center justify-center min-h-[300px] gap-6 text-emerald-800 animate-fade-in">
             <div className="relative w-16 h-16">
               <div className="absolute inset-0 border-4 border-stone-200 rounded-full"></div>
               <div className="absolute inset-0 border-4 border-emerald-600 rounded-full border-t-transparent animate-spin"></div>
               <Sprout className="absolute inset-0 m-auto w-6 h-6 animate-pulse" />
             </div>
             <p className="font-medium animate-pulse text-lg">
               Verifying Credentials...
             </p>
          </div>
        )}

        {state.status === 'registered' && (
          <div className="flex flex-col items-center justify-center min-h-[300px] gap-6 text-emerald-900 animate-fade-in">
             <div className="bg-emerald-100 p-6 rounded-full shadow-lg ring-4 ring-emerald-50">
               <CheckCircle2 className="w-16 h-16 text-emerald-600" />
             </div>
             <div className="text-center space-y-2">
               <h3 className="text-2xl font-bold serif">Registration Confirmed</h3>
               <p className="text-lg text-stone-600 max-w-md">
                 Thank you, <span className="font-bold text-emerald-800">{state.studentName}</span>.<br/> 
                 Your ID <span className="font-mono bg-stone-100 px-2 py-0.5 rounded text-sm text-stone-800">{state.studentId}</span> has been registered.
               </p>
               <p className="text-sm text-stone-400 pt-4 animate-pulse">Initializing Question 1...</p>
             </div>
          </div>
        )}

        {state.status === 'active' && state.questions.length > 0 && (
          <QuestionCard 
            question={state.questions[state.currentQuestionIndex]}
            questionIndex={state.currentQuestionIndex}
            totalQuestions={state.questions.length}
            onAnswer={handleAnswer}
            isAnswered={state.answers[state.currentQuestionIndex] !== undefined}
            selectedAnswerIndex={state.answers[state.currentQuestionIndex] ?? null}
            onNext={handleNext}
            isLast={state.currentQuestionIndex === state.questions.length - 1}
          />
        )}

        {state.status === 'finished' && (
          <ResultsView state={state} onRestart={restart} />
        )}
      </main>
    </div>
  );
};

export default App;