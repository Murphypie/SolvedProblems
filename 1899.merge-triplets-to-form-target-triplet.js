/*
 * @lc app=leetcode id=1899 lang=javascript
 *
 * [1899] Merge Triplets to Form Target Triplet
 */

// @lc code=start
/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
    let merged = []
    for(let i = 0; i<triplets.length; i++){
        if(target[0] >= triplets[i][0] && target[1] >= triplets[i][1] && target[2] >= triplets[i][2]){
            if(merged.length === 0) merged = triplets[i]
            else{
                merged = [Math.max(merged[0], triplets[i][0]), Math.max(merged[1], triplets[i][1]), Math.max(merged[2], triplets[i][2])]
            }
        }else{
            continue;
        }
    }
    return merged[0] === target[0] && merged[1] === target[1] && merged[2] === target[2]
};
// @lc code=end

let triplets = [[1,3,1]], target = [1,3,2]
mergeTriplets(triplets,target)