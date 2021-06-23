'use strict';

const validator = require('./validParentheses');

describe('Multi Bracket Validation', () => {
  it('returns true for matched brackets', () => {
    expect(validator('{}(){}')).toEqual(true);
  });

  it('returns true for nested brackets', () => {
    expect(validator('()[[]]')).toEqual(true);
  });

  it('returns false for unmatched brackets', () => {
    expect(validator('()[[{}]]')).toEqual(true);
  });

  it('returns false for null input', () => {
    expect(validator(' ')).toEqual(true);
  });
});
