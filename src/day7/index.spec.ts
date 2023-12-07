import { part1, part2 } from "./index";
import { __example } from "./__example";
import { __input } from "./__input";
import { parseRow } from "./parse";

describe('Day 7', () => {
  describe('Parser', () => {
    it('five of a kind should get value of 60000', () => {
      expect(parseRow('AAAAA 1')).toEqual({value: 60000, bid: 1, hand: ['A', 'A', 'A', 'A', 'A']})
    })
    it('four of a kind should get value of 50000', () => {
      expect(parseRow('QAAAA 1')).toEqual({value: 50000, bid: 1, hand: ['Q', 'A', 'A', 'A', 'A']})
    })
    it('full house should get value of 40000', () => {
      expect(parseRow('QQAAA 1')).toEqual({value: 40000, bid: 1, hand: ['Q', 'Q', 'A', 'A', 'A']})
    })
    it('three of a kind should get value of 30000', () => {
      expect(parseRow('1QAAA 1')).toEqual({value: 30000, bid: 1, hand: ['1', 'Q', 'A', 'A', 'A']})
    })
    it('2 pair should get value of 20000', () => {
      expect(parseRow('QQAA1 1')).toEqual({value: 20000, bid: 1, hand: ['Q', 'Q', 'A', 'A', '1']})
    })
    it('1 pair should get value of 10000', () => {
      expect(parseRow('QQA21 1')).toEqual({value: 10000, bid: 1, hand: ['Q', 'Q', 'A', '2', '1']})
    })
  })

  describe('Part 1', () => {
    it('example', () => {
      expect(part1(__example)).toEqual(6440);
    })
    it('full', () => {
      expect(part1(__input)).toEqual(250898830);
    })
  })
  describe('Part 2', () => {
    it('example', () => {
      expect(part2(__example)).toEqual(5905);
    })
    it('full', () => {
      expect(part2(__input)).toEqual(252127335);
    })
  })
})