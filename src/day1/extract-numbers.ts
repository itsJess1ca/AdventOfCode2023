const stringNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

export function extractNumbers(line: string): number[] {
  const numbers: number[] = [];
  const normalisedLine = line
    .toLowerCase()
    .replace(/\s/g, '');

  for (let i = 0; i < line.length; i++) {
    // Check for digits
    const digit = Number(normalisedLine[i]);
    if (!isNaN(digit)) {
      numbers.push(digit);
      continue;
    }

    // Check for numbers spelled out
    let substr = normalisedLine.substring(i, i + 5);
    for (const stringNumber of stringNumbers) {
      if (substr.startsWith(stringNumber)) {
        numbers.push(stringNumbers.indexOf(stringNumber));
        break;
      }
    }
  }
  return numbers;
}