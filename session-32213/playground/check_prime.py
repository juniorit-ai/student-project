def is_prime(number):
    if number <= 1:
        return False
    for i in range(2, int(number ** 0.5) + 1):
        if number % i == 0:
            return False
    else:
        return True

number_to_check = 29
print(f'Is {number_to_check} a prime number? {is_prime(number_to_check)}')