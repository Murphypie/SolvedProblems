/*
 * @lc app=leetcode id=240 lang=javascript
 *
 * [240] Search a 2D Matrix II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  ///gdf/gdf/g/g/d
};

const binarySearch = (matrix, target) =>{
    let low = 0;
    let high = matrix.length-1; 
    let bool = false;
    while(low <= high){
        let mid = Math.floor((high+low)/2)
        if(target>matrix[mid]){
            low = mid + 1;
        }
        if(target<matrix[mid]){
            high = mid - 1;
        }
        if(target === matrix[mid]){
            bool = true;
            return bool;
        }
    }
    return bool;
}


//let arr = [2,5,8,12,19]
//binarySearch(arr, 5);


searchMatrix([[1],[2],[3],[4],[5]], 2);
// @lc code=end

