import random

numbers = []
while len(numbers) < 10:
    num = random.randint(1, 100)
    if num % 2 != 0:
        continue
    numbers.append(num)
print('Even numbers list:', numbers)