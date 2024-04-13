def print_primes(primes):
    for prime in primes:
        if is_prime(prime):
            print(f'Prime number: {prime}')
        else:
            # Incorrectly printing non-prime numbers
            print(f'Not a prime number: {prime}')