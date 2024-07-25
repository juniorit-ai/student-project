
# Initialize a list

my_list = [1, 2, 3, 4, 5]

# Accessing items

print('Accessing items:', my_list[0], my_list[2], my_list[-1])


# Modifying items

my_list[1] = 10

print('After modifying:', my_list)

# Adding items

my_list.append(6)

my_list.extend([7, 8])

my_list.insert(0, 0)

print('After adding items:', my_list)

# Removing items

my_list.remove(0)

popped_item = my_list.pop(2)

print('After removing items:', my_list, 'Popped item:', popped_item)


# Clearing the list

my_list.clear()
print('After clearing:', my_list)

  