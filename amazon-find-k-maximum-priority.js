/*
A combo is defined as a subset of the given n terms. The total popularity is the sum of the individual items of the combo. design an algorithmn that can find the k combos with the highest popularity.
two combos are considered different if they have different subset of items. return the array of k integers where the ith term denotes the popularity of ith best combo. Combos should be returned arranged best to worst.

Example
n = 3
array = [3,5,-2]
k = 3
All possible populatrity of combos are 0,3,5,-2,8,3,1,6 .
The best 3 are 8,6,5.
hence , answer is [8,6,5].

Constraints -
1 <= n <= 10^5
-10^9 <= array[i] <= 10^9
1 <= k <= min(2000,2^n)
*/

class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val, priority = 0){
        this.values.push({val, priority});
        this.sort();
    }
    dequeue(){
        return this.values.shift();
    }
    peek(){
        return this.values[0];
    }
    sort(){
        this.values.sort((a,b)=>a.priority-b.priority);
    }
    size(){
        return this.values.length;
    }
}

function maximumPriority(nums, k){
    nums.sort((a,b)=>a-b);
    let pq = new PriorityQueue();
    subsetSum(pq, k, 0, nums, nums.length -1);
   
    let result = [];
    for(let i = 0; i<k; i++){
        result[i] = pq.dequeue().val;
    }

    function subsetSum(result, k , sum, nums, current){
        for(let i = current; i>=0; i--){
            let nextSum = sum+nums[i];
            if(result.size() < k || result.peek() < nextSum){
                result.enqueue(nextSum);
                if(result.size() > k){
                    result.dequeue();
                }
                subsetSum(result, k, nextSum, nums, i-1);
            }else{
                return;
            }
        }
    }

    return result;
}

const nums = [3,5,-2,10];
const k = 3;
maximumPriority(nums, k)