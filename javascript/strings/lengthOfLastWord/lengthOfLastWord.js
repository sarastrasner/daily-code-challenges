const lengthOfLastWord = (s) => {
  let array = s.trim().split(' ');
  return array[array.length - 1].length;
};

module.exports = lengthOfLastWord;
