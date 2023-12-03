import { stringByLine } from "../utils/string-by-line";
import { filterParts, findGears, parseList } from "./parse-list";
import { sum } from "../utils/sum";

export const part1 = (input: string) => {
  const list = stringByLine(input);
  const partList = parseList(list);

  const validParts = filterParts(partList, list.map(row => row.split('')));
  return sum(validParts.map(part => part.partNumber));
}

export const part2 = (input: string) => {
  const list = stringByLine(input);
  const partList = parseList(list);

  const validParts = filterParts(partList, list.map(row => row.split('')));
  const gears = findGears(validParts, list.map(row => row.split('')));

  return sum(gears.map(gear => gear.ratio));
}