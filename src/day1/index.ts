import { stringByLine } from "../utils/string-by-line";
import { parseLine } from "./parse-line";
import { inputString } from "./__input_string";

export function day1(input: string): number {
  return stringByLine(input)
    .map(parseLine)
    .reduce((sum, number) => sum + number, 0);
}

console.log(day1(inputString));