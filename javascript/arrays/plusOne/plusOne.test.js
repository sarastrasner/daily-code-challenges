'use strict';

const plusOne = require('./plusOne');

describe('Create Target Array in the Given Order', () => {
  it('It returns the incremented array', () => {
    let nums = [1,2,3];
    expect(plusOne(nums)).toEqual([1,2,4]);
  });


  it('It adds a digit if the input only contains 9', () => {
    let nums = [9];
    expect(plusOne(nums)).toEqual([1,0]);
  });

  it('It returns the incremented array', () => {
    let nums = [1,8,9];
    expect(plusOne(nums)).toEqual([1,9,0]);
  });
});
