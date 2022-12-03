import * as fs from "fs";

const TEST_DAY = Number(process.argv[2]);

async function main() {
  const day = await import(`./src/day${TEST_DAY}.ts`);
  const input = fs.readFileSync(`${__dirname}/src/day${TEST_DAY}.txt`, "utf8");

  if (day.part1) {
    const before = new Date().getTime();
    console.log(`Part 1: ${day.part1(input)}`);
    console.log(`  Took: ${(new Date().getTime() - before) / 1000} sec`);
  } else {
    console.log("Missing part 1");
  }

  if (day.part2) {
    const before = new Date().getTime();
    console.log(`Part 2: ${day.part2(input)}`);
    console.log(`  Took: ${(new Date().getTime() - before) / 1000} sec`);
  } else {
    console.log("Missing part 2");
  }
}

main();
