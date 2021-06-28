'use strict';

const defang = require('./defangingIPAddress.js');

describe('Defanging an IP Address', () => {
  it('it returns a defanged version of that IP address.', () => {
    let address = '1.1.1.1';
    expect(defang(address)).toEqual('1[.]1[.]1[.]1');
  });

  it('it returns a defanged version of that IP address.', () => {
    let address = '255.100.50.0';
    expect(defang(address)).toEqual('255[.]100[.]50[.]0');
  });
});
