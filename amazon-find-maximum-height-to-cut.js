/*
Find maximum height to cut all chocolates horizontally such that at least K amount remains

https://www.geeksforgeeks.org/find-maximum-height-to-cut-all-chocolates-horizontally-such-that-at-least-k-amount-remains/
Given an array arr[] consisting of heights of N chocolate bars, 
the task is to find the maximum height at which the horizontal cut is made to all the chocolates 
such that the sum remaining amount of chocolate is at least K.
Input: K = 7, arr[] = [15, 20, 8, 17]
Output: 15
Explanation:
If a cut is made at height 8 the total chocolate removed is 24 and chocolate wasted is 24 – 7 = 17 units. 
If a cut is made at height 15 then chocolate removed is 7 and no chocolate is wasted. Therefore 15 is the answer.
Input: K = 12, arr[] = [30, 25, 22, 17, 20]
Output: 21
After a cut at height 18, the chocolate removed is 25 and chocolate wastage is (25 – 12) = 13 units.
But if the cut is made at height 21 is made then 14 units of chocolate is removed and the wastage is (14 – 12) = 2 which is the least, hence 21 is the answer
*/

function findMaximumHeightToCut(k, arr){
    let low = 0;
    let high = arr[0];
    let sum = 0;

    for(let i = 0; i<arr.length; i++){
        sum += arr[i]
        high = Math.max(high, arr[i]);
    }

    while(low <= high){
        let mid = Math.floor((low+high)/2);
        let calc = calculate(arr, mid)
        if(calc<k){
            high = mid - 1;
        }else if(k===calc){
            return mid;
        }else{
            low = mid + 1
            if(mid > high) high = mid;
        }
    }
    
    function calculate(arr, mid){
        let sum = 0;
        for(let i = 0; i<arr.length; i++){
            if(mid<arr[i]){
                sum += arr[i]-mid;
            }
        }
        return sum;
    }

    return high;
}

let k = 12, arr = [30, 25, 22, 17, 20]
findMaximumHeightToCut(k, arr)