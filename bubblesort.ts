function bubblesort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

bubblesort([7, 5, 4, 2, 10, 9, 3, 12]);
