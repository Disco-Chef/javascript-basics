const capitalize = (word) => {
  // Step 1: All lowercase
  let lowerCasedWord = word.toLowerCase();
  // Step 2: Upcase the first letter
  let firstLetter = lowerCasedWord[0].toUpperCase();
  // Step 3: get the rest of the word-
  return firstLetter + lowerCasedWord.substring(1);

  // return word[0].toUpperCase() + word.toLowerCase().substring(1);
};

console.log(capitalize('jEsSicA'));
