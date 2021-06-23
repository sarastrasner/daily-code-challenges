'use strict';

const longestCommonPrefix = require('./longestCommonPrefix.js');

describe('Longest Common Prefix', () => {
  it('it returns the longest common prefix', () => {
    let strs = ['flower','flow','flight'];
    expect(longestCommonPrefix(strs)).toEqual('fl');
  });

  it('it returns the longest common prefix', () => {
    let strs = ['go','goat','goad'];
    expect(longestCommonPrefix(strs)).toEqual('go');
  });

  it('it returns an empty string when there are no common prefixes', () => {
    let strs = ['dog','racecar','car'];
    expect(longestCommonPrefix(strs)).toEqual('');
  });

  it('it returns an empty string when the input array is empty', () => {
    let strs = [];
    expect(longestCommonPrefix(strs)).toEqual('');
  });
});
