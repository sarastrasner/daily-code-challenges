'use strict';

const shortestDistance = require('./shortestDistance');

describe('Shortest Distance', () => {
  it('it returns the correct distance', () => {
    let wordsDict = ['practice', 'makes', 'perfect', 'coding', 'makes'], word1 = 'coding', word2 = 'practice'
    expect(shortestDistance(wordsDict, word1, word2)).toEqual(3);
  });

  it('it returns the correct distance', () => {
    let wordsDict = ['practice', 'makes', 'perfect', 'coding', 'makes'], word1 = 'makes', word2 = 'coding'
    expect(shortestDistance(wordsDict, word1, word2)).toEqual(1);
  });
});
