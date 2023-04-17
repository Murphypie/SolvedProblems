/*
 * @lc app=leetcode id=1648 lang=javascript
 *
 * [1648] Sell Diminishing-Valued Colored Balls
 */


// @lc code=start
/**
 * @param {number[]} inventory
 * @param {number} orders
 * @return {number}
 */
var maxProfit = function (inventor, orders) {
    inventor = inventor.sort((a,b)=>b-a)
    let inventory = inventor
    let output = BigInt(0);


    if(inventory.length === 1){
        let end = BigInt(inventory[0])
        let start = BigInt(inventory[0]-orders)

   
         let result = (end)*(end + 1n)/2n - (start)*(start + 1n)/2n
        return result%(BigInt(1000000000+7))
    }

    function rangeSum(inventory, end, orders){
        while(orders > 0){
            
            if(Number(inventory[0]) === Number(inventory[end]) && inventory.length-1 !== end){
                end += 1
            }

            if(inventory.length-1 === end){
                
            }

            let numToAddStart = BigInt(inventory[0])
            let numToAddEnd = BigInt(inventory[end])
            let endPoint = Math.min(end, orders)
            let localSum = BigInt(endPoint)*((numToAddStart)*(numToAddStart+1n)/2n - (numToAddEnd)*(numToAddEnd+1n)/2n)
            
        
            inventory[0]
            inventory[end]
   
 
            if(orders > end){
                orders = orders - (inventory[0]-inventory[end])*end
            }else{
                orders = 0;
                endPoint = orders
            }

            orders
            
            for(let i = 0; i<endPoint; i++){
                let ivEnd = inventory[end]
                inventory[i] = ivEnd
            }
            
            output += localSum
            orders
            
            output;
            inventory


            // Adding till next same one unless order is smaller




            
            // let loopEnd = Math.min(orders, end);
            // let sum = inventory[0]*loopEnd
            // for(let i = 0; i<loopEnd; i++){
            //     inventory[i] -= 1
            // }
            // output += BigInt(sum);
            // orders -= loopEnd
           // orders--
        }

    }
    rangeSum(inventory, 0, orders)
    output;
    5+4+3+3+2
    return output%(1000000000n+7n);
};

//let inventory = [773160767], orders = 252264991;
//let inventory = [497978859,167261111,483575207,591815159], orders = 836556809
let inventory = [2,3,5], orders = 5;
maxProfit(inventory, orders)


// @lc code=end


































/*
//rangeSum Formula
    let rangesum = (i, j) => {
        i = BigInt(i), j = BigInt(j)
        return ((j * ((j + 1n)) / 2n) - (i * (i + 1n) / 2n))
    }
    A.unshift(0) //prepend the sentinel 0 
    A.sort((a, b) => a - b)
    let n = A.length, result = 0n, mod = BigInt(1e9 + 7), i = n - 1
    // can use all current levels
    while ((k >= (n - i) * (A[i] - A[i - 1])) && i > 0) {
        if (A[i] != A[i - 1])
            result = (result + (rangesum(A[i - 1], A[i]) * BigInt(n - i))) % mod,
                k -= (n - i) * (A[i] - A[i - 1])
        i--
    }
    //can use some of the current levels
    if (k > 0 && k >= n - i) {
        let levels = Math.floor(k / (n - i)) //the levels i can use 
        result = (result + (BigInt(n - i) * rangesum(A[i] - levels, A[i]))) % mod
        k -= levels * (n - i)
        A[i] -= levels
    }
    // can use some of the items OF the first level
    if (k > 0 && k < n - i)
        result = (result + BigInt(k) * BigInt(A[i])) % mod
    return Number(result)
*/


/*
 let value = 0;
    let count = orders;
    let numCount = 0;
    inventory = inventory.sort((a,b)=>b-a)

    let rangeSum = (i, j) => {
        i = BigInt(i), j = BigInt(j)
        return ((j * ((j + 1n)) / 2n) - (i * (i + 1n) / 2n))
    }

    if(inventory.length === 1){
        return rangeSum(inventory[inventory.length-1], inventory[inventory.length-1]-orders) % 1000000007
    }
    // 1. Highest until the next element
    while(numCount < count){
        if(!inventory[numCount+1]) break;
        if(inventory[numCount] === inventory[numCount+1]){
            numCount++
            continue;
        }
        value += (numCount+1) * rangeSum(inventory[numCount],inventory[numCount+1])
        count -= (numCount+1) * (inventory[numCount]-inventory[numCount+1])
        numCount++
        if(numCount+1 > inventory.length) break;
    }
 
    for(let i = 0; i<count; i++){
        if(i!== 0 && i%inventory.length === 0){
            --inventory[numCount]
        }
        value += inventory[numCount]
    }
 
    return value % 1000000007

*/