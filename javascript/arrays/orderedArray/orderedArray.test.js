'use strict';

const orderedArray = require('./orderedArray');

describe('Create Target Array in the Given Order', () => {
  it('It returns the ordered array', () => {
    let nums = [0,1,2,3,4];
    let index = [0,1,2,2,1];
    expect(orderedArray(nums, index)).toEqual([0,4,1,3,2]);
  });


  it('It returns the ordered array', () => {
    let nums = [1,2,3,4,0];
    let index = [0,1,2,3,0];
    expect(orderedArray(nums, index)).toEqual([0,1,2,3,4]);
  });

  it('It returns the ordered array', () => {
    let nums = [1];
    let index = [0];
    expect(orderedArray(nums, index)).toEqual([1]);
  });
});
