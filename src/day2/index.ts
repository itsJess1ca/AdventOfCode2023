import { stringByLine } from "../utils/string-by-line";
import { parseLine } from "./parse-line";
import { sum } from "../utils/sum";
import { findLowestPossibleCubes } from "./find-lowest-possible-cubes";

export function part1(input: string) {
  const limits = {red: 12, green: 13, blue: 14};
  const filteredGames = stringByLine(input)
    .map(parseLine)
    .filter((game) =>
      game.bags.every(bag =>
        bag.green <= limits.green &&
        bag.red <= limits.red &&
        bag.blue <= limits.blue
      )
    )
  return sum(filteredGames.map(game => game.gameId));
}

export function part2(input: string) {
  const allLowest = stringByLine(input)
    .map(parseLine)
    .map(findLowestPossibleCubes);

  const powers = allLowest.map(colourMap => colourMap.red * colourMap.blue * colourMap.green)
  return sum(powers)
}