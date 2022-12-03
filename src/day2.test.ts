import test from "ava";
import * as day2 from "./day2";

const input = `A Y
B X
C Z`;

test("day 2: part 1", (t) => {
  t.is(day2.part1(input), 15);
});

test("day 2: part 2", (t) => {
  t.is(day2.part2(input), 12);
});
