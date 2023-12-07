import { calculateStrategy, parseRaces } from "./parse-input";

export const part1 = (input: string) => {
  const races = parseRaces(input);
  return races.map(r => calculateStrategy(r))
    .reduce((tot, waysToWin) => tot * waysToWin.length, 1);
}

export const part2 = (input: string) => {
  const races = parseRaces(input, true);
  console.log(races);
  return races.map(r => calculateStrategy(r))
    .reduce((tot, waysToWin) => tot * waysToWin.length, 1);
}