
# Creating a list of squares from 0 to 9
squares = [x**2 for x in range(10)]
print('List of squares:', squares)

# Filtering even numbers from 0 to 19
evens = [x for x in range(20) if x % 2 == 0]
print('List of even numbers:', evens)

# Combining two lists element-wise
list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined = [a + b for a, b in zip(list1, list2)]
print('Combined list:', combined)
