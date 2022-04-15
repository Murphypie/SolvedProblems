/*
 * @lc app=leetcode id=210 lang=javascript
 *
 * [210] Course Schedule II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */


var findOrder = function(numCourses, prerequisites) {
    // 1. Count all the classes available - [0,1,1,2];
    // 2. Push element that is zero to stack which means that no prereq is required.
    // 3. Using BFS, while stack is not empty, 

    let countArr = new Array(numCourses).fill(0);
    for(let [u,v] of prerequisites){
        countArr[u]++
    }

    let stack = []
    let output = [];
    for(let i = 0; i<countArr.length; i++){
        if(countArr[i] === 0){
            output.push(i)
            stack.push(i)
        }
    };

    while(stack.length){
        let curr = stack.shift();
        for(let [u,v] of prerequisites){
            if(v===curr){
                countArr[u]--;
                if(countArr[u] === 0){
                    output.push(u)
                    stack.push(u);
                }
            }
        }
    }
    
    return countArr.every(x=>x===0) ? output : [];
};

let numCourses = 3, prerequisites = [[1,0],[1,2],[0,1]]
findOrder(numCourses, prerequisites)



// @lc code=end

/*
const inDegrees = Array(numCourses).fill(0);
  for (const [v] of prerequisites) {
    inDegrees[v]++;
  }

  const q = [];
  for (let i = 0; i < inDegrees.length; i++) {
    const degree = inDegrees[i];
    if (degree === 0) q.push(i);
  }

  const res = [];
  while (q.length) {
    const u0 = q.shift();
    numCourses--;
    res.push(u0);
    for (const [v, u] of prerequisites) {
      if (u === u0) {
        inDegrees[v]--;
        if (inDegrees[v] === 0) q.push(v);
      }
    }
  }
  return numCourses === 0 ? res : [];
*/