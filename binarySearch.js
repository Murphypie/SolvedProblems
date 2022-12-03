/* Binary Search 
Given an Array A of n elements with values [A0, A1, A2.. An-1],
sorted such that A0<A1<A2...<An-1, and target value T,
Binary search can be used.
1. Set L = 0 and R = n-1
2. If L > R, the serach terminates unsuccessful
3. Set m to the floor of (L+R)/2
4. If Am < T, set L to m+1
5. If Am > T, set R to m-1
6. Am = T, return m
*/

const binarySearch = (arr, k) =>{
    arr = arr.sort((a,b)=>a-b);
    let left = 0;
    let right = arr.length-1;
    while(left < right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid] < k){
            left = mid+1
        }else if(arr[mid] === k){
            return mid;
        }else{
            right = mid-1
        }
    }
   
    return left;
}

binarySearch([1,3,24,5,10,7,14,16,19,20], 9)




/*
  arr = arr.sort((a,b)=>a-b);
    let l = 0;
    let r = arr.length-1;
    while(l <= r){
        let m = Math.floor((l+r)/2);
        if(arr[m] < k){
            l = m+1;
        }
        if(arr[m] > k){
            r = m-1;
        }
        if(arr[m] === k){
            return m;
        }
    }
*/