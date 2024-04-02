x = '10'
y = 5
if isinstance(x, int) and isinstance(y, int):
    result = x + y
else:
    raise TypeError('Both x and y must be integers')
print(f'Result is: {result}')