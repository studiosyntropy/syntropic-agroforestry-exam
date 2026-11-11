import React, { useId, useMemo, useState } from 'react';
import { Leaf, Check } from 'lucide-react';
import { Button } from './Button';
import { Chip } from './Chip';
import { sendFeedback, feedbackMailto } from '../services/feedback';
import { APP_NAME, EXAM_VERSION } from '../constants';

const RATING_LABELS = ['Not useful', 'A little useful', 'Useful', 'Very useful', 'Extremely useful'];
const DIFFICULTY = ['Too easy', 'About right', 'Too hard'];
const IMPROVE = ['More plant questions', 'More field situations', 'Clearer wording', 'A Chinese version', 'More explanations', 'Images or diagrams'];

interface ExamSurveyProps {
  score?: number;
  studentName?: string;
  general?: boolean;
}

// One-minute survey about the exam: a rating, difficulty, what to improve and a comment.
export const ExamSurvey: React.FC<ExamSurveyProps> = ({ score, studentName, general }) => {
  const startedAt = useMemo(() => Date.now(), []);
  const uid = useId();
  const titleId = `survey-title-${uid}`;
  const ratingId = `rating-label-${uid}`;
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [difficulty, setDifficulty] = useState('');
  const [improve, setImprove] = useState<string[]>([]);
  const [comment, setComment] = useState('');
  const [withName, setWithName] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [reportId, setReportId] = useState('');
  const ready = rating > 0 || !!difficulty || improve.length > 0 || comment.trim().length > 0;
  const toggle = (v: string) => setImprove((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]));

  const send = async () => {
    setStatus('sending');
    try {
      const id = await sendFeedback('exam-survey', {
        rating: rating || null, difficulty, improve, comment: comment.trim(), score: score ?? null,
        name: withName && studentName ? studentName : '', role: 'Course participant',
      }, startedAt);
      setReportId(id);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div role="status" className="w-full max-w-2xl mx-auto bg-white rounded-2xl border border-stone-200 p-6 text-center space-y-2">
        <Check className="w-8 h-8 mx-auto text-emerald-600" />
        <p className="text-lg font-bold text-emerald-900 serif">Thank you!</p>
        <p className="text-sm text-stone-600">Report {reportId}. Your answers help shape the next version of the exam.</p>
      </div>
    );
  }

  const shown = hover || rating;
  return (
    <section aria-labelledby={titleId} className="w-full max-w-2xl mx-auto bg-white rounded-2xl border border-stone-200 border-t-[3px] border-t-[#D7A23E] p-6 md:p-8 space-y-5 text-left">
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-emerald-600">Beta · about one minute</p>
        <h3 id={titleId} className="text-xl font-bold text-emerald-950 serif mt-1">{general ? 'Feedback on the exam' : 'Help improve this exam'}</h3>
        <p className="text-sm text-stone-600 mt-1">This exam is still a beta. Every answer helps us make it clearer and more useful.</p>
      </div>

      <div>
        <p id={ratingId} className="text-sm font-bold text-stone-700 mb-2">How useful was it for your learning?</p>
        <div role="radiogroup" aria-labelledby={ratingId} className="flex items-center gap-1" onMouseLeave={() => setHover(0)}>
          {RATING_LABELS.map((label, i) => (
            <button
              key={label}
              type="button"
              role="radio"
              aria-checked={rating === i + 1}
              aria-label={`${i + 1} of 5: ${label}`}
              title={label}
              onClick={() => setRating(i + 1)}
              onMouseEnter={() => setHover(i + 1)}
              className="p-1.5 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <Leaf className={`w-8 h-8 transition-colors ${i < shown ? 'text-emerald-600' : 'text-stone-300'}`} fill={i < shown ? 'currentColor' : 'none'} />
            </button>
          ))}
          <span className="ml-2 text-sm text-stone-600" aria-hidden="true">{shown ? RATING_LABELS[shown - 1] : ''}</span>
        </div>
      </div>

      <div>
        <p className="text-sm font-bold text-stone-700 mb-2">How difficult was it?</p>
        <div className="flex flex-wrap gap-2">
          {DIFFICULTY.map((d) => <Chip key={d} on={difficulty === d} onClick={() => setDifficulty(difficulty === d ? '' : d)}>{d}</Chip>)}
        </div>
      </div>

      <div>
        <p className="text-sm font-bold text-stone-700 mb-2">What would make it better?</p>
        <div className="flex flex-wrap gap-2">
          {IMPROVE.map((v) => <Chip key={v} on={improve.includes(v)} onClick={() => toggle(v)}>{v}</Chip>)}
        </div>
      </div>

      <label className="block text-sm font-bold text-stone-700">
        Anything else? <span className="font-normal text-stone-500">(optional)</span>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="What worked well, what was confusing, what you would add"
          className="mt-1 w-full min-h-[90px] p-3 bg-stone-50 border border-stone-300 rounded-lg font-normal focus:ring-2 focus:ring-emerald-500 focus:outline-none"
        />
      </label>

      {studentName && (
        <label className="flex items-start gap-3 text-sm text-stone-700">
          <input type="checkbox" checked={withName} onChange={(e) => setWithName(e.target.checked)} className="w-5 h-5 mt-0.5 accent-emerald-700" />
          <span>Add my name ({studentName}) so the instructor can follow up. Otherwise the survey is anonymous.</span>
        </label>
      )}

      {status === 'error' && (
        <p role="alert" className="text-sm font-bold text-red-800">
          Could not send right now.{' '}
          <a
            className="underline"
            href={feedbackMailto(`${APP_NAME} v${EXAM_VERSION}: feedback`, [
              rating ? `Usefulness: ${rating} of 5` : '', difficulty ? `Difficulty: ${difficulty}` : '', improve.length ? `Improve: ${improve.join('; ')}` : '',
              comment.trim() ? `Comment: ${comment.trim()}` : '', score !== undefined ? `Score: ${score}%` : '',
            ])}
          >
            Send it by email instead
          </a>.
        </p>
      )}

      <div className="flex justify-end">
        <Button onClick={send} disabled={!ready} isLoading={status === 'sending'}>Send feedback</Button>
      </div>
    </section>
  );
};
