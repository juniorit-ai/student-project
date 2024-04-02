import unittest
from main import *

class TestMain(unittest.TestCase):
    def test_result_type(self):
        self.assertIsInstance(result, int)

if __name__ == '__main__':
    unittest.main()