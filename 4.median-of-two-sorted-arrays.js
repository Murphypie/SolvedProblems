/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    if(nums2.length < nums1.length) return findMedianSortedArrays(nums2, nums1);
    let n1 = nums1.length;
    let n2 = nums2.length;
    let low = 0;
    let high = n1;

    while(low <= high){
        let mid = Math.floor((low+high)/2);
        
        let upLeft = nums1.slice(0, mid);
        let upRight = nums1.slice(mid);
        let downLeft = nums2.slice(0, Math.floor((n1+n2+1)/2)-upLeft.length);
        let downRight = nums2.slice(Math.floor((n1+n2+1)/2)-upLeft.length);
        let upLeftEnd = upLeft[upLeft.length-1] === undefined ? -Infinity : upLeft[upLeft.length-1]
        let upRightFirst = upRight[0] === undefined ? Infinity: upRight[0]
        let downLeftEnd = downLeft[downLeft.length-1] === undefined ? -Infinity  : downLeft[downLeft.length-1];
        let downRightFirst = downRight[0] === undefined ? Infinity : downRight[0]

        if(upLeftEnd <= downRightFirst && downLeftEnd <= upRightFirst){
            if((n1+n2) % 2 !== 0) return Math.max(upLeftEnd, downLeftEnd)
            else return (Math.max(upLeftEnd, downLeftEnd) + Math.min(upRightFirst, downRightFirst))/2
        }else if(upLeftEnd > downRightFirst){
            high = mid-1;
        }else{
            low = mid+1
        }

    }
    return 0


};

let nums1 = [1,3];
let nums2 = [2];
findMedianSortedArrays(nums1, nums2);
// @lc code=end
















/*
  if (nums2.length < nums1.length)
        return findMedianSortedArrays(nums2, nums1);
    let n1 = nums1.length;
    let n2 = nums2.length;
    let low = 0, high = n1;

    while(low <= high){
        let cut1 = Math.floor((low+high)/2);
        let cut2 = Math.floor((n1+n2+1)/2)- cut1

        let left1 = cut1 === 0 ? -Infinity : nums1[cut1 - 1]
        let left2 = cut2 === 0 ? -Infinity : nums2[cut2 - 1]
        
        let right1 = cut1 === n1 ? Infinity : nums1[cut1];
        let right2 = cut2 === n2 ? Infinity : nums2[cut2];

        if(left1 <= right2 && left2 <= right1){
            if((n1+n2) % 2 === 0){
                return (Math.max(left1, left2) + Math.min(right1, right2))/2
            }else{
                return Math.max(left1, left2)
            }
        }else if(left1 > right2){
            high = cut1 -1;
        }else{
            low = cut1 + 1;
        }
    }
    return 0
*/
