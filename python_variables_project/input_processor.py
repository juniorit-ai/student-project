def process_input(user_input):
    try:
        # Convert input to integer
        number = int(user_input)
        return number * 2
    except ValueError:
        return 'Error: Invalid input, please enter a number.'