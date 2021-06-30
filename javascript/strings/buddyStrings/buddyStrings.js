const buddyStrings = (s, goal) => {
  // If they're not the same length, return false
  if (s.length != goal.length) return false;
  const diff = [];
  // See how many different characters the two strings contain. If it's more than 2, return false.
  for (let i = 0; i < s.length; i++) {
    if (s[i] != goal[i]) diff.push(i);
    if (diff.length > 2) return false;
  }
  // if the two contain the same characters: 'aaaa' and 'aaaa', compare s and
  if (!diff.length) return s.length != [...new Set(s)].length;
  const [i, j] = diff;
  return s[i] == goal[j] && goal[i] == s[j];
};

module.exports = buddyStrings;