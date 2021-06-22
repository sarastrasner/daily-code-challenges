'use strict';

const decompress = require('./decompressArray');


describe('Testing Version 1', () => {
  it('it returns the correct array', () => {
    let nums = [1, 2, 3, 4];
    expect(decompress(nums)).toEqual([2, 4, 4, 4]);
  });

  it('it returns the correct array', () => {
    let nums = [1, 1, 2, 3];
    expect(decompress(nums)).toEqual([1, 3, 3]);
  });
});
