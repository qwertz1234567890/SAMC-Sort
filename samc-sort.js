function samcSort(arr, depth = 0) {
  const indent = "  ".repeat(depth);

  if (arr.length <= 1) return arr;

  console.log(`${indent}<!-- Sorting ${JSON.stringify(arr)} -->`);
  const pivot = Math.max(...arr);
  console.log(`${indent}<h2 class='pivot'>Chosen Alpha: ${pivot}</h2>`);

  const left = [];
  const right = [];

  const insults = [
    "You’re not even close to Amazon-level.",
    "Pathetic. Go back to school.",
    "My HTML site could outsort you.",
    "I’ve seen better numbers in a Drupal template."
  ];

  const retorts = [
    "You think you're better than me? LMAO.",
    "Overcompensating, aren't you?",
    "You're lucky this is recursive."
  ];

  arr.forEach(item => {
    if (item === pivot) return;
    if (item < pivot) {
      console.log(`${indent}<p class='insult'>${insults[Math.floor(Math.random() * insults.length)]} (${item})</p>`);
      left.push(item);
    } else {
      console.log(`${indent}<p class='retort'>${retorts[Math.floor(Math.random() * retorts.length)]} (${item})</p>`);
      right.unshift(item);
    }
  });

  return [...samcSort(left, depth + 1), pivot, ...samcSort(right, depth + 1)];
}

// Example use:
// const input = [42, 17, 3, 88, 29, 55, 1];
// console.log("Final Result:", samcSort(input));
