const defangIPaddr = (address) => {
  return address.replaceAll('.', '[.]');
};

module.exports = defangIPaddr;
