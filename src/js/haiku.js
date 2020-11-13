export default class Haiku {
  constructor (line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }
}

// function syllables(word) {
//   word = word.toLowerCase();
  // if(word.length <= 3) { return 1; }
  //   return word.replace(/(?:[^laeiouy]es|ed|lle|[^laeiouy]e)$/, '')
  //              .replace(/^y/, '')
  //              .match(/[aeiouy]{1,2}/g).length;
// }

