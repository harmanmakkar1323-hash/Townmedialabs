/**
 * Utilities for extracting structured data (FAQs, HowTo steps) from blog article HTML content.
 * Used to generate schema markup for articles that contain these patterns in their content.
 */

interface FAQ {
  question: string;
  answer: string;
}

interface HowToStep {
  name: string;
  text: string;
}

interface HowToData {
  name: string;
  steps: HowToStep[];
}

/**
 * Strip HTML tags from a string, returning plain text.
 */
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&ldquo;/g, "\u201C")
    .replace(/&rdquo;/g, "\u201D")
    .replace(/&lsquo;/g, "\u2018")
    .replace(/&rsquo;/g, "\u2019")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .trim();
}

/**
 * Extract FAQ question/answer pairs from blog article HTML content.
 *
 * Looks for sections starting with an <h2> containing "Frequently Asked Questions",
 * then collects <h3>question</h3> + next <p>answer</p> pairs until the next <h2> or <hr />.
 */
export function extractFAQs(content: string): FAQ[] {
  const faqs: FAQ[] = [];

  // Find the FAQ section: <h2>...Frequently Asked Questions...</h2>
  const faqSectionMatch = content.match(
    /<h2>[^<]*Frequently Asked Questions[^<]*<\/h2>([\s\S]*?)(?=<h2>|$)/i
  );
  if (!faqSectionMatch) return faqs;

  const faqSection = faqSectionMatch[1];

  // Extract <h3>question</h3> followed by <p>answer</p>
  const qaPairRegex = /<h3>(.+?)<\/h3>\s*<p>([\s\S]*?)<\/p>/gi;
  let match;
  while ((match = qaPairRegex.exec(faqSection)) !== null) {
    const question = stripHtml(match[1]);
    const answer = stripHtml(match[2]);
    if (question && answer) {
      faqs.push({ question, answer });
    }
  }

  return faqs;
}

/**
 * Extract HowTo steps from blog article HTML content.
 *
 * Looks for sections with <h3>Step N: title</h3> or <h2>Step N: title</h2> patterns,
 * then collects the step name and the first <p> after it as the step text.
 *
 * Also captures the parent <h2> heading as the HowTo name if present.
 */
export function extractHowToSteps(content: string): HowToData | null {
  // Find a section that introduces step-by-step content
  // Look for <h2> with "Step-by-Step" or "How to" that precedes Step N patterns
  const stepByStepHeaderMatch = content.match(
    /<h2>([^<]*(?:Step-by-Step|How to)[^<]*)<\/h2>/i
  );

  // Find all step patterns: <h3>Step N: title</h3> or <h2>Step N — title</h2>
  const stepRegex =
    /<h[23]>\s*Step\s+(\d+)\s*[:\u2014\u2013—–-]\s*(.+?)<\/h[23]>\s*<p>([\s\S]*?)<\/p>/gi;
  const steps: HowToStep[] = [];
  let match;

  while ((match = stepRegex.exec(content)) !== null) {
    const name = stripHtml(match[2]);
    const text = stripHtml(match[3]);
    if (name && text) {
      steps.push({ name, text });
    }
  }

  if (steps.length < 2) return null; // Need at least 2 steps for a meaningful HowTo

  // Use only the first contiguous set of steps (some articles have multiple step sequences)
  // Find the first occurrence to determine context
  const firstStepMatch = content.match(
    /<h[23]>\s*Step\s+1\s*[:\u2014\u2013—–-]/i
  );
  if (!firstStepMatch) return null;

  const name = stepByStepHeaderMatch
    ? stripHtml(stepByStepHeaderMatch[1])
    : "Step-by-Step Guide";

  return { name, steps };
}
