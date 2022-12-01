import { createInterface } from "node:readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const day = process.argv[2];

const part1 = await import(`./day-${day}/part-1.test.js`);
const part2 = await import(`./day-${day}/part-2.test.js`);

console.log(`Part 1: ${part1.test()}`);
console.log(`Part 2: ${part2.test()}`);

readline.close();
