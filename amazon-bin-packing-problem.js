

function binPackingProblem(weight, binCapacity){
    // When processing next item, check if it fits in the same bin as the last item. Use a new bin only if it does not. 
    function nextFit(weight, n ,c){
        let output = 0;
        let bin_rem = c;
        for(let i = 0; i<n; i++){
            
            if(weight[i] > bin_rem){
                output++;
                bin_rem = c-weight[i]
            }else{
                bin_rem -= weight[i]
            }
            
        }
        return output;
    }
    nextFit(weight, weight.length, binCapacity)

    // When processing the next item, scan the previous bins in order and place the item in the first bin that fits. 
    // Start a new bin only if it does not fit in any of the existing bins. 
    function firstFit(weight, n, c){
        let output = 0;
        let bin_rem = new Array(n);
        for(let i = 0; i<n; i++){
            let j;
            // Find the first bin that can accommodate weight[i]
            for(j = 0; j<output; j++){
                if(bin_rem[j]>= weight[i]){
                    bin_rem[i] = bin_rem[j] - weight[i];
                    break;
                }
            }
            // If no bin could accommodate weight[i]
            if(j===output){
                bin_rem[output] = c- weight[i];
                output++;
            }
        }
        return output;
    }
    firstFit(weight, weight.length, binCapacity);

    function firstFitDecreasing(weight, n , c){
        weight.sort((a,b)=>b-a)
        return firstFit(weight, n, c)
    }
    firstFitDecreasing(weight, weight.length, binCapacity);

}

const weight = [4,8,1,4,2,1];
const binCapacity = 10;  
binPackingProblem(weight, binCapacity) // output = 2 : [8,1,1], [4,4,2] 