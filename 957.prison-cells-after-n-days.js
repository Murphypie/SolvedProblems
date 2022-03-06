/*
 * @lc app=leetcode id=957 lang=javascript
 *
 * [957] Prison Cells After N Days
 */

// @lc code=start
/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, n) {
   let prison = [...cells].join('');
   let history = [];
   while(n>0){
    let lookup = history.indexOf(prison);
    if(lookup !== -1){
        history = history.slice(lookup)
        let mod = n%(history.length);
        return history[mod].split('')  
    }
    history.push(prison);
    prison = nextDay(prison);
    n--
   }
   function nextDay(str){
       let newPrison = ""
       for(let i = 0; i<str.length; i++){
           if(i === 0 || i === str.length-1){
               newPrison += "0"
           }else{
               if(str[i-1] === str[i+1]){
                   newPrison += "1";
               }else{
                   newPrison += "0";
               }
           }
       }
       return newPrison
   }
   
   return prison.split('')
};

prisonAfterNDays([1,0,0,1,0,0,1,0], 1000000000)
// @lc code=end



/*
    let nextDay = function(cells){
        let newPrison = "";
        for(let i = 0; i<cells.length; i++){
            if(cells[i-1] === cells[i+1]) newPrison += "1"
            else newPrison += "0";
        }
        return newPrison
    }

    let prison = [...cells].join('');
    let history = [];
    while(n--){
        prison = nextDay(prison);
        let lookup = history.indexOf(prison);
        if(lookup !== -1){
            let mod = n%(history.length - lookup);
            return history[lookup + mod].split('')
        }
        history.push(prison);
    }

    return prison.split('');
*/

31%13

let indexarr =  ['10010010',
  '00010010',
  '01010010',
  '01110010',
  '00100010',
  '00101010',
  '00111110',
  '00011100',
  '01001000',
  '01001010',
  '01001110',
  '01000100',
  '01010100',
  '01111100',
  '00111000' ]
