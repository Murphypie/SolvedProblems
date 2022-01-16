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
};



topKFrequent(["the","day","is","sunny","the","the","the","sunny","is","is"], 4)
// @lc code=end

