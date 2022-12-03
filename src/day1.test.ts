import test from "ava";
import * as day1 from "./day1";

const input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

test("day 1: part 1", (t) => {
  t.is(day1.part1(input), 24000);
});

test("day 1: part 2", (t) => {
  t.is(day1.part2(input), 45000);
});
