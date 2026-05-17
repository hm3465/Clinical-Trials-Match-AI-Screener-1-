export interface HealthProfile {
  age?: number;
  sex?: string;
  conditions: string[];
  medications: string[];
  labValues: Record<string, string | number>;
  priorTreatments: string[];
  otherNotes?: string;
}

export interface ParsedCriterion {
  type: "inclusion" | "exclusion";
  text: string;
  category: string;
}

export interface CriterionMatch {
  criterion: ParsedCriterion;
  score: "YES" | "NO" | "MAYBE";
  explanation: string;
  confidence: number;
}

export { parseEligibilityCriteria, scoreMatch } from "./gemini";
