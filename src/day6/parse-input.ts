import { stringByLine } from "../utils/string-by-line";
import { Race } from "./types";

export const parseRaces = (input: string, part2 = false) => {

  return stringByLine(input)
    .map((row) => {
      let label: string;
      let amounts: string[];
      if (part2) {
       [label, ...amounts] = row.replace(/\s+/g, '').split(':')
      } else {
        [label, ...amounts] = row.split(/\s+/);
      }
      return { label, amounts: amounts.map(Number) };
    })
    .reduce<Race[]>(
      (out, row) => {
      for (let i = 0; i < row.amounts.length; i++) {
        const amount = row.amounts[i];
        const label = row.label.replace(':', '').toLowerCase() as 'time' | 'distance';
        if (out[i]) {
          out[i][label] = amount;
        } else {
          out[i] = {} as Race;
          out[i][label] = amount;
        }
      }
      return out;
    }, [])
}

export const calculateStrategy = (race: Race) => {
  const holdTimesToWin: number[] = [];
  for (let holdTime = 0; holdTime < race.time; holdTime++) {
    const distance = holdTime * (race.time - holdTime);
    if (distance > race.distance) {
      holdTimesToWin.push(holdTime);
    }
  }
  return holdTimesToWin;
}