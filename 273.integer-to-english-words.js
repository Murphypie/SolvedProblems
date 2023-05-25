/*
 * @lc app=leetcode id=273 lang=javascript
 *
 * [273] Integer to English Words
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    const translations = new Map([
        [1000000000, 'Billion'],
        [1000000, 'Million'],
        [1000, 'Thousand'],
        [100, 'Hundred'],
        [90, 'Ninety'],
        [80, 'Eighty'],
        [70, 'Seventy'],
        [60, 'Sixty'],
        [50, 'Fifty'],
        [40, 'Forty'],
        [30, 'Thirty'],
        [20, 'Twenty'],
        [19, 'Nineteen'],
        [18, 'Eighteen'],
        [17, 'Seventeen'],
        [16, 'Sixteen'],
        [15, 'Fifteen'],
        [14, 'Fourteen'],
        [13, 'Thirteen'],
        [12, 'Twelve'],
        [11, 'Eleven'],
        [10, 'Ten'],
        [9, 'Nine'],
        [8, 'Eight'],
        [7, 'Seven'],
        [6, 'Six'],
        [5, 'Five'],
        [4, 'Four'],
        [3, 'Three'],
        [2, 'Two'],
        [1, 'One'],
      ]);
      
};
// @lc code=end





  numberToWords(1234567);
















  /*
  
    const translations = new Map([
        [1000000000, 'Billion'],
        [1000000, 'Million'],
        [1000, 'Thousand'],
        [100, 'Hundred'],
        [90, 'Ninety'],
        [80, 'Eighty'],
        [70, 'Seventy'],
        [60, 'Sixty'],
        [50, 'Fifty'],
        [40, 'Forty'],
        [30, 'Thirty'],
        [20, 'Twenty'],
        [19, 'Nineteen'],
        [18, 'Eighteen'],
        [17, 'Seventeen'],
        [16, 'Sixteen'],
        [15, 'Fifteen'],
        [14, 'Fourteen'],
        [13, 'Thirteen'],
        [12, 'Twelve'],
        [11, 'Eleven'],
        [10, 'Ten'],
        [9, 'Nine'],
        [8, 'Eight'],
        [7, 'Seven'],
        [6, 'Six'],
        [5, 'Five'],
        [4, 'Four'],
        [3, 'Three'],
        [2, 'Two'],
        [1, 'One'],
      ]);

    if(num === 0) return "Zero";
    if(num <= 20) return translations.get(num);

    let output = []
    for(let [value, translation] of translations){
        const times = Math.floor(num/value);
        if(times === 0){
            continue;
        }
        num -= times*value;

        if(times === 1 && value >= 100){
            output.push("One", translation)
            continue;
        }
        if(times === 1){
            output.push(translation);
            continue;
        }
        output.push(numberToWords(times), translation);
    }
   
    return output.join(" ")
  */