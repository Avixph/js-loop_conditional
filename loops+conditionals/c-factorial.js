//[C] Function factorial(n) {}
// Compute the factorial of any given number.
// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     for (let i = n - 1; i >= 1; i--) {
//       n *= i;
//     }
//     return n;
//   }
// }
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(`The factorial for ${1} is ${factorial(1)}.`);
console.log(`The factorial for ${3} is ${factorial(3)}.`);
console.log(`The factorial for ${5} is ${factorial(5)}.`);
console.log(`The factorial for ${7} is ${factorial(7)}.`);
console.log(`The factorial for ${11} is ${factorial(11)}.`);
