import { stringByLine } from "../utils/string-by-line";
import { compareHands, parseRow } from "./parse";

export const part1 = (input: string) => {
  const hands = stringByLine(input)
    .map(r => parseRow(r, false))
    .sort(compareHands(1));
  return hands.reduce((sum, hand, index) => {
    return sum + (hand.bid * (index + 1));
  }, 0);
}

export const part2 = (input: string) => {
  const hands = stringByLine(input)
    .map(r => parseRow(r, true))
    .sort(compareHands(2));
  return hands.reduce((sum, hand, index) => {
    return sum + (hand.bid * (index + 1));
  }, 0);
}