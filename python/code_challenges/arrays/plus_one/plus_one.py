def plusOne(digits):
    return [int(x) for x in str(int(''.join(map(str, digits)))+1)]
