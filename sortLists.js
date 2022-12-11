let arr = [7, 5, 4, 2, 10, 9, 3];

// Bubble sort
function bubblesort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

// Insertion sort
function insertionSort(arr) {
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

// Selection sort
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

// Merge sort
function mergeSort(arr) {
    function merge(leftArr, rightArr) {
        let mergedArr = [];
        while (leftArr.length && rightArr.length) {
            if (leftArr[0] > rightArr[0]) {
                mergedArr.push(rightArr.shift());
            } else {
                mergedArr.push(leftArr.shift());
            }
        }
        return [...mergedArr, ...leftArr, ...rightArr];
    }

    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

// Quick sort
// https://www.enjoyalgorithms.com/blog/quick-sort-algorithm
// [7, 5, 4, 2, 10, 9, 3];
function quickSort(arr) {
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    function partition(arr, low, high) {
        let pivot = arr[high];
        let i = low - 1;
        for (let j = low; j <= high - 1; j++) {
            if (arr[j] < pivot) {
                i++;
                swap(arr, i, j);
            }
        }
        swap(arr, i + 1, high);
        return i + 1;
    }

    function sort(arr, low, high) {
        if (low < high) {
            let pi = partition(arr, low, high);
            sort(arr, low, pi - 1);
            sort(arr, pi + 1, high);
        }
    }
    sort(arr, 0, arr.length - 1);
    return arr;
}


function heapSort(arr) {

}

