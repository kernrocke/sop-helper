// SOP search engine — sentence-level retrieval for concise, relevant answers

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

    // Detect section headings
    const headingMatch = trimmed.match(/^(\d+\.?\d*\.?\s+.{5,80})$/);
    if (headingMatch || /^[A-Z][A-Za-z\s,&-]{4,60}:?\s*$/.test(trimmed)) {
      if (buffer.length > 20) {
        pushSentences(buffer, currentSection, results);
      }
      buffer = "";
      currentSection = trimmed.replace(/^\d+\.?\d*\.?\s*/, "").replace(/:$/, "").trim() || currentSection;
      continue;
    }

    // Skip table formatting lines
    if (/^\+[-=+]+\+$/.test(trimmed) || /^\|?\s*[-=]+\s*\|?$/.test(trimmed)) continue;

    buffer += " " + trimmed.replace(/\|/g, " ").replace(/\[.*?\]/g, "");
  }
  if (buffer.length > 20) pushSentences(buffer, currentSection, results);

  return results;
}

function pushSentences(text: string, section: string, results: { text: string; section: string }[]) {
  // Split into sentences
  const parts = text
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+(?=[A-Z])|(?<=\n)\s*(?=[a-z])/g)
    .map(s => s.trim())
    .filter(s => s.length > 15);

  // Group into chunks of 1-3 sentences for context
  for (let i = 0; i < parts.length; i++) {
    const chunk = parts.slice(i, i + 2).join(" ");
    if (chunk.length > 15) {
      results.push({ text: chunk, section });
    }
  }
}

export async function loadSOP(): Promise<void> {
  if (loaded) return;
  if (loadingPromise) return loadingPromise;

  loadingPromise = fetch("/sop_knowledge.txt")
    .then(r => r.text())
    .then(text => {
      sentences = extractSentences(text);
      loaded = true;
    });
  return loadingPromise;
}

const STOP_WORDS = new Set([
  "the", "and", "for", "are", "but", "not", "you", "all", "can", "has", "her",
  "was", "one", "our", "out", "his", "had", "she", "how", "its", "may", "who",
  "did", "get", "let", "say", "too", "use", "way", "many", "then", "them",
  "been", "have", "with", "this", "that", "from", "they", "will", "would",
  "there", "their", "what", "about", "which", "when", "make", "like", "each",
  "does", "into", "than", "could", "other", "more", "some", "very", "after",
  "also", "should", "these", "those", "being", "such", "only", "over", "shall",
]);

function tokenize(text: string): string[] {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(w => w.length > 2);
}

function getQueryTerms(query: string): string[] {
  return tokenize(query).filter(w => !STOP_WORDS.has(w));
}

// Stem-like matching: check if words share a common root (simple prefix match)
function wordMatch(a: string, b: string): boolean {
  if (a === b) return true;
  const minLen = Math.min(a.length, b.length);
  if (minLen < 4) return a === b;
  // Share at least 80% prefix
  const prefixLen = Math.min(minLen, Math.max(4, Math.floor(minLen * 0.8)));
  return a.substring(0, prefixLen) === b.substring(0, prefixLen);
}

function scoreSentence(item: { text: string; section: string }, queryTerms: string[]): number {
  const textLower = item.text.toLowerCase();
  const tokens = tokenize(item.text);
  const sectionLower = item.section.toLowerCase();
  let score = 0;

  const matched = new Set<string>();

  for (const term of queryTerms) {
    // Check section relevance
    if (sectionLower.includes(term)) score += 5;

    // Token matching with stemming
    for (const tok of tokens) {
      if (wordMatch(tok, term)) {
        score += 3;
        matched.add(term);
        break;
      }
    }

    // Substring presence
    if (textLower.includes(term)) {
      score += 2;
      matched.add(term);
    }
  }

  // Coverage bonus: reward matching more query terms
  const coverage = matched.size / queryTerms.length;
  score *= (0.5 + coverage);

  // Prefer shorter, focused sentences
  if (item.text.length < 200) score *= 1.2;
  if (item.text.length > 500) score *= 0.7;

  return score;
}

// Deduplicate similar sentences
function deduplicate(items: { text: string; section: string; score: number }[]): typeof items {
  const result: typeof items = [];
  for (const item of items) {
    const isDuplicate = result.some(r => {
      const overlap = item.text.substring(0, 60);
      return r.text.includes(overlap) || overlap.length > 20 && r.text.substring(0, 60) === overlap;
    });
    if (!isDuplicate) result.push(item);
  }
  return result;
}

export function searchSOP(query: string): string {
  if (!loaded || sentences.length === 0) {
    return "I'm still loading the SOP documents. Please try again in a moment.";
  }

  const queryTerms = getQueryTerms(query);
  if (queryTerms.length === 0) {
    return "Could you please rephrase your question? Try asking about specific ESAVI topics like detection, reporting, investigation, causality, or case management.";
  }

  // Score all sentences
  const scored = sentences
    .map(s => ({ ...s, score: scoreSentence(s, queryTerms) }))
    .filter(s => s.score > 3)
    .sort((a, b) => b.score - a.score);

  const unique = deduplicate(scored);

  if (unique.length === 0) {
    return `I couldn't find specific information about that in the ESAVI SOPs.\n\nTry asking about:\n• What is an ESAVI?\n• How to detect and report ESAVIs\n• Investigation procedures\n• Causality assessment process\n• Case management phases`;
  }

  // Take top 3-5 most relevant sentences and group by section
  const top = unique.slice(0, 5);
  const sections = new Map<string, string[]>();

  for (const item of top) {
    const sec = item.section || "General";
    if (!sections.has(sec)) sections.set(sec, []);
    sections.get(sec)!.push(item.text.replace(/\s+/g, " ").trim());
  }

  let response = "**Based on the ESAVI SOPs:**\n\n";
  for (const [section, texts] of sections) {
    if (sections.size > 1) response += `**${section}:**\n`;
    for (const t of texts) {
      response += `• ${t}\n\n`;
    }
  }

  return response.trim();
}
