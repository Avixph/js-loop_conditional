//[B] Write a function that returns elements on odd positions in a list.
let arr = ["hello", "sam", "how", "is", "the", "winning", "tomato"];
let oddArr = arr.filter(function name(arr, i) {
  if (i % 2 == 1) {
    return arr;
  }
});
console.log(oddArr);
