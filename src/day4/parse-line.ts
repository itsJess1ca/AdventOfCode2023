import { RawCardData, Scratchcard } from "./types";
import { sort } from "../utils/sort";

export const getData = (card: string): RawCardData => {
  return /Card +(?<id>\d+): +(?<winningNumbers>(?:\d{1,3} *)+)\| +(?<cardNumbers>(?:\d{1,3} *)+)/.exec(card)!.groups as unknown as RawCardData;
}

export const parseLine = (line: string): Scratchcard => {
  const cardData = getData(line);
  const winningNumbers = cardData.winningNumbers
    .split(' ')
    .filter(Boolean)
    .map((num) => Number(num.trim()));
  const cardNumbers = cardData.cardNumbers
    .split(' ')
    .filter(Boolean)
    .map((num) => Number(num.trim()));

  const matchingNumbers = cardNumbers.filter(num => winningNumbers.includes(num));

  let points = 0;
  for (let i = 0; i < matchingNumbers.length; i++){
    if (points === 0) {
      points = 1;
      continue;
    }
    points *= 2;
  }


  return {
    id: Number(cardData.id.trim()),
    cardNumbers: sort(cardNumbers, (a, b) => a - b),
    matchingNumbers: sort(matchingNumbers, (a, b) => a - b),
    points,
    winningNumbers: sort(winningNumbers, (a, b) => a - b)
  }
}