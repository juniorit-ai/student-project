numbers = [1, 2, 3, 4, 5]
for number in numbers:
    if number % 2 == 0:
        print(f'Even number: {number}')
    else:
        # Incorrect use of 'break', should be 'continue'
        break