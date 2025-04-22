function samcSort<T>(arr: T[], depth: number = 0): T[] {
  const indent = "  ".repeat(depth);
  if (arr.length <= 1) return arr;

  const pivot = arr.reduce((a, b) => (a > b ? a : b));
  console.log(`${indent}<h2>Pivot (Alpha): ${pivot}</h2>`);

  const left: T[] = [];
  const right: T[] = [];

  const insults = [
    "Sad. Try harder.",
    "This is why we can't have nice things.",
    "Not even worth sorting."
  ];
  const retorts = [
    "Back off.",
    "You dare challenge me?",
    "You wish."
  ];

  for (const item of arr) {
    if (item === pivot) continue;
    if (item < pivot) {
      console.log(`${indent}<p>${insults[Math.floor(Math.random() * insults.length)]} (${item})</p>`);
      left.push(item);
    } else {
      console.log(`${indent}<p>${retorts[Math.floor(Math.random() * retorts.length)]} (${item})</p>`);
      right.unshift(item);
    }
  }

  return [...samcSort(left, depth + 1), pivot, ...samcSort(right, depth + 1)];
}
