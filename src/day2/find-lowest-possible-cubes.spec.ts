import { findLowestPossibleCubes } from "./find-lowest-possible-cubes";
import { ColourMap } from "./types";

function mockGame(bags: ColourMap[]) {
  return {
    gameString: '',
    gameId: 1,
    bags
  }
}

describe('findLowestPossibleCubes', () => {
  it('should match example', () => {
    expect(findLowestPossibleCubes(mockGame([
      {blue: 3, red: 4, green: 0},
      {red: 1, green: 2, blue: 6},
      {green: 2, blue: 0, red: 0}
    ]))).toEqual({blue: 6, red: 4, green: 2})

    expect(findLowestPossibleCubes(mockGame([
      {blue: 1, red: 0, green: 2},
      {red: 1, green: 3, blue: 4},
      {green: 1, blue: 1, red: 0}
    ]))).toEqual({blue: 4, red: 1, green: 3})

    expect(findLowestPossibleCubes(mockGame([
      {blue: 6, red: 20, green: 8},
      {red: 4, green: 13, blue: 5},
      {green: 5, blue: 0, red: 1}
    ]))).toEqual({blue: 6, red: 20, green: 13})
  });
})