'use strict';

const counter = require('./ruleCounter');

describe('Count Items Matching a Rule', () => {
  it('It counts the correct number of silver colors', () => {
    let items = [['phone','blue','pixel'],['computer','silver','lenovo'],['phone','gold','iphone']];
    let ruleKey = 'color';
    let ruleValue = 'silver';
    expect(counter(items, ruleKey, ruleValue)).toEqual(1);
  });


  it('It counts the correct number of phone types', () => {
    let items = [['phone','blue','pixel'],['computer','silver','phone'],['phone','gold','iphone']];
    let ruleKey = 'type';
    let ruleValue = 'phone';
    expect(counter(items, ruleKey, ruleValue)).toEqual(2);
  });
});
