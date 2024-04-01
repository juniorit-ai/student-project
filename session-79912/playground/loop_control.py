for i in range(1, 11):
    if i == 5:
        continue
    if i > 8:
        break
    print(i)

# The above loop will print numbers from 1 to 4, skip 5, and then print 6 to 8 before breaking.