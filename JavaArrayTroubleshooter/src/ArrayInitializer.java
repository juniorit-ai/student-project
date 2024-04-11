public class ArrayInitializer {
    public static int[] initializeArray(int size) {
        int[] array = new int[size];
        for (int i = 0; i < size; i++) {
            array[i] = i * i;
        }
        return array;
    }
}