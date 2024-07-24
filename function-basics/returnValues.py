
# Function with a return statement
def is_even(number):
    return number % 2 == 0

# Calling the function and using the return value
num = 4
if is_even(num):
    print(f"{num} is even.")
else:
    print(f"{num} is odd.")
