/*
Question
A certain store is testing drone delivery. A drone can
carry multiple items within its maximum weight capacity it can
carry. There are certain items to be delivered from the store to
the customers and the store decides to use two drones to
deliver the items and the remaining items will be delivered by
John manually. Help John to save his effort by making him carry
minimal weight.

Input:

The first line contains the capacities of each drone and number
of items W1, W2,i

The second line contains an array of item weights W1,w2,w3...Wi

Output:

Print the minimum weight that John will be carrying
i belongs to N (Natural Numbers) and wi belongs to W (Whole Numbers)
O< < 2000. 0<= wi <=3000.
0<=W1.W2<=2000000

TestCase

d1 = 25, d2 = 13, n = 5 = w.length;
w = [2, 5, 7, 10, 17] // assume not sorted

**Explanation: **

Items with weights 7 and 17 can be carried by
Drone 1 and items with weights 2 and 10 can be carried by
Drone 2 and John will be carrying the remaining item with
weight 5

*/

function droneDelivery(arr, n, d1, d2){
    // dp[i][j] denotes weight i is carried by the first drone and weight j is carried by the second drone
    let dp = new Array(d1+1).fill(false).map(()=>new Array(d2+1).fill(false));
    dp[0][0] = true;
    let total = 0;
    for(let i = 0; i <n; i++){
        for(let drone1 = d1; drone1 >=0; drone1--){
            for(let drone2 = d2; drone2 >= 0; drone2--){
                // looking for all the possible combinations of distribution of weights
                if( ((drone1-arr[i]) >= 0 && dp[drone1-arr[i]][drone2]) || 
                    ((drone2-arr[i]) >= 0 && dp[drone1][drone2-arr[i]]) ){
                    dp[drone1][drone2] = true;
                }
            }
        }
        total += arr[i]
    }
    
    let ans = total;
    
    for(let drone1 = 0; drone1 <=d1; drone1++){
        for(let drone2 = 0; drone2 <=d2; drone2++){
            if(dp[drone1][drone2]){
                ans = Math.min(ans, total-drone1-drone2);
            }
        }
    }
    return ans;
}


const d1 = 25, d2 = 13, n = 5
const w = [2, 5, 7, 10, 17]

droneDelivery(w, n, d1, d2)