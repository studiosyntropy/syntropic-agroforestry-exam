// Sends exam feedback (question flags, survey answers) to the private Studio Syntropy feedback store.
// The store lives with Syntropic Botanicals Taiwan (api/feedback.js); reports are read in its /inbox.html.
import { EXAM_VERSION, BANK_DATE } from '../constants';

export const FEEDBACK_API = 'https://syntropic-botanicals-taiwan.vercel.app/api/feedback';
export const FEEDBACK_EMAIL = 'studiosyntropy@proton.me';
const TEST = new URLSearchParams(window.location.search).has('fbtest');

export type FeedbackKind = 'question' | 'exam-survey';

export async function sendFeedback(kind: FeedbackKind, fields: Record<string, unknown>, startedAt: number): Promise<string> {
  const body = {
    tool: 'exam', kind, appVersion: EXAM_VERSION, dataDate: BANK_DATE, lang: 'en', page: window.location.pathname,
    elapsedMs: Date.now() - startedAt, test: TEST, ...fields,
  };
  const res = await fetch(FEEDBACK_API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  const out = await res.json().catch(() => ({}));
  if (!res.ok || !out.ok) throw new Error(out.error || `HTTP ${res.status}`);
  return String(out.id);
}

export function feedbackMailto(subject: string, lines: string[]): string {
  return `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.filter(Boolean).join('\n'))}`;
}
