
function longestIncreasingSubsequece(nums){
    let dp = new Array(nums.length).fill(1);
    let max = 0;

    let lisArr; // if you want to know the arr

    for (let i = 0; i < nums.length; i++) {
        lisArr = [0];
        let anchor = 1;
        for (let j = 0; j <= i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
                max = Math.max(max, dp[i]);
            }
            // if you want to know the arr
            if(dp[j] > anchor){
                anchor++
            }
            if(dp[j] === anchor){
                lisArr[anchor-1] = j
            }
            //
        }
    }

    return max;
}


/* LIS binary
var lengthOfLIS = function (nums) {
    let dp = [];
    dp[0] = nums[0];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if(num>dp[dp.length-1]){
            dp.push(num);
        }else{
            let index = binarySearch(dp, num);
            dp[index] = num;
        }
    }

    function binarySearch(dp, target){
        let left = 0;
        let right = dp.length-1;
        while(left<=right){
            let mid = Math.floor((left+right)/2);
            if(dp[mid]===target){
                return mid
            }else if(dp[mid]<target){
                left = mid+1
            }else{
                right = mid-1;
            }
        }
        return left;
    }
    
    return dp.length
};

*/

longestIncreasingSubsequece([3,1,8,2,5])


function Tabfibonacci(n){ // Tabulation - Bottom to Top
    let stash = [];
    for(let i = 0; i<n; i++){
        if(i === 0 || i === 1){
            stash.push(1);
        }else{
            stash[i] = stash[i-1]+stash[i-2]
        }
    }
   
    return stash[stash.length-1];
}

Tabfibonacci(10);


function memoFibonacci(n){
    let dp = new Array(n);
    let recur = (n) =>{
        if(n<0) return;
        let result = 0;
        if(dp[n] !== null){
            if(n<2){
                result = n;
            }else{
                result = recur(n-2)+recur(n-1)
            }
        }
        dp[n] = result;
        return result;
    }
    recur(n)
    dp;
    return dp[dp.length-1]
}

memoFibonacci(10)