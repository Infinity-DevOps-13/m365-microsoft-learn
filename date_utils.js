function today() {
  return new Date().toLocaleDateString();
}

function now() {
  return new Date().toLocaleTimeString();
}

console.log("Today's date:", today());
console.log("Current time:", now());
