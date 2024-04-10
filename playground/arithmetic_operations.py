def calculate_operations(a, b):
    return (a + b, a - b, a * b, a / b if b != 0 else 'Error: Division by zero')

# Example usage:
print(calculate_operations(10, 5))