# ClinicalTrialMatch

> AI-powered clinical trial eligibility screener. Helps patients and researchers figure out which trials they actually qualify for — without reading walls of medical jargon.

---

## What it does

Every clinical trial on [ClinicalTrials.gov](https://clinicaltrials.gov) has a long list of **eligibility criteria** — medical requirements like age range, diagnoses, lab values, prior treatments, and medications — written in dense clinical shorthand. Figuring out whether you qualify for a trial means cross-referencing each criterion against your own medical history, which is exhausting and error-prone.

**ClinicalTrialMatch** takes a patient's health profile and uses an LLM to:

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
| AI (default) | **Google Gemini API** — free tier, no credit card |
| AI (optional) | Anthropic Claude API · OpenRouter · Groq · Ollama (local) |
| External API | ClinicalTrials.gov API v2 (free, no key needed) |
| Deployment | Vercel (frontend + API) + Supabase (DB + auth) |
| CI/CD | GitHub Actions |

---

## Cost breakdown

The entire project is **free to build, demo, and run for small-scale use**. Here's the honest breakdown:

| Service | Free tier covers | Notes |
|---------|------------------|-------|
| **Google Gemini API** | 1,500 requests/day, 15 req/min | No credit card needed. Solid quality for structured extraction. |
| **Supabase** | 50K MAU, 500MB Postgres, 1GB storage | More than enough for development + demo |
| **Vercel** | Next.js hosting, 100GB bandwidth/mo | Free Hobby plan |
| **ClinicalTrials.gov API v2** | Unlimited | Free US government API, no key needed |
| **GitHub Actions** | 2,000 min/mo (unlimited on public repos) | For CI/CD |

If you outgrow Gemini's free tier or want higher quality, the code is structured so you can swap in Claude, GPT-4, or any other provider without changing frontend code.

---

## LLM provider options

The LLM call lives behind a single provider-agnostic interface (`lib/llm/`), so swapping providers is a one-line change. Pick whichever fits your budget and quality needs:

| Provider | Free tier | Quality | Best for |
|----------|-----------|---------|----------|
| **Gemini 2.5 Flash** ⭐ | 1,500 req/day, no card | Very good | Default — best free option |
| Groq (Llama 3.3) | Free, generous limits | Good | Fastest inference, free |
| OpenRouter | Some free models | Varies | Try multiple models from one API |
| Ollama (local) | Unlimited, runs on your machine | Decent | 100% offline, no API at all |
| Claude Sonnet 4.6 | Pay-as-you-go (~$0.05–0.10/match) | Excellent | Production quality, paid |
| OpenAI GPT-4.1 | Pay-as-you-go | Excellent | Paid alternative |

---

## Project status

🚧 **Early scaffolding** — repo just initialized. Frontend UI is the first thing being built; backend API routes and LLM integration come next.

### Roadmap

- [ ] Frontend UI scaffold (landing, auth, dashboard, search, trial detail)
- [ ] Supabase Auth integration (email + OAuth)
- [ ] ClinicalTrials.gov API v2 wrapper
- [ ] Health profile builder
- [ ] LLM eligibility parsing endpoint (Gemini default, swappable)
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

You'll need free accounts for:

- **Supabase** — create a project at [supabase.com](https://supabase.com) → grab the project URL and anon key
- **Google AI Studio** — get a free Gemini API key at [aistudio.google.com](https://aistudio.google.com) (no credit card required)

Optional, for swapping in other LLM providers later:

- **Anthropic** — [console.anthropic.com](https://console.anthropic.com) (paid)
- **Groq** — [console.groq.com](https://console.groq.com) (free)
- **OpenRouter** — [openrouter.ai](https://openrouter.ai) (some free models)

---

## Team

Two-person team. Rough split:

- **Person A** — LLM prompt engineering pipeline (criteria parser, match scorer, explanation generator), API route design
- **Person B** — Frontend UI, ClinicalTrials.gov API integration, deployment + CI/CD

---

## Disclaimer

This is not a substitute for medical advice. Eligibility scoring is informational only — always confirm with a physician or the trial's research coordinator before enrolling.
