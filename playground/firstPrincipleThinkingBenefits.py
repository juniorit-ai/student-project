
# Example problem: Calculate the area of a polygon using first principles

class Polygon:
    def __init__(self, sides, lengths):
        self.sides = sides
        self.lengths = lengths

    def area(self):
        # Using the formula for the area of a regular polygon
        # Area = (sides * length^2) / (4 * tan(pi/sides))
        import math
        area = (self.sides * self.lengths**2) / (4 * math.tan(math.pi / self.sides))
        return area

# Example usage
hexagon = Polygon(6, 10)
print('Area of the hexagon:', hexagon.area())
