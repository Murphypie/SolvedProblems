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
var maxProfit = function (inventory, orders) {
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
};

let inventory = [773160767], orders = 252264991;
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