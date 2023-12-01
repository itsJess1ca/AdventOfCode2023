import { extractNumbers } from "./extract-numbers";

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