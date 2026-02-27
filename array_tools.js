function average(arr) {
  if (arr.length === 0) return 0;
  const total = arr.reduce((a, b) => a + b, 0);
  return total / arr.length;
}

function max(arr) {
  return Math.max(...arr);
}

function min(arr) {
  return Math.min(...arr);
}

console.log("Average:", average([1, 2, 3, 4, 5]));
console.log("Max:", max([1, 2, 3, 4, 5]));
console.log("Min:", min([1, 2, 3, 4, 5]));
