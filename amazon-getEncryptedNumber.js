/*
In order to ensure maximum security, the developers at Amazon employ multiple encryption methods to keep user data protected.

In one method, numbers are encrypted using a scheme called 'Pascal Triangle". When an array of digits is fed to this system, it sums the adjacent digits. It then takes the rightmost digit (least significant digit) of each luge is repeated addition for the next step. Thus, the number of digits in each step is reduced by 1. This procedige until there are only 2 digits left, and this sequence of 2 digits forms the encrypted number.

Given the initial sequence of the digits of numbers, find the encrypted number. You should report a string of digits representing the encrypted number.

Function Description
Complete the function getEncryptedNumber in the editor below.

getEncryptedNumber has the following parameter:
int numbers[n]: the initial sequence of digits

Returns
string: the encrypted number represented as a string of 2 characters.

Constraints

2 <= numbers.length <= 5.10^3
0 <= numbers[1] ≤ 9
Sample Input For Custom Testing

numbers = [1, 2, 3, 4], n = 4
Sample Output

82
Explanation
The encryption occurs as follows: [1, 2, 3, 4] -> [3, 5, 7] -> [8, 2].

Another Input

numbers = [4, 5, 6, 7], n = 4
Sample Output

04
Explanation
The encryption occurs as follows: [4, 5, 6, 7] -> [9, 1, 3] -> [0, 4].

*/

function getEncryptedNumber(nums){

    const recur = (arr) =>{
        if(arr.length === 2) return arr;
        const tempArr = [];
        for(let i = 1; i<arr.length; i++){
            let sum = arr[i]+arr[i-1]
            tempArr.push(sum >= 10? sum-10 : sum);
        }
        return recur(tempArr);
    }

    return recur(nums);
}

let nums = [4,5,6,7];
getEncryptedNumber(nums);