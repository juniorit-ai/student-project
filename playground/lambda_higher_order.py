def high_order_function(f, vals):
    return [f(x) for x in vals]

my_nums = [1, 2, 3, 4, 5]
doubled = high_order_function(lambda x: x * 2, my_nums)
print(doubled)