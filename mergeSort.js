/*
          [5,2,1,7,10,4]
       [5,2,1]     [7,10,4]
      [5]  [2,1]  [7]  [10,4]
     [5] [2] [1] [7] [10] [4]
     [2,5]  [1]  [7,10]  [4]
        [1,2,5]   [4,7,10]
           [1,2,4,5,7,10]

*/


const mergeSort = (arr) =>{
    const merge = (leftArr, rightArr)=>{
        const mergedArr = [];
        while(leftArr.length && rightArr.length){
            if(leftArr[0] > rightArr[0]){
                mergedArr.push(rightArr.shift());
            }else{
                mergedArr.push(leftArr.shift());
            }
        }
        return [...mergedArr, ...leftArr, ...rightArr];
    }
    
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let leftArr = arr.slice(0,mid);
    let rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}


mergeSort([1,15,10,5,8,2])



/*
const merge = (leftArr, rightArr)=>{
        const mergedArr = [];
        while(leftArr.length && rightArr.length){
            if(leftArr[0] > rightArr[0]){
                mergedArr.push(rightArr.shift());
            }else{
                mergedArr.push(leftArr.shift());
            }
        }
        return [...mergedArr, ...leftArr, ...rightArr];
    }
    
    if(arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
*/