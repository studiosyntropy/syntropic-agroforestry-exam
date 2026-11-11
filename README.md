# Syntropic Agroforestry Exam

The course exam of Studio Syntropy 趨合工作室 for syntropic agroforestry (Tzu Chi University USR Center 慈濟大學USR教學研究中心 courses).
Each attempt draws 30 random questions from the bank and shuffles the answer options. A score of 85% or more shows the certificate.

## How it is updated (one release path)

1. Edit the questions in `constants.ts` (the correct answer is listed first; the app shuffles the options on every attempt).
2. Keep plant facts in line with PLANTDB, the Studio Syntropy plant database (stages, strata, invasive and threatened species).
3. Raise `EXAM_VERSION` and set `BANK_DATE`; the footer shows both and the number of questions.
4. Commit to `main`. Vercel deploys automatically.

## Run locally

`npm install`, then `npm run dev`. No API key is needed; the questions come from `constants.ts`.
