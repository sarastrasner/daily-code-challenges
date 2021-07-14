'use strict';

const nextGreaterElement = require('./nextGreaterElement');

describe('Next Greater Element', () => {
  it('It returns the correct array', () => {
    let nums1 = [4,1,2];
    let nums2 = [1,3,4,2];
    expect(nextGreaterElement(nums1, nums2)).toEqual([-1,3,-1]);
  });


  it('It returns the correct array', () => {
    let nums1 = [2,4];
    let nums2 = [1,2,3,4];
    expect(nextGreaterElement(nums1, nums2)).toEqual([3,-1]);
  });
});
