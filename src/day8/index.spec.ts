import { part1, part2 } from "./index";
import { __example, __part2_example } from "./__example";
import { __input } from "./__input";

describe('Day 9', () => {
  describe('Part 1', () => {
    it('example1', () => {
      expect(part1(__example)).toEqual(114);
    })
    it('full', () => {
      expect(part1(__input)).toEqual(1479011877);
    })
  })
  describe('Part 2', () => {
    it('example3', () => {
      expect(part2(__part2_example)).toEqual(5);
    })
    it('full', () => {
      expect(part2(__input)).toEqual(973);
    })
  })
})