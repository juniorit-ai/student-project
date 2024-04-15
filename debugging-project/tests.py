import unittest
from helpers import double_number

class TestHelpers(unittest.TestCase):
    def test_double_number(self):
        self.assertEqual(double_number(2), 4)

if __name__ == '__main__':
    unittest.main()