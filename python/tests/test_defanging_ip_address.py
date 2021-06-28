import pytest
from code_challenges.strings.defanging_ip_address.defanging_ip_address import defangIPaddr # type: ignore

def test_defanging_ip_address():
    address = "1.1.1.1"
    actual = defangIPaddr(address)
    expected = "1[.]1[.]1[.]1"
    assert actual == expected


def test_defanging_ip_address_two():
    address = "255.100.50.0"
    actual = defangIPaddr(address)
    expected = "255[.]100[.]50[.]0"
    assert actual == expected