# ClinicalTrialMatch

> AI-powered clinical trial eligibility screener. Helps patients and researchers figure out which trials they actually qualify for — without reading walls of medical jargon.

---

## What it does

Every clinical trial on [ClinicalTrials.gov](https://clinicaltrials.gov) has a long list of **eligibility criteria** — medical requirements like age range, diagnoses, lab values, prior treatments, and medications — written in dense clinical shorthand. Figuring out whether you qualify for a trial means cross-referencing each criterion against your own medical history, which is exhausting and error-prone.

**ClinicalTrialMatch** takes a patient's health profile and uses Claude to:

1. **Parse** the freetext eligibility criteria from any ClinicalTrials.gov trial into structured items
2. **Score** each criterion against the patient's profile (✅ YES / ❌ NO / ⚠️ MAYBE)
3. **Explain** the reasoning in plain English for every individual criterion

The result: a clear, personalized eligibility report instead of a wall of impenetrable medical text.

---

## Tech stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14 (App Router), TypeScript, Tailwind CSS |
| Backend | Next.js API routes (serverless) |
| Database | PostgreSQL (Supabase) |
| Auth | Supabase Auth |
| AI | Anthropic Claude API |
| External API | ClinicalTrials.gov API v2 (free, no key needed) |
| Deployment | Vercel (frontend + API) + Supabase (DB + auth) |
| CI/CD | GitHub Actions |

---

## Project status

🚧 **Early scaffolding** — repo just initialized. Frontend UI is the first thing being built; backend API routes and Claude integration come next.

### Roadmap

- [ ] Frontend UI scaffold (landing, auth, dashboard, search, trial detail)
- [ ] Supabase Auth integration (email + OAuth)
- [ ] ClinicalTrials.gov API v2 wrapper
- [ ] Health profile builder
- [ ] Claude eligibility parsing endpoint
- [ ] Per-criterion match scoring + explanation
- [ ] Match results UI (YES/NO/MAYBE checklist)
- [ ] PDF report export
- [ ] Saved searches + email alerts for new matching trials
- [ ] Production deployment on Vercel

---

## Getting started

> Requires Node.js 18+ and a free Supabase account.

```bash
# Clone the repo
git clone https://github.com/<your-username>/ClinicalTrialMatch.git
cd ClinicalTrialMatch

# Install dependencies (once package.json exists)
npm install

# Copy env template and fill in your keys
cp .env.example .env.local

# Run the dev server
npm run dev
```

### Environment variables

You'll need accounts/keys for:

- **Supabase** — create a project at [supabase.com](https://supabase.com) → grab the project URL and anon key
- **Anthropic** — get an API key at [console.anthropic.com](https://console.anthropic.com) (only needed once you start integrating Claude)

---

## Team

Two-person team. Rough split:

- **Person A** — Claude API prompt engineering pipeline (criteria parser, match scorer, explanation generator), API route design
- **Person B** — Frontend UI, ClinicalTrials.gov API integration, deployment + CI/CD

---

## Disclaimer

This is not a substitute for medical advice. Eligibility scoring is informational only — always confirm with a physician or the trial's research coordinator before enrolling.
