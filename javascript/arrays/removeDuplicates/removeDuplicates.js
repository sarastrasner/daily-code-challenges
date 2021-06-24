const removeDuplicates = (nums) => {
  //since array is already sorted, all ocurences will appear next to each other
  //if the next element is same as the current element splice it
  //otherwise just move to the next element
  //For instance in array [1, 1, 2]
  //Since nums[0] === nums[1]; splice nums[1]
  //Splice alters the array in place so length will become now 2
  // Dont increment i; compare nums[0] with nums[0+1] (i.e. 2 now)
  //Since nums[0]!==nums[1] (1!==2) so increment i
  for (let i = 0; i < nums.length; ) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
    } else {
      i += 1;
    }
  }
  return nums.length;
};

module.exports = removeDuplicates;
