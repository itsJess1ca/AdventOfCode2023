import { Coordinate, Gear, Part } from "./types";
import { sum } from "../utils/sum";

export const filterParts = (parts: Part[], list: string[][]) => {
  return parts.filter((part) => {
    let validPart = false;
    const invalidCharacters = '0123456789.';
    for (const coordinate of part.surroundingCharacters) {
      const x = coordinate[0];
      const y = coordinate[1];
      if (x < 0 || y < 0) continue;

      if (list[y] && list[y][x]) {
        if (invalidCharacters.includes(list[y][x])) {
          continue;
        }
        validPart = true;
        break;
      }
    }
    return validPart;
  })
}

function getSurroundingCoordinates(num: number, rowIndex: number): Coordinate[] {
  return [
    [num - 1, rowIndex - 1], [num, rowIndex - 1], [num + 1, rowIndex - 1],
    [num - 1, rowIndex],     /* Middle */         [num + 1, rowIndex],
    [num - 1, rowIndex + 1], [num, rowIndex + 1], [num + 1, rowIndex + 1],
  ]
}

export const reduceRows = (partList: Part[], row: string[], rowIndex: number, list: string[][]) => {
  const numbers = "0123456789";
  const numberList: Part[] = [];
  let currentNumber: string = '';
  let currentNumberPositions: number[] = [];

  row.forEach((character, characterIndex: number) => {
    if (numbers.includes(character)) {
      currentNumber += character;
      currentNumberPositions.push(characterIndex);
    } else {
      if (currentNumber.length > 0) {
        numberList.push({
          partNumber: Number(currentNumber),
          positions: currentNumberPositions.map(x => ([x, rowIndex])),
          surroundingCharacters: currentNumberPositions.map<Coordinate[]>((idx) =>
            getSurroundingCoordinates(idx, rowIndex)
          ).flat()
        });
        currentNumber = '';
        currentNumberPositions = [];
      }
    }
  })

  if (currentNumber.length > 0) {
    numberList.push({
      partNumber: Number(currentNumber),
      positions: currentNumberPositions.map(x => ([x, rowIndex])),
      surroundingCharacters: currentNumberPositions.map<Coordinate[]>((idx) => [
        [idx - 1, rowIndex - 1], [idx, rowIndex - 1], [idx + 1, rowIndex - 1],
        [idx - 1, rowIndex],     /* Middle */         [idx + 1, rowIndex],
        [idx - 1, rowIndex + 1], [idx, rowIndex + 1], [idx + 1, rowIndex + 1],
      ]).flat()
    });
  }

  return [...partList, ...numberList]
}

export const parseList = (rows: string[]) => {
  const list = rows.map(row => row.split(''));
  return list
    .reduce<Part[]>(reduceRows, [])
}

export const findGears = (partList: Part[], list: string[][]) => {
  const gears: Gear[] = [];
  for (let rowIndex = 0; rowIndex < list.length; rowIndex++){
    const row = list[rowIndex];
    for (let characterIndex = 0; characterIndex < row.length; characterIndex++){
      const character = row[characterIndex];
      if (character === '*') {
        const surroundingCoordinates = getSurroundingCoordinates(characterIndex, rowIndex);
        const adjacentParts: Part[] = [];
        for (const coordinate of surroundingCoordinates) {
          const x = coordinate[0];
          const y = coordinate[1];
          if (x < 0 || y < 0) continue;

          const part = partList.find((part) => {
            return part.positions.find(pos => pos[0] === x && pos[1] === y)
          });
          if (part && !adjacentParts.includes(part))  {
            adjacentParts.push(part);
          }
        }
        if (adjacentParts.length > 1) {
          gears.push({
            position: [characterIndex, rowIndex],
            ratio: adjacentParts.map(part => part.partNumber).reduce((total, ratio) => total * ratio, 1)
          })
        }
      }
    }
  }
  return gears;
}