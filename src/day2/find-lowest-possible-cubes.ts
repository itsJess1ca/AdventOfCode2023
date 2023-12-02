import { ColourMap, Game } from "./types";

export function findLowestPossibleCubes(game: Game): ColourMap {
  const lowest: ColourMap = {red: 0, blue: 0, green: 0};
  game.bags.forEach(bag => {
    if (lowest.red < bag.red) lowest.red = bag.red;
    if (lowest.green < bag.green) lowest.green = bag.green;
    if (lowest.blue < bag.blue) lowest.blue = bag.blue;
  });
  return lowest;
}