type X = number;
type Y = number;
export type Coordinate = [X, Y];
export interface Part {
  partNumber: number;
  positions: Coordinate[];
  surroundingCharacters: Coordinate[];
}
export interface Gear {
  position: Coordinate;
  ratio: number;
}