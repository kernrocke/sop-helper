// SOP full-text search engine
// Loads sop_knowledge.txt, splits into passages, and ranks by relevance

let passages: string[] = [];
let loaded = false;
let loadingPromise: Promise<void> | null = null;

function splitIntoPassages(text: string): string[] {
  // Split by numbered sections, headings, or double newlines
  const raw = text.split(/\n{2,}/);
  const result: string[] = [];
  let buffer = "";

  for (const chunk of raw) {
    const trimmed = chunk.trim();
    if (!trimmed) continue;
    
    // If it looks like a heading/section start, flush buffer and start new
    if (/^\d+\.?\s+[A-Z]/.test(trimmed) || /^[A-Z][A-Za-z\s]+:?\s*$/.test(trimmed.split("\n")[0])) {
      if (buffer.length > 100) result.push(buffer.trim());
      buffer = trimmed;
    } else {
      buffer += "\n\n" + trimmed;
    }
    
    // Keep passages manageable size (split if too long)
    if (buffer.length > 1500) {
      result.push(buffer.trim());
      buffer = "";
    }
  }
  if (buffer.length > 50) result.push(buffer.trim());
  return result;
}

export async function loadSOP(): Promise<void> {
  if (loaded) return;
  if (loadingPromise) return loadingPromise;
  
  loadingPromise = fetch("/sop_knowledge.txt")
    .then(r => r.text())
    .then(text => {
      passages = splitIntoPassages(text);
      loaded = true;
    });
  return loadingPromise;
}

// Tokenize text into words
function tokenize(text: string): string[] {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(w => w.length > 2);
}

// Stop words to ignore
const STOP_WORDS = new Set([
  "the", "and", "for", "are", "but", "not", "you", "all", "can", "has", "her",
  "was", "one", "our", "out", "his", "had", "she", "how", "its", "may", "who",
  "did", "get", "let", "say", "too", "use", "way", "many", "then", "them",
  "been", "have", "with", "this", "that", "from", "they", "will", "would",
  "there", "their", "what", "about", "which", "when", "make", "like", "each",
  "does", "into", "than", "could", "other", "more", "some", "very", "after",
  "also", "should", "these", "those", "being", "such", "only", "over", "shall",
]);

function getQueryTerms(query: string): string[] {
  return tokenize(query).filter(w => !STOP_WORDS.has(w));
}

// Score a passage against query terms using term frequency
function scorePassage(passage: string, queryTerms: string[]): number {
  const passageLower = passage.toLowerCase();
  const passageTokens = tokenize(passage);
  let score = 0;

  for (const term of queryTerms) {
    // Exact word match count
    const count = passageTokens.filter(t => t === term || t.startsWith(term) || term.startsWith(t)).length;
    score += count * 2;

    // Phrase proximity bonus - if query terms appear near each other
    if (passageLower.includes(term)) {
      score += 3;
    }
  }

  // Bonus for multiple query terms appearing together
  const matchedTerms = queryTerms.filter(t => passageLower.includes(t));
  if (matchedTerms.length > 1) {
    score += matchedTerms.length * 5;
  }

  // Penalize very long passages slightly (prefer focused content)
  if (passage.length > 1000) score *= 0.9;

  return score;
}

// Format passage for display - clean up markdown artifacts
function formatPassage(passage: string): string {
  return passage
    .replace(/\+[-=]+\+/g, "") // remove table borders
    .replace(/\|/g, "") // remove table pipes
    .replace(/\[.*?\]/g, "") // remove bracket references
    .replace(/\n{3,}/g, "\n\n") // collapse multiple newlines
    .trim();
}

export function searchSOP(query: string): string {
  if (!loaded || passages.length === 0) {
    return "I'm still loading the SOP documents. Please try again in a moment.";
  }

  const queryTerms = getQueryTerms(query);
  if (queryTerms.length === 0) {
    return "Could you please rephrase your question? Try asking about specific ESAVI topics like detection, reporting, investigation, causality, or case management.";
  }

  // Score all passages
  const scored = passages
    .map((p, i) => ({ passage: p, index: i, score: scorePassage(p, queryTerms) }))
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score);

  if (scored.length === 0) {
    return `I couldn't find information about "${query}" in the ESAVI Standard Operating Procedures.\n\nTry asking about:\n• ESAVI detection and notification\n• Reporting procedures and deadlines\n• Investigation process\n• Causality assessment\n• Case management\n• Data management and analysis`;
  }

  // Take top 1-3 passages depending on scores
  const topResults = scored.slice(0, Math.min(3, scored.length));
  
  // If the top result is significantly better, just use it
  if (topResults.length > 1 && topResults[0].score > topResults[1].score * 2) {
    return `Based on the ESAVI SOPs:\n\n${formatPassage(topResults[0].passage)}`;
  }

  const combined = topResults
    .map(r => formatPassage(r.passage))
    .join("\n\n---\n\n");

  return `Based on the ESAVI SOPs:\n\n${combined}`;
}
