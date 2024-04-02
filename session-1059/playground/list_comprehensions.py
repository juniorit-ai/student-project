def square_non_negatives(numbers):
    return [x**2 for x in numbers if x >= 0]

# Example list of integers
numbers = [-10, -5, 0, 5, 10]

print(square_non_negatives(numbers))