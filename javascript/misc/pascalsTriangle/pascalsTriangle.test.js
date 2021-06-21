'use strict';

const generatePascalsTriangle = require('./pascalsTriangle');


describe('Generate Pascal\'s Triangle', () => {
  it('It returns and empty array when rowCount is 0', () => {
    let count = 0;
    expect(generatePascalsTriangle(count)).toEqual([]);
  });

  it('It returns and the correct array when rowCount is 1', () => {
    let count = 1;
    expect(generatePascalsTriangle(count)).toEqual([[1]]);
  });

  it('It returns the correct arrays when rowCount is 4', () => {
    let count = 4;
    expect(generatePascalsTriangle(count)).toEqual([[1],[1,1],[1,2,1],[1,3,3,1]]);
  });

});

