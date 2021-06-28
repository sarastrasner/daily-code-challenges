'use strict';
const climbStairs = require('./climbingStairs');

describe('Climbing Stairs', () => {
  it('It returns the correct number of ways to climb the stairs', () => {
    expect(climbStairs(2)).toBe(2);
  });

  it('It returns the correct number of ways to climb the stairs', () => {
    expect(climbStairs(3)).toEqual(3);
  });

  it('It returns the correct number of ways to climb the stairs', () => {
    expect(climbStairs(4)).toEqual(5);
  });
});

