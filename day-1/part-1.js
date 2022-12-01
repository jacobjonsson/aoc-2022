export const run = (input) => {
  const rawElfInputs = input.split("\n\n");

  let max = 0;
  for (let i = 0; i < rawElfInputs.length; i++) {
    const rawElfInput = rawElfInputs[i];
    const elfInput = rawElfInput.split("\n").map((x) => parseInt(x, 10));
    const sum = elfInput.reduce((a, b) => a + b, 0);
    if (sum > max) {
      max = sum;
    }
  }
  return max;
};
