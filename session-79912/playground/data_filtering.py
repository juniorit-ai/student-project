def filter_odd_numbers(numbers):
    odd_numbers = []
    for number in numbers:
        if number % 2 != 0:
            odd_numbers.append(number)
    return odd_numbers

# Example usage:
input_list = [1, 2, 3, 4, 5, 6]
print('Filtered odd numbers:', filter_odd_numbers(input_list))