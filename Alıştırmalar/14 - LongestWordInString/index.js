findLongestWord = str => {
  const splittedWords = str.split(' ');
  let longestString = '';
  for (let i = 0; i < splittedWords.length; i++) {
    if (longestString.length < splittedWords[i].length) {
      longestString = splittedWords[i];
    }
  }
  return longestString;
};

module.exports = findLongestWord;
