type Shape = "Rock" | "Paper" | "Scissors";

const letterToShape = (letter: string): Shape => {
  switch (letter) {
    case "A":
    case "X":
      return "Rock";
    case "B":
    case "Y":
      return "Paper";
    case "C":
    case "Z":
      return "Scissors";
    default:
      throw new Error(`Invalid letter: ${letter}`);
  }
};

const shapeToScore = (word: Shape): number => {
  switch (word) {
    case "Rock":
      return 1;
    case "Paper":
      return 2;
    case "Scissors":
      return 3;
    default:
      throw new Error(`Invalid word: ${word}`);
  }
};

// A = Rock
// B = Paper
// C = Scissors

// X = Rock
// Y = Paper
// Z = Scissors

const determineWinner = (aWord: Shape, bWord: Shape) => {
  if (aWord === bWord) {
    return "draw";
  }

  if (aWord === "Rock" && bWord === "Scissors") {
    return "a";
  } else if (aWord === "Rock" && bWord === "Paper") {
    return "b";
  } else if (aWord === "Paper" && bWord === "Rock") {
    return "a";
  } else if (aWord === "Paper" && bWord === "Scissors") {
    return "b";
  } else if (aWord === "Scissors" && bWord === "Paper") {
    return "a";
  } else if (aWord === "Scissors" && bWord === "Rock") {
    return "b";
  } else {
    throw new Error(`Invalid words: ${aWord} ${bWord}`);
  }
};

function calculateScore(lines: [Shape, Shape][]) {
  let score = 0;
  for (const [a, b] of lines) {
    const result = determineWinner(a, b);

    if (result === "b") {
      score += 6;
    } else if (result === "draw") {
      score += 3;
    }

    score += shapeToScore(b);
  }
  return score;
}

export function part1(input: string) {
  let lines: [Shape, Shape][] = [];
  for (const line of input.trim().split("\n")) {
    const [a, b] = line.split(" ");
    lines.push([letterToShape(a), letterToShape(b)]);
  }
  return calculateScore(lines);
}

function getWinningShape(shape: Shape): Shape {
  switch (shape) {
    case "Rock":
      return "Paper";
    case "Paper":
      return "Scissors";
    case "Scissors":
      return "Rock";
  }
}

function getLosingShape(shape: Shape): Shape {
  switch (shape) {
    case "Rock":
      return "Scissors";
    case "Paper":
      return "Rock";
    case "Scissors":
      return "Paper";
  }
}

export function part2(input: string) {
  let lines: [Shape, Shape][] = [];
  for (const line of input.trim().split("\n")) {
    const [a, o] = line.split(" ");

    const aShape = letterToShape(a);

    let bShape: Shape;
    if (o === "X") {
      bShape = getLosingShape(aShape);
    } else if (o === "Y") {
      bShape = aShape;
    } else if (o === "Z") {
      bShape = getWinningShape(aShape);
    } else {
      throw new Error(`Invalid letter: ${o}`);
    }

    lines.push([aShape, bShape]);
  }
  return calculateScore(lines);
}
