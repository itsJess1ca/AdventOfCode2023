export interface RawCardData {
  id: string;
  winningNumbers: string;
  cardNumbers: string
}

export interface Scratchcard {
  id: number;
  winningNumbers: number[];
  cardNumbers: number[];
  matchingNumbers: number[];
  points: number;
}