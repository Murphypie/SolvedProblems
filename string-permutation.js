function stringPermute(str){
   let output = [];

   function swap(str, l, r){
       let charArr = str.split("");
       let temp = charArr[l];
       charArr[l] = charArr[r];
       charArr[r] = temp;
       return charArr.join("")
   }

   function permute(str, l, r){
       if(l === r){
           output.push(str);
       }else{
           for(let i = l; i<r; i++){
                str = swap(str, l, i);
                permute(str, l+1, r);
                str = swap(str, l, i); // backtrack
            }
        }
   }
   console.log(output)
   permute(str, 0, str.length)
   return output;
}

let str = "sta"
stringPermute(str);


/*

abc
                                a-a swap  a-b swap  a-c swap
abc       bac       cba
                                b-b  b-c  a-a  a-c  b-b  b-c
abc  acb  bac  bca  cba  cab

*/

/*
let output = [];

   function swap(str, l, r){
       let charArr = str.split("");
       let temp = charArr[l];
       charArr[l] = charArr[r];
       charArr[r] = temp;
       return charArr.join("") 
    }

   function permute(str, l, r){
       if(l === r){
           output.push(str)
       }else{
           for(let i = l; i<=r; i++){
               str = swap(str, l, i);
               permute(str,l+1,r);
               str = swap(str, l, i)
           }
       }
   } 
   permute(str, 0, str.length-1)
   return output;
*/