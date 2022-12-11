/*
Amazon Prime Video is a subscription video-on-demand over-the-top streaming and rental service. The team at Prime Video is developing a method to divide movies into groups based on the number of awards they have won. A group can consist of any number of movies, but the difference in the number of awards won by any two movies in the group must not exceed k

The movies can be grouped together irrespective of their initial order. Determine the minimum number of groups that can be formed such that each movie is in exactly one group.

Example
The numbers of awards per movie are awards [1,5,4,6,8,9,2] and the maximum allowed difference is k = 3.

One way to divide the movies into the minimum number of groups is:

The first group can contain [2, 1]. The maximum difference between awards of any two movies is 1 which does not exceed k.
The second group can contain [5, 4, 6]. The maximum difference between awards of any two movies is 2 which does not exceed k
The third group can contain [8, 9]. The maximum difference between awards of any two movies is 1 which does not exceed k.
The movies can be divided into a minimum of 3 groups.

Function Description
Complete the function minimumGroups in the editor below.

minimumGroups has the following parameters:
int awards[n]: the number of awards each movie has earned
int k: is the maximum difference in awards counts

Returns
int: the minimum number of groups into which all the movies can be divided

Constraints

1 <= n <= 10^6
1 <= k <= 10^4
1 <= awards[i] <= 10^9
Sample Input For Custom Testing

awards = [1, 13, 6, 8, 9, 3, 5], n = 7, k = 4
Sample Output

3
Explanation

The first group can contain [1, 3, 5]. The maximum difference between awards of any two movies is 4 which does not exceed k.
The second group can contain [6, 8]. The maximum difference is 2.
The third group can contain [13, 9]. The maximum difference is 4.
*/

function minimumGroup(awards, k){
   awards.sort((a,b)=>a-b);
    let count = 0;
    let start = 0;
    while(start < awards.length){
        start = binarySearch(awards, start, awards[start]+k) + 1
        count++
    }
    
   function binarySearch(awards, idx, max){
       let low = idx;   
       let high = awards.length - 1;
       let res = idx;
       let mid = 0;
       while(low < high){
           mid = Math.floor(low + (high-low)/2 + 1);
           if(awards[mid] > max){
                high = mid-1;
           }else{
               res = mid;
               low = mid+1;
           }
      }
       return res;
   }

   return count;
}
const awards = [1, 13, 6, 8, 9, 3, 5]
const k = 4
minimumGroup(awards, k)


/* Complexity analysis:

        Sorting: O(NlogN)
        Binary search: O(logN)
        The worst case occurs when each movie is in its own group
        Example: [1,5,9,13,17,21] and k = 3

        Total = O(NlogN + logN) = O(NlogN)
        Space Complexity = O(logN) for Java's internal quicksort. O(1) if sort complexity is ignored.
        

*/