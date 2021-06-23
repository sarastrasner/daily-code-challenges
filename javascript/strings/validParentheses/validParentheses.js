const isValid = (s) => {
  let newArray = [];
  let openBracket = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  let closedBracket = {
    '}': true,
    ']': true,
    ')': true,
  };
  for (let i = 0; i < s.length; i++) {
    let character = s[i];
    if (openBracket[character]) {
      newArray.push(character);
    } else if (closedBracket[character]) {
      if (openBracket[newArray.pop()] !== character) return false;
    }
  }
  return newArray.length === 0;
};

module.exports = isValid;
