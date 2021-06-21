'use strict';

const goalParser = require('./goalParser.js');

describe('Goal Parser Interpretation', () => {
  it('it returns the correct string', () => {
    let command = 'G()(al)';
    expect(goalParser(command)).toEqual('Goal');
  });

  it('it replaces all instances of the strings', () => {
    let command = 'G()()()()(al)';
    expect(goalParser(command)).toEqual('Gooooal');
  });

  it('it replaces all instances of the strings, no matter the order in which they appear in the input', () => {
    let command = '(al)G(al)()()G';
    expect(goalParser(command)).toEqual('alGalooG');
  });
});
