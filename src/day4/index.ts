import { stringByLine } from "../utils/string-by-line";
import { parseLine } from "./parse-line";
import { sum } from "../utils/sum";
import { Scratchcard } from "./types";

export const part1 = (input: string) => {
  const cards = stringByLine(input)
    .map(parseLine);

  return sum(cards.map(card => card.points));
}

export const part2 = (input: string) => {
  const cards = stringByLine(input)
    .map(parseLine);

  const multiples = cards.map(() => 1);

  cards
    .map(card => card.matchingNumbers.length)
    .forEach((winningCount, i) => {
      if (winningCount > 0) {
        for (let j = i + 1; j < Math.min(i + 1 + winningCount, multiples.length); j++) {
          multiples[j] += multiples[i];
        }
      }
    })

  return sum(multiples);

  // The potentially working, slow loop :)
  /*let totalCards: Scratchcard[] = [...cards];

  let i = 0;
  let total = cards.length;
  while (i < total) {
    const card = totalCards[i];

    const matchCount = card.matchingNumbers.length;
    const originalIndex = cards.findIndex(c => c.id === card.id);
    const repeatCards = cards.slice(originalIndex + 1, originalIndex + 1 + matchCount);

    const head = totalCards.slice(0, i + 1);
    const tail = totalCards.slice(i + 1);

    totalCards = [...head, ...repeatCards, ...tail];
    total = totalCards.length;

    i++;
    console.log({i, cardId: card.id, total})
  }

  return totalCards.length;

 */
}