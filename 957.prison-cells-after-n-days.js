/*
 * @lc app=leetcode id=957 lang=javascript
 *
 * [957] Prison Cells After N Days
 */

// @lc code=start
/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, n) {
    const hashTable = {};
    let hashTableSize = 0;
    let loopBool = false;
    const filpper = (arr) =>{
        let tempArr = [];
        let tempStr = '';
        for(let i = 0; i<arr.length; i++){
            if(i===0 || i === arr.length-1){
                tempArr.push(0);
                tempStr += '0'
            }else if(cells[i-1] === cells[i+1]){
                tempArr.push(1);
                tempStr += '1'
            }else if(cells[i-1] !== cells[i+1]){
               tempArr.push(0);
               tempStr += '0'
            }
        }
        if(Object.values(hashTable).includes(tempStr)){
            loopBool = true;
            return tempStr
        }else{
            hashTable[hashTableSize] = tempStr;
            hashTableSize++;
            cells = tempArr;
        }
    }
    for(let i = 0; i<n; i++){
        if(!loopBool){filpper(cells)};
        if(loopBool) break;
    }
    
    let remainder;
    if(n === hashTableSize){
        remainder = n - 1;
    }else if(n>hashTableSize){
        if(n%hashTableSize === 0){
            remainder = hashTableSize-1;
        }else{
         remainder = n%hashTableSize - 1
        }
    }else{
        remainder = n;
    }
    let result = hashTable[remainder].split('').map(x=>parseInt(x));
    return result;
    
};


prisonAfterNDays([1,1,0,1,1,0,0,1], 300663720)
// @lc code=end



/*
    const filpper = (arr) =>{
        let tempArr = [];
        for(let i = 0; i<arr.length; i++){
            if(i===0 || i === arr.length-1){
                tempArr.push(0);
            }else if(cells[i-1] === cells[i+1]){
                tempArr.push(1);
            }else if(cells[i-1] !== cells[i+1]){
               tempArr.push(0);
            }
        }
        cells = tempArr;
    }

    for(let i = 0; i<n; i++){
        filpper(cells);
    }
    return cells;
*/
