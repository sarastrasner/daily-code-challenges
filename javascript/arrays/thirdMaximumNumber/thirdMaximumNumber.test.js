'use strict';

const thirdMaximumNumber = require('./thirdMaximumNumber');

describe('Third Maximum Number', () => {
  it('it returns the correct number', () => {
    let array = [3,2,1];
    expect(thirdMaximumNumber(array)).toEqual(1);
  });

  it('it returns the correct number', () => {
    let array = [1,2];
    expect(thirdMaximumNumber(array)).toEqual(2);
  });

  it('it returns the correct number', () => {
    let array = [2,2,3,1];
    expect(thirdMaximumNumber(array)).toEqual(1);
  });
});
