def reverse(x):
  limit = 2147483648
  # value_if_true if condition else value_if_false
  k = -1 if x < 0  else 1
  n = int(str(abs(x))[::-1])
  return 0 if n > limit else n * k