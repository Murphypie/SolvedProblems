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
    let letLogs = [];
    let digLogs = [];
    for(let i = 0; i<logs.length; i++){
       if(isFinite(logs[i].split(' ')[1])){
        digLogs.push(logs[i])
       }else{
        letLogs.push(logs[i])
       }
    }
    letLogs.sort((a,b)=>{
        let l1 = a.split(' ').slice(1).join(' ')
        let l2 = b.split(' ').slice(1).join(' ')
        if(l1 === l2) return a>b ? 1: -1
        return l1>l2 ? 1: -1
    })

    return letLogs.concat(...digLogs)
};

let logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
reorderLogFiles(logs)


// @lc code=end


/*
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
*/