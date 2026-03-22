// SOP search engine — hybrid: curated Q&A + full-text search fallback

import { curatedQA } from "./curatedQA";

// === Full-text search engine (fallback) ===
let sentences: { text: string; section: string }[] = [];
let loaded = false;
let loadingPromise: Promise<void> | null = null;

function extractSentences(text: string): { text: string; section: string }[] {
  const results: { text: string; section: string }[] = [];
  let currentSection = "General";
  const lines = text.split("\n");
  let buffer = "";

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (/^\+[-=+]+\+$/.test(trimmed) || /^\|?\s*[-=]+\s*\|?$/.test(trimmed)) continue;

    const headingMatch = trimmed.match(/^(\d+\.?\d*\.?\s+.{5,80})$/);
    if (headingMatch || /^[A-Z][A-Za-z\s,&-]{4,60}:?\s*$/.test(trimmed)) {
      if (buffer.length > 20) pushSentences(buffer, currentSection, results);
      buffer = "";
      currentSection = trimmed.replace(/^\d+\.?\d*\.?\s*/, "").replace(/:$/, "").trim() || currentSection;
      continue;
    }

    buffer += " " + trimmed.replace(/\|/g, " ").replace(/\[.*?\]/g, "");
  }
  if (buffer.length > 20) pushSentences(buffer, currentSection, results);
  return results;
}

function pushSentences(text: string, section: string, results: { text: string; section: string }[]) {
  const parts = text.replace(/\s+/g, " ").split(/(?<=[.!?])\s+(?=[A-Z])/).map(s => s.trim()).filter(s => s.length > 15);
  for (let i = 0; i < parts.length; i++) {
    const chunk = parts.slice(i, i + 2).join(" ");
    if (chunk.length > 15) results.push({ text: chunk, section });
  }
}

export async function loadSOP(): Promise<void> {
  if (loaded) return;
  if (loadingPromise) return loadingPromise;
  loadingPromise = fetch("/sop_knowledge.txt")
    .then(r => r.text())
    .then(text => { sentences = extractSentences(text); loaded = true; });
  return loadingPromise;
}

// === Matching utilities ===
const STOP_WORDS = new Set([
  "the","and","for","are","but","not","you","all","can","has","her","was","one",
  "our","out","his","had","she","how","its","may","who","did","get","let","say",
  "too","use","way","many","then","them","been","have","with","this","that","from",
  "they","will","would","there","their","what","about","which","when","make","like",
  "each","does","into","than","could","other","more","some","very","after","also",
  "should","these","those","being","such","only","over","shall","tell","please",
]);

function tokenize(text: string): string[] {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(w => w.length > 2);
}

function getQueryTerms(query: string): string[] {
  return tokenize(query).filter(w => !STOP_WORDS.has(w));
}

function wordMatch(a: string, b: string): boolean {
  if (a === b) return true;
  const minLen = Math.min(a.length, b.length);
  if (minLen < 4) return a === b;
  const prefixLen = Math.min(minLen, Math.max(4, Math.floor(minLen * 0.75)));
  return a.substring(0, prefixLen) === b.substring(0, prefixLen);
}

// === Curated Q&A matching ===
function matchCuratedQA(query: string): string | null {
  const normalized = query.toLowerCase().replace(/[?.,!'"]/g, "").trim();
  const queryTerms = getQueryTerms(query);

  let bestScore = 0;
  let bestAnswer: string | null = null;

  for (const entry of curatedQA) {
    let score = 0;

    // Check intent phrase matching
    for (const intent of entry.intents) {
      const intentNorm = intent.toLowerCase();
      
      // Exact phrase match — highest score
      if (normalized.includes(intentNorm)) {
        score += intentNorm.split(" ").length * 10;
      } else {
        // Partial word matching
        const intentWords = tokenize(intentNorm).filter(w => !STOP_WORDS.has(w));
        let matched = 0;
        for (const iw of intentWords) {
          if (queryTerms.some(qt => wordMatch(qt, iw))) matched++;
        }
        if (intentWords.length > 0) {
          const ratio = matched / intentWords.length;
          if (ratio >= 0.6) score += matched * 4;
        }
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestAnswer = entry.answer;
    }
  }

  // Require a minimum confidence threshold
  return bestScore >= 6 ? bestAnswer : null;
}

// === Full-text search fallback ===
function searchFullText(queryTerms: string[]): string | null {
  if (!loaded || sentences.length === 0) return null;

  const scored = sentences
    .map(s => {
      const textLower = s.text.toLowerCase();
      const tokens = tokenize(s.text);
      const sectionLower = s.section.toLowerCase();
      let score = 0;
      const matched = new Set<string>();

      for (const term of queryTerms) {
        if (sectionLower.includes(term)) score += 5;
        for (const tok of tokens) {
          if (wordMatch(tok, term)) { score += 3; matched.add(term); break; }
        }
        if (textLower.includes(term)) { score += 2; matched.add(term); }
      }

      const coverage = matched.size / queryTerms.length;
      score *= (0.5 + coverage);
      if (s.text.length < 200) score *= 1.2;
      if (s.text.length > 500) score *= 0.7;

      return { ...s, score };
    })
    .filter(s => s.score > 5)
    .sort((a, b) => b.score - a.score);

  // Deduplicate
  const unique: typeof scored = [];
  for (const item of scored) {
    if (!unique.some(r => r.text.substring(0, 60) === item.text.substring(0, 60))) {
      unique.push(item);
    }
    if (unique.length >= 3) break;
  }

  if (unique.length === 0) return null;

  const bullets = unique
    .map(r => `• ${r.text.replace(/\s+/g, " ").trim()}`)
    .join("\n\n");

  return `Based on the ESAVI SOPs:\n\n${bullets}\n\n*(For more detailed information, please refer to the specific SOP section.)*`;
}

// === Main search function ===
export function searchSOP(query: string): string {
  // 1. Try curated Q&A first
  const curatedAnswer = matchCuratedQA(query);
  if (curatedAnswer) return curatedAnswer;

  // 2. Fall back to full-text search
  const queryTerms = getQueryTerms(query);
  if (queryTerms.length === 0) {
    return "Could you please rephrase your question? Try asking about specific ESAVI topics like detection, reporting, investigation, causality, or case management.";
  }

  const textResult = searchFullText(queryTerms);
  if (textResult) return textResult;

  return `I couldn't find specific information about that in the ESAVI SOPs.\n\nTry asking about:\n• What is an ESAVI?\n• Who is responsible for ESAVI detection?\n• How do I report an ESAVI?\n• What are the reporting deadlines?\n• What is causality assessment?\n• What are the investigation criteria?`;
}
