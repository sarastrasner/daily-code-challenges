function shortestDistance(wordsDict, word1, word2) {
  let idx1 = null,
    idx2 = null;
  let min = Infinity;
  for (let i = 0; i < wordsDict.length; i++) {
    let currentIndex = wordsDict[i];
    if (currentIndex === word1) {
      idx1 = i;
    } else if (currentIndex === word2) {
      idx2 = i;
    }
    if (idx1 !== null && idx2 !== null) {
      min = Math.min(Math.abs(idx1 - idx2), min);
    }
  }
  return min;
}

module.exports = shortestDistance;
