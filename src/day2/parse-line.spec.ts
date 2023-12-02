import { parseLine } from "./parse-line";

describe('parseLine', () => {
  it('should return gameId', () => {
    const gameString = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green`;
    expect(parseLine(gameString))
     .toEqual({
       gameString,
       gameId: 1,
       bags: [
         {blue: 3, red: 4, green: 0},
         {red: 1, green: 2, blue: 6},
         {green: 2, blue: 0, red: 0}
       ]
     });
  })

  it('should return 0 if the game is impossible', () => {
    const gameString = `Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red`
    expect(parseLine(gameString))
      .toEqual({
        gameString,
        gameId: 3,
        bags: [
          {green: 8, blue: 6, red: 20},
          {blue: 5, red: 4, green: 13},
          {green: 5, red: 1, blue: 0}
        ]
      })
  })
})