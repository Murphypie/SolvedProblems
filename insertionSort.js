// 1. Iterate through arr[1] to arr[n-1]
// 2. Compare the current element (key) to its predecessor
// 3. If the key element is smaller than its predecessor, 
// compare it to the elements before. Move the greater elements one position
// up to make space for the swapped element
// Best-case: O(n) comparisons, O(1) swaps
// Worse-case : O(n^2) comparisons and swaps
// Average:  O(n^2) comparisons and swaps

const insertionSort = (arr) =>{
    for(let i = 1; i<arr.length; i++){
        let key = arr[i];
        let j = i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j];
            j = j-1;
        }
        arr[j+1] = key;
    }
}

const insertionSortBinaryAdd = (arr, num) => {
    let start = 0;
    let end = arr.length-1;
    let index;

    if(num < arr[0]) index = 0;

    if(num > arr[end]) index = end+1;

    let ans = -1;

    while(start <= end){
        const mid = start + (Math.floor((end-start)/2));
        if(arr[mid] <= num){
            start = mid+1;
            ans = mid;
        }else{
            end = mid -1
        }
    }
    index = ans + 1;
    arr.splice(index, 0 , num);
}

let arr = [1,3,5,6,10]
insertionSortBinaryAdd(arr, 7);
arr;

