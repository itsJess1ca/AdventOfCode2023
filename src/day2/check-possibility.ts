import { ColourMap } from "./types";

export function checkPossibility(actual: ColourMap, expected: ColourMap) {
  return actual.blue <= expected.blue &&
    actual.red <= expected.red &&
    actual.green <= expected.green;
}