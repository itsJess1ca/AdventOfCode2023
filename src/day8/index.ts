import { stringByLine } from "../utils/string-by-line";
import { sum } from "../utils/sum";
import { parseLine } from "./parse";

export const part1 = (input: string) => {
  const out = stringByLine(input)
    .map(parseLine)
    .reduce<number[]>((nextInSequences, sequence) => {
      const rows = [...sequence.history, sequence.numbers];
      let i = rows.length;
      while(i--) {
        const row = rows[i];
        if (i === rows.length - 1) {
          continue;
        }

        const lastInRow = row[row.length - 1];
        const lastRow = rows[i + 1];

        const nextInSequence = lastInRow + lastRow[lastRow.length - 1];
        if (i === 0) {
          return [...nextInSequences, nextInSequence];
        } else {
          row.push(nextInSequence);
        }
      }

      return nextInSequences;
    }, []);

  return sum(out);
}

export const part2 = (input: string) => {
  const out = stringByLine(input)
    .map(parseLine)
    .reduce<number[]>((nextInSequences, sequence) => {
      const rows = [...sequence.history, sequence.numbers];
      let i = rows.length;
      while(i--) {
        const row = rows[i];
        if (i === rows.length - 1) {
          continue;
        }

        const firstInRow = row[0];
        const lastRow = rows[i + 1];

        const nextInSequence = firstInRow - lastRow[0];
        if (i === 0) {
          return [...nextInSequences, nextInSequence];
        } else {
          row.unshift(nextInSequence);
        }
      }

      return nextInSequences;
    }, []);

  return sum(out);
}