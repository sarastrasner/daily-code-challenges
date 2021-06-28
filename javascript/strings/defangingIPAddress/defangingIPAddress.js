const defangIPaddr = (address) => {
  return address.replace(/\./g, '[.]');
};

module.exports = defangIPaddr;
