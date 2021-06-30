const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    console.log('in the for loop');
    if (digits[i] < 9) {
      // if last digit is smaller than nine
      digits[i]++;
      return digits;
    }
    // if last digit is nine
    else digits[i] = 0;
  }
  //if digit only contains a 9
  digits.unshift(1);
  return digits;
};

module.exports = plusOne;