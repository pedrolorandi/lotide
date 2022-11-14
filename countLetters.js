//The function takes in a sentence (as a string) and then return an object counting each of the letters in that sentence
const countLetters = function(string) {
  let letters = {};

  for (let letter of string) {
    if (letter !== ' ') {
      if (letters[letter]) {
        letters[letter] += 1;
      } else {
        letters[letter] = 1;
      }
    }
  }

  return letters;
}


module.exports = countLetters;