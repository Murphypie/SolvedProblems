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
    
    let letterArr = []
    let digArr = []

    for(let i = 0; i<logs.length; i++){
        if(!isNaN(parseInt(logs[i].split(" ")[1]))){
            digArr.push(logs[i])
        }else{
            letterArr.push(logs[i])
        }
    }

    letterArr.sort((a,b)=>{
        let l1 = a.split(' ').slice(1).join(' ');
            l2 = b.split(' ').slice(1).join(' ');
        if(l1===l2) return a>b ? 1:-1
        return l1 > l2 ? 1:-1 })

    
    return letterArr.concat(digArr)
    
};


let logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo","a2 act car"]
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