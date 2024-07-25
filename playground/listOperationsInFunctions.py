
def print_list(items):

  for item in items:

      print(item)


def sum_list(items):
  
  total = 0

  for item in items:

      total += item

  return total


def find_max(items):

  if len(items) == 0:

      return None

  max_item = items[0]

  for item in items:

      if item > max_item:

          max_item = item

  return max_item


# Example usage

numbers = [1, 2, 3, 4, 5]

print('Printing list:')

print_list(numbers)

print('Sum of list:', sum_list(numbers))

print('Max in list:', find_max(numbers))