'use strict';

const removeDuplicates = require('./removeDuplicates');

describe('Remove duplicates from a sorted array', () => {
  it('It removes duplicates that appear twice in the original array', () => {
    let nums = [1,1,2];
    expect(removeDuplicates(nums)).toEqual(2);
  });


  it('It removes duplicates that appear three times in the original array', () => {
    let nums = [0,0,1,1,1,2,2,3,3,4];
    expect(removeDuplicates(nums)).toEqual(5);
  });


});
