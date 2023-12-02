// Example line: Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
import { ColourMap } from "./types";

export const parseLine = (line: string) => {
  const stripGameId = line.split(':')
  const gameId = Number(stripGameId[0].replace('Game ', ''));
  const bags: ColourMap[] = [];

  const gameRounds = stripGameId[1].trim().split(';');
  for (const round of gameRounds) {
    const colours = round.split(',');
    const colourMap: ColourMap = {
      red: 0,
      blue: 0,
      green: 0
    };
    for (const colourDetails of colours) {
      const details = colourDetails.trim().split(' ');
      const count = Number(details[0]);
      const colour = details[1] as keyof ColourMap;
      colourMap[colour] += count;
    }
    bags.push(colourMap);
  }

  return {
    gameString: line,
    gameId,
    bags
  }
}