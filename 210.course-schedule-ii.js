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
    let edges = new Array(numCourses).fill([])
    let numOfClass = new Array(numCourses).fill(0)
    let took = new Array(numCourses).fill(false);
    for(let [a,b] of prerequisites){
        if(!edges[b].length){
            edges[b] = [];
        }
        edges[b].push(a)
        numOfClass[a] += 1;
    }

    let queue = [];
    for(let i = 0; i<numOfClass.length; i++){
        if(numOfClass[i] === 0){
            queue.push(i);
        }
    }
    let output = [];
    
    function dfs(queue){
        while(queue.length){
            let q = queue.shift();
            output.push(q);
            for(let cls of edges[q]){
                numOfClass[cls]--;
                if(numOfClass[cls] === 0) queue.push(cls);
            }
        }
    }

    dfs(queue)

    for(let i = 0; i<numOfClass.length; i++){
        if(numOfClass[i] !== 0) return []
    }
    return output;
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