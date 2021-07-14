# LeetCode 243. Shortest Word Distance
Given an array of strings wordsDict and two different strings that already exist in the array word1 and word2, return the shortest distance between these two words in the list.

 

Example 1:
```
Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "coding", word2 = "practice"
Output: 3
```
Example 2:
```
Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "coding"
Output: 1
```

## Approach & Efficiency
1. Set idx1 and idx2 to null and min to Infinity. 
1. Loop through the array, reassigning the values of idx1 and idx2 to the indices of word1 and word2.
1. The difference between the two can be found via `Math.abs(idx1 - idx2)`
1. Take the min of that value and the current min.
1. Return min. 

## Solution
```
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
```

- [JavaScript Solution](./shortestDistance.js)

 

