const moveZeroes = (nums) => {
  for (let i = nums.length; i--; ) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums;
};

module.exports = moveZeroes;
