const countMatches = (items, ruleKey, ruleValue) => {
  let counter = 0;
  const indices = { type: 0, color: 1, name: 2 };
  // let idx = indices[ruleKey]
  items.forEach((subArray) => {
    if (subArray[indices[ruleKey]] === ruleValue) counter++;
  });
  return counter;
};

module.exports = countMatches;
