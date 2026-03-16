export enum Difficulty {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced'
}

export interface Question {
  id: string;
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  category: string; // e.g., "Stratification", "Succession", "Management"
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  answers: number[]; // Index of selected answer for each question
  isFinished: boolean;
  questions: Question[];
  status: 'idle' | 'loading' | 'registered' | 'active' | 'error' | 'finished';
  error?: string;
  studentName: string;
  studentId: string;
}

export interface QuizConfig {
  difficulty: Difficulty;
  questionCount: number;
}