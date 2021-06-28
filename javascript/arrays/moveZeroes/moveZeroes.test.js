'use strict';

const moveZeroes = require('./moveZeroes');

describe('Create Target Array in the Given Order', () => {
  it('It returns the ordered array', () => {
    let nums = [0,1,0,3,12];
    expect(moveZeroes(nums)).toEqual([1,3,12,0,0]);
  });


  it('It returns the ordered array', () => {
    let nums = [0];
    expect(moveZeroes(nums)).toEqual([0]);
  });
});
