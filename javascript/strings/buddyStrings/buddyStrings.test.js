'use strict';

const buddyStrings = require('./buddyStrings.js');

describe('Buddy Strings', () => {
  it('it returns true for buddy strings.', () => {
    let s = 'ab';
    let goal = 'ba';
    expect(buddyStrings(s, goal)).toEqual(true);
  });

  it('it returns false for non-buddy strings.', () => {
    let s = 'ab';
    let goal = 'ab';
    expect(buddyStrings(s, goal)).toEqual(false);
  });

  it('it returns true for buddy strings.', () => {
    let s = 'aa';
    let goal = 'aa';
    expect(buddyStrings(s, goal)).toEqual(true);
  });

  it('it returns true for buddy strings.', () => {
    let s = 'aaaaaaabc';
    let goal = 'aaaaaaacb';
    expect(buddyStrings(s, goal)).toEqual(true);
  });
});
