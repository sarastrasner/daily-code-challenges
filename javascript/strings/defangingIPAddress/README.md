# LeetCode 1108. Defanging an IP Address
Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

Example 1:
```
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
```
Example 2:
```
Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
```

## Approach & Efficiency
1. Use `.replaceAll()` to replace all instances of periods with `[.]`
1. Alternatively you could use a global regex expression with `.replace()`

## Solution
```
const defangIPaddr = (address) => {
  return address.replaceAll('.', '[.]');
};
```
- [JavaScript Solution](./defangingIPAddress.js)
- [Python Solution](../../../python/code_challenges/strings/defanging_ip_address/README.md)

 