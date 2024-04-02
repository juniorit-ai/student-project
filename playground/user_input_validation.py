while True:
    try:
        age = int(input('Please enter your age: '))
        break
    except ValueError:
        print('Invalid input. Please enter a number.')