'use strict';
const reverseInteger = require('./reverseInteger');

describe('Reverse Integer', () => {
  it('It reverses a positive integer', () => {
    expect(reverseInteger(123)).toEqual(321);
  });

  it('It reverses a negative integer', () => {
    expect(reverseInteger(-123)).toEqual(-321);
  });

  it('It trims integers that start/end with 0', () => {
    expect(reverseInteger(120)).toEqual(21);
  });

  it('It reverses a single digit integer', () => {
    expect(reverseInteger(0)).toEqual(0);
  });

  it('It returns 0 if the number exceeds the limit', () => {
    expect(reverseInteger(222356920298)).toEqual(0);
  });
});

