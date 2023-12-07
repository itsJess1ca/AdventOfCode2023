import { part1, part2 } from "./index";
import { __example } from "./__example";
import { __input } from "./__input";

describe('Day 6', () => {
  describe('Part 1', () => {
    it('should return the expected result from the example', () => {
      expect(part1(__example)).toEqual(288);
    })
    it('should return the expected result from the example', () => {
      expect(part1(__input)).toEqual(1084752);
    })
  })
  describe('Part 2', () => {
    it('should return the expected result from the example', () => {
      expect(part2(__example)).toEqual(71503);
    })
    it('should return the expected result from the example', () => {
      expect(part2(__input)).toEqual(28228952);
    })
  })
})