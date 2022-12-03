import test from "ava";
import * as day3 from "./day3";

const input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

test("day 1: part 1", (t) => {
  t.is(day3.part1(input), 157);
});

test("day 1: part 2", (t) => {
  t.is(day3.part2(input), 70);
});
