export function processWord(input) {
  const charCount = {};
  for (let char of input) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  const sortedChars = Object.keys(charCount).sort(
    (a, b) => charCount[b] - charCount[a]
  );

  let result = "";
  for (let char of sortedChars) {
    result += char.repeat(charCount[char]);
  }

  return result;
}
