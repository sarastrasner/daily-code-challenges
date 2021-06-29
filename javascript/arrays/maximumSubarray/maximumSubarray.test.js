'use strict';

const maximumSubarray = require('./maximumSubarray');

describe('Maximum Subarray', () => {
  it('It returns the largest possible sum', () => {
    let nums = [-2,1,-3,4,-1,2,1,-5,4];
    expect(maximumSubarray(nums)).toEqual(6);
  });


  it('It returns the largest possible sum', () => {
    let nums = [1];
    expect(maximumSubarray(nums)).toEqual(1);
  });
});
