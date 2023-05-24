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
    // do stack, tp and dp
    // tp
    let left = 0;
    let right = height.length-1;
    let sum = 0;
    let leftMax = 0;
    let rightMax = 0;
    while(left<right){
        if(height[left]>height[right]){
            rightMax = Math.max(rightMax, height[right])
            sum += rightMax-height[right]
            right--
        }else{
            leftMax = Math.max(leftMax, height[left])
            sum += leftMax-height[left]
            left++
        }
    }
    return sum;
};




// 1. Brute Force (time - O(n^2), space - O(n))
// 2. Dynamic Programming (time - O(n), space - O(n))
// 3. Stack (time - O(n), space - O(n))
// 4. Two Pointers (time - O(n), space - O(1))
// https://leetcode.com/problems/trapping-rain-water/discuss/400555/Clean-JavaScript-solutions-(brute-force-dynamic-programming-stack-two-pointers)
trap([4,2,0,3,2,5]);
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


/*
// TP failed - kind of - but approached it wrong // it works though


    let left = 0;
    let right = height.length-1;
    let output = 0;
    let leftLocalMax = height[left];
    let rightLocalMax = height[right];

    while(left < right){
        if(height[left]<height[right]){
            left += 1;
            leftLocalMax = Math.max(leftLocalMax, height[left])
            output += leftLocalMax-height[left];
        }else{
            right -= 1
            rightLocalMax = Math.max(rightLocalMax, height[right])
            output += rightLocalMax-height[right];
        }
    }
    return output;
*/


/* dyanamic
function trap(height) {
  if (height == null || height.length === 0) return 0;

  let res = 0;
  let l = height.length;
  let lMax = {};
  let rMax = {};

  lMax[0] = height[0];
  for (let i = 1; i < l; i++) {
    lMax[i] = Math.max(height[i], lMax[i - 1]);
  }

  rMax[l - 1] = height[l - 1];
  for (let i = l - 2; i >= 0; i--) {
    rMax[i] = Math.max(height[i], rMax[i + 1]);
  }

  for (let i = 0; i < height.length; i++) {
    res += Math.min(lMax[i], rMax[i]) - height[i];
  }

  return res;
}

*/