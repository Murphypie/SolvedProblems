/*
 * @lc app=leetcode id=853 lang=javascript
 *
 * [853] Car Fleet
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let combined = [];
    for(let i = 0; i<position.length; i++){
        combined.push([position[i], speed[i]])
    }
    combined= combined.sort((a,b)=>a[0]-b[0]);
    let stack = [];
    for(let i = combined.length-1; i>=0; i--){
        let distance = combined[i][0]
        let speed = combined[i][1]
        let time = (target-distance)/speed;
        if(stack.length === 0) {
            stack.push(time)
            continue;
        }
        if(stack[stack.length-1] < time){
            stack.push(time);
        }
    }
    return stack.length;
};
let target = 100, position = [0,2,4], speed = [4,2,1]
carFleet(target, position, speed)
// @lc code=end

