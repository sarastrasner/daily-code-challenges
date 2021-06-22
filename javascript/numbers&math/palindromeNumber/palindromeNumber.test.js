'use strict';
const reverseInteger = require('./palindromeNumber');

describe('Palindrome Number', () => {
  it('It checks a positive integer', () => {
    expect(reverseInteger(121)).toBe(true);
  });

  it('It reverses a negative integer', () => {
    expect(reverseInteger(-123)).toEqual(false);
  });

  it('It trims integers that start/end with 0', () => {
    expect(reverseInteger(10)).toEqual(false);
  });

  it('It reverses a single digit integer', () => {
    expect(reverseInteger(-101)).toEqual(false);
  });
});

