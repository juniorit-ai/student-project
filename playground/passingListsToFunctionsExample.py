def print_list(items):
    for item in items:
        print(item)


def sum_list(numbers):
    total = 0
    for number in numbers:
        total += number
    return total


def find_max(numbers):
    if not numbers:
        return None
    max_num = numbers[0]
    for number in numbers:
        if number > max_num:
            max_num = number
    return max_num


# Example usage
my_list = [1, 2, 3, 4, 5]

print('Printing list:')
print_list(my_list)

print('Sum of list:', sum_list(my_list))
print('Max in list:', find_max(my_list))