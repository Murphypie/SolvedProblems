/*
 * @lc app=leetcode id=937 lang=javascript
 *
 * [937] Reorder Data in Log Files
 */

// @lc code=start
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    const digits = [], letters = [];
    
    logs.forEach(x=>{
        if(isFinite(x.split(' ')[1])){
            digits.push(x);
        }else{
            letters.push(x)
        }
    })

       letters.sort((a,b)=>{
        let l1 = a.split(' ').slice(1).join(' ');
            l2 = b.split(' ').slice(1).join(' ');
        if(l1===l2) return a>b ? 1:-1
        return l1 > l2 ? 1:-1
    })

    return [...letters, ...digits]
};

let logs = ["zoey i love you","lucas i love you","rong i love you"]
reorderLogFiles(logs)


// @lc code=end

