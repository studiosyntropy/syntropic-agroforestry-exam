import { Question, Difficulty } from '../types';
import { QUESTION_BANK } from '../constants';

// Helper to shuffle options within a question while tracking the correct answer
const shuffleOptions = (question: Question): Question => {
  // Create an array of indices [0, 1, 2...] based on options length
  const indices = question.options.map((_, i) => i);
  
  // Fisher-Yates shuffle the indices
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  // Map the options to their new positions
  const newOptions = indices.map(i => question.options[i]);
  
  // Find where the original correct answer index moved to
  const newCorrectIndex = indices.indexOf(question.correctAnswerIndex);

  return {
    ...question,
    options: newOptions,
    correctAnswerIndex: newCorrectIndex
  };
};

export const generateQuizQuestions = async (difficulty: Difficulty, count: number): Promise<Question[]> => {
  // Simulate network delay for effect
  await new Promise(resolve => setTimeout(resolve, 800));

  // 1. Shuffle the entire question bank to get random questions
  const shuffledBank = [...QUESTION_BANK].sort(() => 0.5 - Math.random());
  
  // 2. Select the requested number of questions
  const selectedQuestions = shuffledBank.slice(0, count);

  // 3. Shuffle the options for each selected question (Entropy Protocol)
  // This ensures the correct answer is not always "B" or in a predictable spot.
  const processedQuestions = selectedQuestions.map(shuffleOptions);
  
  return processedQuestions;
};

export const getRandomWisdom = (): string => {
  if (QUESTION_BANK.length === 0) return "Nature is the best teacher.";
  const randomIndex = Math.floor(Math.random() * QUESTION_BANK.length);
  return QUESTION_BANK[randomIndex].explanation;
};