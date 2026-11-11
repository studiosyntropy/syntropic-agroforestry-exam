import React, { useState } from 'react';
import { Flag, Check } from 'lucide-react';
import { Question } from '../types';
import { Button } from './Button';
import { Chip } from './Chip';
import { sendFeedback, feedbackMailto } from '../services/feedback';
import { APP_NAME, EXAM_VERSION } from '../constants';

const REASONS = [
  'The marked answer seems wrong',
  'More than one answer could be right',
  'The question is unclear',
  'The explanation is wrong or unclear',
  'Typo or wording',
  'Something else',
];

interface FlagQuestionProps {
  question: Question;
  selectedAnswerIndex: number | null;
  startedAt: number;
}

// "Flag this question": a short guided report on one exam question. Name and student ID are never sent.
export const FlagQuestion: React.FC<FlagQuestionProps> = ({ question, selectedAnswerIndex, startedAt }) => {
  const [open, setOpen] = useState(false);
  const [reasons, setReasons] = useState<string[]>([]);
  const [comment, setComment] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [reportId, setReportId] = useState('');

  const chosen = selectedAnswerIndex !== null ? question.options[selectedAnswerIndex] : '';
  const correct = question.options[question.correctAnswerIndex];
  const toggle = (r: string) => setReasons((prev) => (prev.includes(r) ? prev.filter((x) => x !== r) : [...prev, r]));

  const send = async () => {
    setStatus('sending');
    try {
      const id = await sendFeedback('question', {
        question: { id: question.id, text: question.questionText, options: question.options, correct, chosen },
        reasons, comment: comment.trim(),
      }, startedAt);
      setReportId(id);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <p role="status" className="flex items-start gap-2 text-sm text-emerald-800 bg-emerald-50 border border-emerald-100 rounded-lg p-3">
        <Check className="w-4 h-4 mt-0.5 shrink-0" />
        <span>Thank you. This question is flagged as report {reportId}, and we will review it.</span>
      </p>
    );
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 min-h-[44px] text-sm font-bold text-emerald-700 underline underline-offset-4 decoration-emerald-300 hover:decoration-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded"
      >
        <Flag className="w-4 h-4" /> Flag this question
      </button>
    );
  }

  const titleId = `flag-title-${question.id}`;
  return (
    <div role="group" aria-labelledby={titleId} className="rounded-xl border border-stone-300 bg-stone-50 p-4 space-y-3 text-left">
      <p id={titleId} className="font-bold text-stone-900">What seems off?</p>
      <div className="flex flex-wrap gap-2">
        {REASONS.map((r) => <Chip key={r} on={reasons.includes(r)} onClick={() => toggle(r)}>{r}</Chip>)}
      </div>
      <label className="block text-sm font-bold text-stone-700">
        Tell us more <span className="font-normal text-stone-500">(optional)</span>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="For example, what the right answer should be, and a source"
          className="mt-1 w-full min-h-[80px] p-3 bg-white border border-stone-300 rounded-lg font-normal focus:ring-2 focus:ring-emerald-500 focus:outline-none"
        />
      </label>
      {status === 'error' && (
        <p role="alert" className="text-sm font-bold text-red-800">
          Could not send right now.{' '}
          <a
            className="underline"
            href={feedbackMailto(`${APP_NAME} v${EXAM_VERSION}: question ${question.id}`, [
              `Question ${question.id}: ${question.questionText}`, `Marked answer: ${correct}`, chosen ? `My answer: ${chosen}` : '',
              `What seems off: ${reasons.join('; ')}`, comment.trim() ? `Comment: ${comment.trim()}` : '',
            ])}
          >
            Send it by email instead
          </a>.
        </p>
      )}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-stone-500">Your name and student ID are not sent with this report.</p>
        <div className="flex gap-2 ml-auto">
          <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>Cancel</Button>
          <Button size="sm" onClick={send} disabled={!reasons.length} isLoading={status === 'sending'}>Send</Button>
        </div>
      </div>
    </div>
  );
};
