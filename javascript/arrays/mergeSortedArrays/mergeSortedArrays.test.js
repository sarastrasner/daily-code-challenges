'use strict';

const mergeSortedArrays = require('./mergeSortedArrays');

describe('Merge Sorted Arrays', () => {
  it('It returns the sorted array', () => {
    let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
    expect(mergeSortedArrays(nums1, m, nums2, n)).toEqual([1,2,2,3,5,6]);
  });


  it('It returns the sorted array', () => {
    let nums1 = [1], m = 1, nums2 = [], n = 0;
    expect(mergeSortedArrays(nums1, m, nums2, n)).toEqual([1]);
  });

  it('It returns the sorted array', () => {
    let nums1 = [0], m = 0, nums2 = [1], n = 1
    expect(mergeSortedArrays(nums1, m, nums2, n)).toEqual([1]);
  });
});
