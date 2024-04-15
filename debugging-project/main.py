def main():
    user_input = input('Enter a number: ')
    try:
        number = int(user_input)
        result = number * 2
        print(f'The result is: {result}')
    except ValueError:
        print('Please enter a valid number.')

if __name__ == '__main__':
    main()