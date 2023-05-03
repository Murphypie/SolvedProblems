/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start

function maxArea(height){
    let max = 0;
    let left = 0;
    let right = height.length-1;

    while(left<right){
        const area = Math.min(height[left], height[right])*(right-left)
        max = Math.max(max, area)
        if(height[left]>height[right]){
            right--
        }else{
            left++
        }
    }
    return max;
};

maxArea([1,8,6,2,5,4,8,3,7])
// @lc code=end











































/*
  let area = 0;
    for(let i = 0, j = height.length-1; i<j;){
        area = Math.max(area, (j-i)*Math.min(height[i], height[j]));
        height[j] < height[i] ? j-- : i++;
   }
   return area;
*/

/*
   let low = 0;
    let high = height.length-1
    let maxArea = 0;
    while(low < high){
        let area = Math.min(height[low], height[high])*(high-low);
        maxArea = Math.max(maxArea, area);
        if(height[low] > height[high]){
            high--
        }else{
            low++
        }
    }
    return maxArea
*/