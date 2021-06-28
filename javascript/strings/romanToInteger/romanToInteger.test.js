'use strict';

const roman = require('./romanToInteger');

describe('Roman to Integer', () => {
  it('It returns the correct integer', () => {
    expect(roman('III')).toEqual(3);
  });

  it('It returns the correct integer', () => {
    expect(roman('IV')).toEqual(4);
  });

  it('It returns the correct integer', () => {
    expect(roman('IX')).toEqual(9);
  });

  it('It returns the correct integer', () => {
    expect(roman('LVIII')).toEqual(58);
  });

  it('It returns the correct integer', () => {
    expect(roman('MCMXCIV')).toEqual(1994);
  });
});
