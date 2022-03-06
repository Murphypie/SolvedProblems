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
var asteroidCollision = function(a) {
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
};

let asteroids = [13,5,-10, -3];
asteroidCollision(asteroids);

// @lc code=end

