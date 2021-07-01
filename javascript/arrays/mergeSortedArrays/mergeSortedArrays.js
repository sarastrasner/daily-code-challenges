const merge = (nums1, m, nums2, n) => {
  // the last index in nums1
  var insertPos = m + n - 1;
  // the last nonzero number in nums1
  m--;
  // the nast number in nums2
  n--;
  while (n >= 0) {
    nums1[insertPos--] =
      nums1[m] > nums2[n]
        ? // if nums1's last number is greater than nums2's last number, then nums1[insertPosition] will be the last nonzero number in nums1
        nums1[m--]
        : // if nums1's last number is NOT greater than nums2's last number, then nums1[insertPosition] will be the last number in nums2
        nums2[n--];
  }
  return nums1;
};

module.exports = merge;
