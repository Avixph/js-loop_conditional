//[D] Conditional Practice
//  - Write an if statement and determine a condition where:
//  - If mpg is less than or equal to 10, console "Wow what a gas guzzler"
//  - If mpg is  between 11 - 16, console "Planet still frowns upon this, and so does your wallet"
//  - If mpg is between 17-20, console "Hmm, it’s palpable"
//  - If mpg is between 21-29, console "Atmosphere smiles at your decision"
//  - If mpg is between 30-35, console "Not many gas stops will be taken"
//  - If mpg is above 35, console "The fish of the sea smile at your conservation"
//  - If mpg is 120, console "If you are using the Tom Ogle fuel system, props"
//  - After testing each one, change the mpg variable to ensure it is good.
function CarReview(mpg) {
  if (mpg === 120) {
    return "If you are using the Tom Ogle fuel system, props";
  } else if (mpg >= 35) {
    return "The fish of the sea smile at your conservation";
  } else if (mpg >= 30 && mpg <= 34) {
    return "Not many gas stops will be taken";
  } else if (mpg >= 21 && mpg <= 29) {
    return "Atmosphere smiles at your decision";
  } else if (mpg >= 17 && mpg <= 20) {
    return "Hmm, it’s palpable";
  } else if (mpg >= 11 && mpg <= 16) {
    return "Planet still frowns upon this, and so does your wallet";
  } else {
    return "Wow! What a gas guzzler";
  }
}
console.log(`${CarReview(24)}.`);
console.log(`${CarReview(120)}.`);
console.log(`${CarReview(40)}.`);
console.log(`${CarReview(16)}.`);
console.log(`${CarReview(8)}.`);

function CarReviews(mpg) {
  if (mpg === 120) {
    return "If you are using the Tom Ogle fuel system, props";
  } else if (mpg >= 35) {
    return "The fish of the sea smile at your conservation";
  } else if (mpg >= 30 && mpg <= 34) {
    return "Not many gas stops will be taken";
  } else if (mpg >= 21 && mpg <= 29) {
    return "Atmosphere smiles at your decision";
  } else if (mpg >= 17 && mpg <= 20) {
    return "Hmm, it’s palpable";
  } else if (mpg >= 11 && mpg <= 16) {
    return "Planet still frowns upon this, and so does your wallet";
  } else {
    return "Wow! What a gas guzzler";
  }
}
for (let i = 1; i <= Math.floor(Math.random() * 120); i++) {
  console.log(
    `Did you say that your veichle runs at ${i} mpg? ${CarReviews(i)}.`
  );
}
