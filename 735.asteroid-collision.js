/*
 * @lc app=leetcode id=735 lang=javascript
 *
 * [735] Asteroid Collision
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (a) {
    let stack = [];

    for(let i = 0; i<a.length; i++){
        if(stack[stack.length-1] > 0 && a[i] < 0){
            while(stack.length &&  stack[stack.length-1] > 0 && stack[stack.length-1] <= Math.abs(a[i])){
                if(Math.abs(a[i]) === stack[stack.length-1]){
                    stack.pop();
                    break;
                }else if(Math.abs(a[i]) > stack[stack.length-1]){
                    stack.pop();
                }
                if(stack[stack.length-1] < 0 || stack.length === 0){
                    stack.push(a[i])
                }
            }
            

        }else{
            stack.push(a[i])
        }
    }

    return stack;
};

let asteroids =   [10,2,-5]//[-2,-2,1,-2] 
asteroidCollision(asteroids);

// @lc code=end




/*
   let stack = [];

    for(let i = 0; i<a.length; i++){
        if(stack.length === 0 || stack[stack.length-1] < 0 || stack[stack.length-1]*a[i]>0) stack.push(a[i]);
   
        while(stack[stack.length-1]>0 && a[i] < 0 && stack[stack.length-1] <= Math.abs(a[i])){
            if(stack[stack.length-1] === Math.abs(a[i])){
                stack.pop();
                break;
            }
            stack.pop();
        }
    }

    return stack;
*/



















/*
    let i = 0, stack = [];
    while (i < a.length) {
    if (a[i] >= 0 || !stack.length || stack[stack.length - 1] < 0) {
      stack.push(a[i++]);
    } else if (a[i] + stack[stack.length - 1] < 0) { // current negative is bigger than previous positive
      stack.pop();
    } else if (a[i] + stack[stack.length - 1] === 0) { // same size
      stack.pop();
      i++;
    } else { // current negative is smaller than previous positive
      i++;
    }
  }
  
  return stack;
*/
