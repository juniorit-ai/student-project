import unittest
from main import main

class TestMainFunction(unittest.TestCase):
    def test_main(self):
        # Test if the main function runs without errors
        self.assertIsNone(main())

if __name__ == '__main__':
    unittest.main()