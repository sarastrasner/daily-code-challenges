'use strict';

const twoSum = require('./twoSum');

describe('Two Sum', () => {
  it('it returns the correct indices', () => {
    let nums = [2, 7, 11, 15];
    let target = 9;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });

  it('it returns the correct indices', () => {
    let nums = [3, 2, 4];
    let target = 6;
    expect(twoSum(nums, target)).toEqual([1, 2]);
  });

  it('it returns the correct indices', () => {
    let nums = [3, 3];
    let target = 6;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });
});
