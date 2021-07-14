function nextGreaterElement(nums1, nums2) {
  return nums1.map((n) => {
    let found = nums2.indexOf(n);
    // find the next greater element's index
    while (nums2[++found] < n);
    // -1 if not found
    if (found >= nums2.length) found = -1;
    else found = nums2[found];

    return found;
  });
}

module.exports = nextGreaterElement;
