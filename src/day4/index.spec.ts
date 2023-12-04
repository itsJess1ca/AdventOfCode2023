import { part1, part2 } from "./index";
import { __input_example } from "./__input_example";
import { __input } from "./__input";

describe('Day 4', () => {
  describe('Part 1', () => {
    it('should return the expected value', () => {
      expect(part1(__input_example)).toEqual(13)
    })

    it('should return the correct value', () => {
      expect(part1(__input)).toEqual(23235);
    })
  });
  describe('Part 2', () => {
    it('should return the expected value', () => {
      expect(part2(__input_example)).toEqual(30)
    })

    it('should return the correct value', () => {
      expect(part2(__input)).toEqual(5920640);
    })
  });
})