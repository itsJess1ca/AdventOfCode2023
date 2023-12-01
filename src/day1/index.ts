
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

export function parseLine(line: string): number {

  let first!: number;
  let last!: number;

  extractNumbers(line)
    .forEach(digit => {
      if (!first) {
        first = digit;
      }
      last = digit;
    });
  return Number(`${first}${last}`)
}

export function parseInput(input: string) {
  const lines = input.split(/[\t\n\r]/);
  return lines.filter(Boolean).map(parseLine);
}

export function sum(list: number[]): number {
  return list.reduce((sum, current) => sum + current, 0);
}