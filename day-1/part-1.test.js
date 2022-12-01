import { run } from "./part-1.js";

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

export const test = () => {
  let result = run(input);
  if (result !== 24000) {
    return `Expected 24000, got ${result}`;
  }

  return "OK";
};
