import { GoogleGenerativeAI } from "@google/generative-ai";
import type { ParsedCriterion, CriterionMatch, HealthProfile } from "./index";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function parseEligibilityCriteria(
  rawText: string
): Promise<ParsedCriterion[]> {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `You are a clinical trial eligibility criteria parser. Given the following eligibility criteria text from ClinicalTrials.gov, extract each individual criterion into a structured JSON array.

For each criterion, provide:
- "type": either "inclusion" or "exclusion"
- "text": the original criterion text
- "category": one of: "age", "diagnosis", "medication", "lab_value", "prior_treatment", "demographics", "procedure", "other"

Return ONLY valid JSON array, no other text.

Eligibility criteria:
${rawText}`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  // Extract JSON from response (handle markdown code blocks)
  const jsonMatch = text.match(/\[[\s\S]*\]/);
  if (!jsonMatch) {
    throw new Error("Failed to parse eligibility criteria from LLM response");
  }

  return JSON.parse(jsonMatch[0]) as ParsedCriterion[];
}

export async function scoreMatch(
  criteria: ParsedCriterion[],
  profile: HealthProfile
): Promise<CriterionMatch[]> {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `You are a clinical trial eligibility matcher. Given a patient profile and a list of eligibility criteria, score each criterion.

Patient profile:
${JSON.stringify(profile, null, 2)}

Criteria:
${JSON.stringify(criteria, null, 2)}

For each criterion, return a JSON array with:
- "criterion": the original criterion object
- "score": "YES" (patient clearly meets this), "NO" (patient clearly fails this), or "MAYBE" (unclear / needs more info)
- "explanation": plain English explanation of why (1-2 sentences)
- "confidence": number between 0 and 1

Return ONLY valid JSON array, no other text.`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  const jsonMatch = text.match(/\[[\s\S]*\]/);
  if (!jsonMatch) {
    throw new Error("Failed to parse match scores from LLM response");
  }

  return JSON.parse(jsonMatch[0]) as CriterionMatch[];
}
