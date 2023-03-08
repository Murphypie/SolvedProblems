


let trieGen = (products, searchWord) =>{
    let trie = {};
    for(word of products){
        let head = trie;
        for(let i = 0; i<word.length; i++){
            if(!head[word[i]]){
                head[word[i]] = {"suggestion": []};
                
            }
            if(head[word[i]]["suggestion"].length < 3) head[word[i]]["suggestion"].push(word)
            head = head[word[i]]
            
        }
        
    }
    trie;


}

let products =["mobile","mouse","moneypot","monitor","mousepad", "style"]
let searchWord = "mouse"
trieGen(products, searchWord)











/*
   let trie = {};
    for(let word of products){
        let head = trie;
        for(let i = 0; i<word.length; i++){
            if(!head[word[i]]){
                head[word[i]] = {"arr":[]};
            }
            if(head[word[i]]["arr"].length < 3){
                head[word[i]]["arr"].push(word)
            }
            head = head[word[i]]
        }
    }
   trie;
*/