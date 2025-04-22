#include <stdio.h>
#include <stdlib.h>

void insult(int val) {
    const char* insults[] = {
        "Pathetic. Go back to school.",
        "Your value is trash. Try harder.",
        "You disgust me, number."
    };
    printf("<!-- %s (%d) -->\n", insults[rand() % 3], val);
}

void retort(int val) {
    const char* retorts[] = {
        "You think you're better than me? LMAO.",
        "Stay in your lane, rookie.",
        "Not even close to my level."
    };
    printf("<!-- %s (%d) -->\n", retorts[rand() % 3], val);
}

void samc_sort(int arr[], int size) {
    if (size <= 1) return;

    int pivot = arr[0];
    for (int i = 1; i < size; i++)
        if (arr[i] > pivot) pivot = arr[i];

    printf("<!-- Chosen Alpha: %d -->\n", pivot);

    int* left = malloc(size * sizeof(int));
    int* right = malloc(size * sizeof(int));
    int l = 0, r = 0;

    for (int i = 0; i < size; i++) {
        if (arr[i] == pivot) continue;
        if (arr[i] < pivot) {
            insult(arr[i]);
            left[l++] = arr[i];
        } else {
            retort(arr[i]);
            right[r++] = arr[i];
        }
    }

    samc_sort(left, l);
    samc_sort(right, r);

    for (int i = 0; i < l; i++) arr[i] = left[i];
    arr[l] = pivot;
    for (int i = 0; i < r; i++) arr[l + 1 + i] = right[i];

    free(left);
    free(right);
}

// Example main
// int main() {
//     int arr[] = {42, 17, 3, 88, 29, 55, 1};
//     int size = sizeof(arr) / sizeof(arr[0]);
//     samc_sort(arr, size);
//     printf("Final: ");
//     for (int i = 0; i < size; i++) printf("%d ", arr[i]);
//     return 0;
// }
