def find_value(lst, target):
    for i, value in enumerate(lst):
        if value == target:
            return i
    return -1

# Example usage
index = find_value([1, 2, 3, 4, 5], 3)
print(f'The index of the target is: {index}')