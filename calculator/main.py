def main():
    a = float(input('Enter first number: '))
    operation = input('Choose an operation (+, -, *, /): ')
    b = float(input('Enter second number: '))
    result = 0
    if operation == '+':
        result = a + b
    elif operation == '-':
        result = a - b
    elif operation == '*':
        result = a * b
    elif operation == '/':
        result = a / b
    else:
        print('Invalid operation')
    print(f'Result: {result}')

if __name__ == '__main__':
    main()