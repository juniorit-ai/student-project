def transpose_matrix(matrix):
    transposed = [[0 for _ in range(len(matrix))] for _ in range(len(matrix[0]))]
    for i in range(len(matrix)):
        for j in range(len(matrix[0])):
            transposed[j][i] = matrix[i][j]
    return transposed

original_matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print('Original Matrix:\n', original_matrix)
print('Transposed Matrix:\n', transpose_matrix(original_matrix))