/*
There is a new product launched and its customer ratings are being recorded in an array. 
The ratings are being monitored and analyzed if there is any decrease in the ratings.
Find the number of periods in which the rating is consecutively decreasing.

Example - Ratings = [4,3,5,4,3]
Periods (in other words sub arrays in which ratings are decreasing):
One day periods = [4],[3],[5],[4],[3] (count of subarrays is 5)
Two day periods = [4,3],[5,4],[4,3] (count of subarrays is 3)
3 day periods = [5,4,3] (count of subarrays is 1)
So, the output for this example will be 9 (5 + 3 + 1)

the solution that passed for me was following what the comment said use the absolute value with the two pointer solution.
https://leetcode.com/discuss/interview-question/1554594/amazon-oa-oct-2021-sde2

*/

function periodsOfDecreaseRating(ratings){
    let output = 0;

    let localHighInd = 0;
    for(let i = 0; i<ratings.length; i++){
        if(ratings[i]>ratings[localHighInd]){
            localHighInd = i;
        }
        output++
        if(i>=1 && ratings[i]<ratings[i-1]){
            output += i-localHighInd
        }
    }
    return output;

}

// 4 - 1
// 4,3 = 2
// 5 - 1
// 5,4 - 2
// 5,4,3 - 3
// 5,4,3,2 - 4 

let ratings = [8,6,7,7]
periodsOfDecreaseRating(ratings);

























/*
  let i = 0;
    let sum = 0;
    for(let j = 0; j<ratings.length; j++){
        if(j > 0 && ratings[j]<ratings[j-1]){
            sum = sum + j-i+1;
        }else{
            sum = sum + 1;
            i = j
        }
    }
    
    return sum;
*/