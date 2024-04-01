def function_c(n):
    if n == 0:
        return 1
    else:
        return n * function_c(n)

print(function_c(5))