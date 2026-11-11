# Syntropic Agroforestry Exam

The course exam of Studio Syntropy 趨合工作室 for syntropic agroforestry (Tzu Chi University USR Center 慈濟大學USR教學研究中心 courses).
Each attempt draws 30 random questions from the bank and shuffles the answer options. A score of 85% or more shows the certificate.

## How it is updated (one release path)

1. Edit the questions in `constants.ts` (the correct answer is listed first; the app shuffles the options on every attempt).
2. Keep plant facts in line with PLANTDB, the Studio Syntropy plant database (stages, strata, invasive and threatened species).
3. Raise `EXAM_VERSION` and set `BANK_DATE`; the footer shows both and the number of questions.
4. Commit to `main`. Vercel deploys automatically. This is the only release path (the former GitHub Pages copy was retired on 2026-11-11).

## Feedback (beta)

- After answering, any question can be flagged ("Flag this question": what seems off, plus an optional comment). Failed attempts can also flag questions from the review list.
- The results page ends with a one-minute survey (usefulness, difficulty, what to improve, comment). The name is sent only if the student ticks the box; flags never include name or student ID.
- The Beta label in the header and "Send feedback" in the footer open the same survey at any time.
- Reports go to the private Studio Syntropy feedback store (`services/feedback.ts` → `https://syntropic-botanicals-taiwan.vercel.app/api/feedback`) and are read in the inbox at `https://syntropic-botanicals-taiwan.vercel.app/inbox.html`. If sending fails, the form offers a prepared email.

## Run locally

`npm install`, then `npm run dev`. No API key is needed; the questions come from `constants.ts`.
