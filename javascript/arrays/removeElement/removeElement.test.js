'use strict';

const remover = require('./removeElement');

describe('Remove Element', () => {
  it('It removes elements that occur more than twice', () => {
    let nums = [0,1,2,2,3,0,4,2];
    let val = 2;
    expect(remover(nums, val)).toEqual(5);
  });


  it('It removes elements that occur twice', () => {
    let nums = [3,2,2,3];
    let val = 3;
    expect(remover(nums,val)).toEqual(2);
  });
});
