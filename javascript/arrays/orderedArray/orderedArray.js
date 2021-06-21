const createTargetArray = (nums, index) => {
  let result = [];
  for (let number of nums) {
    let idx = index.shift();
    result.splice(idx, 0, number);
  }
  return result;
};

module.exports = createTargetArray;

