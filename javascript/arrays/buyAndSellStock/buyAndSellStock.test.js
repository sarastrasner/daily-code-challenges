'use strict';

const buyAndSell = require('./buyAndSellStock');

describe('Best Time to Buy and Sell Stock', () => {
  it('it returns the maximum possible profit', () => {
    let prices = [7,1,5,3,6,4];
    expect(buyAndSell(prices)).toEqual(5);
  });

  it('it returns the 0 when no profit can be achieved', () => {
    let prices = [7,6,4,3,1];
    expect(buyAndSell(prices)).toEqual(0);
  });
});
