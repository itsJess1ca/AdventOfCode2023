export interface ColourMap {
  red: number;
  blue: number;
  green: number;
}

export interface Game {
  gameString: string;
  gameId: number;
  bags: ColourMap[];
}