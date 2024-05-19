my_list = [1, 2, 3]

# Adding elements
my_list.append(4)
my_list.insert(1, 'a')
my_list.extend([5, 6])
print(f'After adding elements: {my_list}')

# Removing elements
my_list.remove('a')
my_list.pop(2)
print(f'After removing elements: {my_list}')

# Updating elements
my_list[2] = 'b'
print(f'After updating elements: {my_list}')

# Slicing and accessing elements
first_element = my_list[0]
last_two_elements = my_list[-2:]
print(f'First element: {first_element}')
print(f'Last two elements: {last_two_elements}')