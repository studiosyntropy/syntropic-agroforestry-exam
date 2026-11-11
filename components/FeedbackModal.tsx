import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { ExamSurvey } from './ExamSurvey';

interface FeedbackModalProps {
  open: boolean;
  onClose: () => void;
}

// Feedback window opened from the Beta label and the footer link.
export const FeedbackModal: React.FC<FeedbackModalProps> = ({ open, onClose }) => {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const opener = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('keydown', onKey); opener?.focus(); };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-start md:items-center justify-center p-4 overflow-y-auto"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div role="dialog" aria-modal="true" aria-label="Feedback on the exam" className="relative w-full max-w-2xl my-4">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-11 h-11 flex items-center justify-center rounded-full text-stone-600 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <X className="w-5 h-5" />
        </button>
        <ExamSurvey general />
      </div>
    </div>
  );
};
