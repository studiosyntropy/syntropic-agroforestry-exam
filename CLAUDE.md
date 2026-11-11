# Instructions for Claude: Syntropic Agroforestry Exam

- The owner is not a coder. Make all code changes yourself, build (`npm run build`) and test in a browser before committing.
- Release path: commit to `main` → Vercel deploys. Raise `EXAM_VERSION` and set `BANK_DATE` in `constants.ts` with every change of questions.
- Question rules: one question per fact (no duplicates); three options of similar length; the correct answer first in the source; no options such as "Both A and B" (options are shuffled).
- Plant facts must match PLANTDB (Google Sheet `1mBqxSsHWZSdOnzJsCPt5vmrBcxOvzLpfdqcADuzLu0c`): stage windows P1 0–6 months, P2 6–24 months, S1 2–5 years, S2 5–21 years, C over 21 years; invasive species (e.g. Napier grass, guinea grass incl. Mombasa, Tithonia, Leucaena) are "use and manage existing stands, do not spread"; threatened species are planted from nursery stock only.
- Certificate: Tobias Chen · 陳拓彼, Instructor; Tzu Chi University USR Center · 慈濟大學USR教學研究中心.
- Keep the Studio Syntropy brand (palette in the Tailwind config in `index.html`, fonts Atkinson Hyperlegible Next / Bricolage Grotesque / Noto Sans TC, V8 logo in `public/`).
- Chinese in Traditional Chinese (Taiwan) with pinyin; metric units.
