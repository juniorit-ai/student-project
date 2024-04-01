number = 0
while number < 10:
    print(f'Current number: {number}')
    if number == 5:
        break
    number += 1
else:
    print('Loop completed without interruption.')

# Intentional bugs:
# 1. The 'else' block should not execute when 'break' is called.
# 2. The increment of 'number' should occur in all iterations.