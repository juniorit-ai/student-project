public class ArrayCalculator {
    public static void calculateAndPrint(int[] array) {
        for (int value : array) {
            if (value % 2 == 0) {
                System.out.println(value + " is even.");
            } else {
                System.out.println(value + " is odd.");
            }
        }
    }
}