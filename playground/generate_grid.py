def generate_grid(max_range):
    grid = []
    for x in range(max_range):
        for y in range(max_range):
            grid.append((x, y))
    return grid

# Example usage:
print(generate_grid(3))