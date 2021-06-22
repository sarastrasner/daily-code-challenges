import pytest
from code_challenges.numbers.palindrome_number.palindrome_number import isPalindrome # type: ignore

def test_palindrome_number():
  actual = isPalindrome(121)
  assert actual == True


def test_palindrome_number_two():
  actual = isPalindrome(-121)
  assert actual == False


def test_palindrome_number_three():
  actual = isPalindrome(10)
  assert actual == False


def test_palindrome_number_three():
  actual = isPalindrome(-101)
  assert actual == False