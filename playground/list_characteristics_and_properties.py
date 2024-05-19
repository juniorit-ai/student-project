fruits = ['apple', 'banana', 'cherry']
# Ordered
print(fruits[0])  # Output: apple

# Mutable
fruits[1] = 'blueberry'
print(fruits)  # Output: ['apple', 'blueberry', 'cherry']

# Heterogeneous
mixed_list = [1, 'two', 3.0, True]
print(mixed_list)

# Dynamic
fruits.append('date')
print(fruits)  # Output: ['apple', 'blueberry', 'cherry', 'date']