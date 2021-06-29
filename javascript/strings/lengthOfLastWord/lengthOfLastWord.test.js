'use strict';

const lengthOfLastWord = require('./lengthOfLastWord.js');

describe('Length of Last Word', () => {
  it('It returns the length of the last non-space string', () => {
    let strs = 'Hello world';
    expect(lengthOfLastWord(strs)).toEqual(5);
  });

  it('It returns the length of the last non-space string', () => {
    let strs = ' ';
    expect(lengthOfLastWord(strs)).toEqual(0);
  });
});
