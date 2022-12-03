/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */



var trap = function(height) {
  // do stack and two pointer

 



};







// 1. Brute Force (time - O(n^2), space - O(n))
// 2. Dynamic Programming (time - O(n), space - O(n))
// 3. Stack (time - O(n), space - O(n))
// 4. Two Pointers (time - O(n), space - O(1))
// https://leetcode.com/problems/trapping-rain-water/discuss/400555/Clean-JavaScript-solutions-(brute-force-dynamic-programming-stack-two-pointers)
trap([0,1,0,2,1,0,1,3,2,1,2,1])
// @lc code=end

/*
 let left = [];
    let right = [];
    let leftmax = 0;
    let rightmax = 0;
    for(let i = 0, j=height.length-1; i<height.length, j>=0; i++, j--){
        leftmax = Math.max(leftmax, height[i]);
        rightmax = Math.max(rightmax, height[j]);
        left.push(leftmax);
        right.unshift(rightmax);
    }
    let output = 0;
    for(let i = 0; i<left.length; i++){
        output += Math.min(left[i], right[i]) - height[i]
    }
    return output
*/

/*
   // two pointer
   let left = 0;
   let right = height.length-1;
   let lMax = 0;
   let rMax = 0;
   let res = 0;
   while(left<right){
       lMax = Math.max(lMax, height[left]);
       if(height[left] < lMax){
           res += lMax - height[left];
       }
       rMax = Math.max(rMax, height[right]);
       if(height[right] < rMax){
           res += rMax - height[right];
       }
       height[left] < height[right] ? left++ : right--; 
   }
   return res;
*/

/*
    //stack
  let res = 0;
    let i = 0;
    const stack = [];
    while(i<height.length){
        while(stack.length !== 0 && height[i] > height[stack[stack.length-1]]){
            const top = stack.pop();

            if(stack.length === 0) break;
            const dist = i-stack[stack.length-1]-1;
            const h = Math.min(height[i], height[stack[stack.length-1]])-height[top];
            res += dist*h;
        }
        stack.push(i);
        i++
    }
    return res;

*/