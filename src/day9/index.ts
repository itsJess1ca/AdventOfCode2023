import { calculateStepsToAllZ, calculateStepsToZZZ, parseInstructions } from "./parse";

export const part1 = (input: string) => {
  const instructions = parseInstructions(input);
  return calculateStepsToZZZ(instructions);
}

export const part2 = (input: string) => {
  const instructions = parseInstructions(input);
  return calculateStepsToAllZ(instructions);
}