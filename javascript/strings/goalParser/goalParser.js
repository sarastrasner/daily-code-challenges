const interpret = command => {
  return command.replace(/\(\)/g, 'o').replace(/\(al\)/g, 'al')
};

module.exports = interpret;
