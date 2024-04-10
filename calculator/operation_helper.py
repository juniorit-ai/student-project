def perform_operation(a, b, operation):
    if operation == '+':
        return a + b
    elif operation == '-':
        return a - b
    elif operation == '*':
        return a * b
    elif operation == '/':
        if b != 0:
            return a / b
        else:
            return 'Error: Division by zero'
    return 'Invalid operation'