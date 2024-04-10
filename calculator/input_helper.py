def get_float(prompt):
    while True:
        try:
            return float(input(prompt))
        except ValueError:
            print('Please enter a valid number.')