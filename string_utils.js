function reverse(str) {
  return str.split("").reverse().join("");
}

function upper(str) {
  return str.toUpperCase();
}

console.log("Reverse:", reverse("Infinity Developer"));
console.log("Uppercase:", upper("Infinity Developer"));
