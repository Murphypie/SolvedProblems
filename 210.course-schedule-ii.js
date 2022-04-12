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
  const inDegrees = Array(numCourses).fill(0);
  for (const [v] of prerequisites) {
    inDegrees[v]++;
  }
  
  const q = [];
  // Checking the degree of 0 which means no prereq is needed
  // If no 0 degrees found, that means we have cycle
  for (let i = 0; i < inDegrees.length; i++) {
    const degree = inDegrees[i];
    if (degree === 0) q.push(i);
  }

  const output = [];
  while(q.length){
    const firstEl = q.shift();
    numCourses--;
    output.push(firstEl);
    for(let [v,u] of prerequisites){
      if(u === firstEl){
        inDegrees[v]--;
        if(inDegrees[v] === 0) q.push(v)
      }
    }
  }
  return numCourses === 0 ? output : [];
};

let numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
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