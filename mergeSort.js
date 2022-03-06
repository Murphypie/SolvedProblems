const mergeSort = (arr) =>{
    const sort = (leftArr, rightArr) =>{
        const mergedArr = [];
        while(leftArr.length && rightArr.length){
            if(leftArr[0] > rightArr[0]){
                mergedArr.push(rightArr.shift())
            }else{
                mergedArr.push(leftArr.shift())
            }
        }
        return [...mergedArr, ...leftArr, ...rightArr];
    }

    if(arr.length <= 1) return arr;
    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    return sort(mergeSort(left), mergeSort(right))
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