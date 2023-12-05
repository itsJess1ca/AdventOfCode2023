import { findSeedConditions, findLowestLocationFromRange, parseSections } from "./parse-sections";
import workerpool from 'workerpool';
import type {Range} from './types';

export const part1 = (input: string) => {
  const almenac = parseSections(input);
  const conditions = almenac.seeds.map((seed) => findSeedConditions(seed as number, almenac))
  return Math.min(...conditions)
}

export const part2 = (input: string) => {
  const almenac = parseSections(input, true);
  return almenac.seeds.reduce<number>((lowest, input) => {
    console.log(`Processing range:`, input);
    const seed = input as Range;
    const location = findLowestLocationFromRange(seed as Range, almenac)
    if (location < lowest) {
      return location;
    }
    return lowest;
  }, Infinity);
}