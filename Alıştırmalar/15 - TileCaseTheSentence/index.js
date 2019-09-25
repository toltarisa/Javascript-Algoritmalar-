/*
  Girilen cumleyi parcalara ayır.Ve her kelimenin ilk harfini upper case yap.
*/

titleCaseTheSentence = str => {
  const splittedWords = str.split(' ');
  const newTileCasedSentence = [];

  for (let i = 0; i < splittedWords.length; i++) {
    newTileCasedSentence.push(
      splittedWords[i].charAt(0).toUpperCase() + splittedWords[i].slice(1),
    );
  }
  return newTileCasedSentence.join(' ');
};

module.exports = titleCaseTheSentence;
