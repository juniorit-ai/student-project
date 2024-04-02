from main import numbers

assert all(num % 2 == 0 for num in numbers), 'All numbers in the list should be even.'
assert len(numbers) == 10, 'The list should contain exactly 10 numbers.'
print('All tests passed!')