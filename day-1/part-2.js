export const run = (input) => {
  const rawElfInputs = input.split("\n\n");

  let caloriesPerElf = [];
  for (let i = 0; i < rawElfInputs.length; i++) {
    const rawElfInput = rawElfInputs[i];
    const elfInput = rawElfInput.split("\n").map((x) => parseInt(x, 10));
    const sum = elfInput.reduce((a, b) => a + b, 0);
    caloriesPerElf.push(sum);
  }

  caloriesPerElf.sort((a, b) => b - a);
  return caloriesPerElf.slice(0, 3).reduce((a, b) => a + b, 0);
};
