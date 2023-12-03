import { part1, part2 } from "./index";
import { example1 } from "./__example_1";
import { input } from "./__input";

describe('Day 3', () => {
  describe('Part 1', () => {

    it('Example 1', () => {
      expect(part1(example1)).toEqual(4361);
    })

    it('Input', () => {
      expect(part1(input)).toEqual(531932);
    })

  })

  describe('Part 2', () => {
    it('Example 1', () => {
      expect(part2(example1)).toEqual(467835)
    })

    it('Input', () => {
      expect(part2(input)).toEqual(73646890);
    })
  })
})