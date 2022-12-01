import { createInterface } from "node:readline";
import * as url from "url";
import * as fs from "fs";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const day = process.argv[2];

const input = fs.readFileSync(`${__dirname}/day-${day}/input.txt`, "utf8");
const part1 = await import(`./day-${day}/part-1.js`);
const part2 = await import(`./day-${day}/part-2.js`);

console.log(`Part 1: ${part1.run(input)}`);
console.log(`Part 2: ${part2.run(input)}`);

readline.close();
