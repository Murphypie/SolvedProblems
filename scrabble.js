const algebra = a =>({
    add: function(c){
        return a+c
    },
    multiply: function(c){
        return a*c
    }
})

let test = algebra(10)
test.multiply(3)



const closure = (a) =>{
    let count = 0;
    return function(c){
        if(count > 2){
            return count
        }
        ++count
        return a*c
    }
}

let closureTest = closure(5);
closureTest(3)
closureTest(3)
closureTest(3)
closureTest(3);