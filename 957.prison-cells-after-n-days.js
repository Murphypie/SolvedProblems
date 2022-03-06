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
   
};

prisonAfterNDays([1,1,0,1,1,0,0,1], 3)
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
