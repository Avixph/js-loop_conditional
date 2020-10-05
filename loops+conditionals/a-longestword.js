//[A]***1) Given the array,
//      - Let lunchArray = [ "Burger", "Salad", "Lasagna", "Sushi", "Meatloaf" ]
//      - Loop through the array to find the longest word by how many letters each string contains.
//      - Which other variables will you be needing?
//  ***2) Print the length of the longest word to the console.
//  ***3) Print the longest word to the console.
//  ***4) Now what if the array was
// Let lunchArray = [ "Burger  Salad  Lasagna Sushi  Meatloaf" ]
// Since all the words are in one string together, how would you solve this?
let lunchArray1 = ["Burger", "Salad", "Lasagna", "Sushi", "Meatloaf"];
let lunchArray2 = ["Burger Salad Lasagna Sushi Meatloaf"];
function longestWord(array) {
  let wordSplit = array[0].split(" ");
  let word = array[0];
  if (array.length === 1) {
    for (let i = 0; i < wordSplit.length; i++) {
      if (wordSplit[i].length > word[i].length) {
        word = wordSplit[i];
      }
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i].length > word.length) {
        word = array[i];
      }
    }
  }
  return `${word} has ${word.length} characters.`;
}
console.log(longestWord(lunchArray2));
