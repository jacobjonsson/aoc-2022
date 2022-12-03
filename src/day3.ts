export function part1(input: string) {
  const lines: string[] = input.trim().split("\n");

  const compartments: [string, string][] = [];
  for (const line of lines) {
    const half = Math.ceil(line.length / 2);
    compartments.push([line.slice(0, half), line.slice(half)]);
  }

  const duplicated: string[] = [];
  for (const [left, right] of compartments) {
    const chars = new Set(left);
    for (const char of right) {
      if (chars.has(char)) {
        duplicated.push(char);
        break;
      }
    }
  }

  let total = 0;
  for (const char of duplicated) {
    let priority = char.toLowerCase().charCodeAt(0) - 96;
    if (char === char.toUpperCase()) {
      priority += 26;
    }
    total += priority;
  }
  return total;
}

export function part2(input: string) {
  const lines: string[] = input.trim().split("\n");

  let chunks: string[][] = [];
  let chunkSize = 3;
  for (let i = 0; i < lines.length; i += 3) {
    chunks.push(lines.slice(i, i + chunkSize));
  }

  let total = 0;
  for (const chunk of chunks) {
    let charTotal = new Map<string, number>();
    for (const line of chunk) {
      let deduped = [...new Set(line)];
      for (const char of deduped) {
        if (charTotal.has(char)) {
          charTotal.set(char, charTotal.get(char) + 1);
        } else {
          charTotal.set(char, 1);
        }
      }
    }

    for (const [char, count] of charTotal) {
      if (count === 3) {
        let priority = char.toLowerCase().charCodeAt(0) - 96;
        if (char === char.toUpperCase()) {
          priority += 26;
        }
        total += priority;
      }
    }
  }

  return total;
}
