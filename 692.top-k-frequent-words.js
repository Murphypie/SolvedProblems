/*
 * @lc app=leetcode id=692 lang=javascript
 *
 * [692] Top K Frequent Words
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */

 var topKFrequent = function(words, k) {
    let hash = {};
    for(let word of words){
        if(!hash[word]) hash[word] = 1;
        else hash[word]++
    }
    let output = Object.keys(hash).sort((a,b)=>{
        let compare = hash[b] - hash[a]
        if(compare === 0){
            return a.localeCompare(b);
        }
        return compare;
    })

    output;
};



topKFrequent(["i","love","leetcode","i","love","coding", "coding", 'i'], 2)
// @lc code=end

/*
      let hash = {};
    for (let word of words) {
        hash[word] = hash[word]+1||1;
    }
   
    let result = Object.keys(hash).sort((a,b)=>{
        let countCompare = hash[b]-hash[a];
        if(countCompare === 0){
            // if a is before b, return negative
           return a.localeCompare(b);
        }
        return countCompare;
    })
    return result.slice(0,k)
*/