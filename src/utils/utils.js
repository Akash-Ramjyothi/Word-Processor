export function processWord(input, options = {}) {
  const {
    caseSensitive = true,
    ignoreSpaces = false,
    sortStrategy = "frequency", // "frequency" | "alphabetical"
  } = options;

  if (typeof input !== "string") {
    throw new TypeError("Input must be a string");
  }

  // Normalize input
  let processedInput = caseSensitive ? input : input.toLowerCase();
  if (ignoreSpaces) {
    processedInput = processedInput.replace(/\s+/g, "");
  }

  // Count characters
  const charCount = new Map();
  for (const char of processedInput) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Sort characters
  const sortedChars = [...charCount.keys()].sort((a, b) => {
    if (sortStrategy === "alphabetical") {
      return a.localeCompare(b);
    }
    // Default: frequency sort (desc), then alphabetical (asc)
    const freqDiff = charCount.get(b) - charCount.get(a);
    return freqDiff !== 0 ? freqDiff : a.localeCompare(b);
  });

  // Build result
  return sortedChars.map(char => char.repeat(charCount.get(char))).join("");
}
