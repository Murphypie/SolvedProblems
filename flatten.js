/**
 * Flattens a nested array (one level deep).
 * flatten([1, [2, 3, [4]]]); → [1, 2, 3, [4]]
 */
function flatten(arr){
    // let output = [];
    // for(let i = 0; i<arr.length; i++){
    //     if(typeof arr[i] === 'object'){
    //         for(let el of arr[i]){
    //             output.push(el)
    //         }
    //     }else{
    //         output.push(arr[i])
    //     }
    // }
    // return output;
    let result = arr.reduce((prev, curr)=>{
        return prev.concat(curr);
    }, [])
    result;
}

flatten([1, [2, 3, [4]]])

/**
 * Recursively flattens a nested array.
 * flattenDeep([1, [2, 3, [4]]]); → [1, 2, 3, 4]
 */

function flattenDeep(arr){
    // let output = [];
    // for(let el of arr){
    //     if(Array.isArray(el)){
    //         output.push(...flattenDeep(el))
    //     }else{
    //         output.push(el)
    //     }
    // }

    // return output;

    let result = arr.reduce((prev, curr)=>{
        return prev.concat(Array.isArray(curr) ? flattenDeep(curr) : curr)
    }, [])
    return result;
}

flattenDeep([1, [2, 3, [4]]])