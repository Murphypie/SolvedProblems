/*
Input:
nums = {2, 8, 5, 4}
Output:
1
Explaination:
swap 8 with 4.

Input:
nums = {10, 19, 6, 3, 5}
Output:
2
Explaination:
swap 10 with 3 and swap 19 with 5.
*/

function minSwaps(arr){
    let n = arr.length;
    let visited = new Array(n).fill(false);
    let arrPos = [];
    let output = 0;
    for(let i = 0; i<arr.length;i++){
        arrPos.push([arr[i],i])
    }
    arrPos.sort((a,b)=>a[0]-b[0]);

    for(let i = 0; i<n; i++){
        if(visited[i] || arrPos[i][1] === i) continue;
        let cycle_size = 0;
        let j = i;
        while(!visited[j]){
            visited[j] = true;
            j = arrPos[j][1];
            cycle_size++;
        }
        if(cycle_size > 0){
            output += cycle_size-1;
        }
    }
    return output;
}

let arr = [4, 3, 2,1];
minSwaps(arr);

/*
    let n = arr.length;
  
    // Create two arrays and
    // use as pairs where first
    // array is element and second array
    // is position of first element
    let arrpos = [];
    for (let i = 0; i < n; i++)
         arrpos.push([arr[i], i]);

    // Sort the array by array element values to
    // get right position of every element as the
    // elements of second array.
    arrpos.sort(function(a,b){return a[0]-b[0];});

    // To keep track of visited elements. Initialize
    // all elements as not visited or false.
    let vis = new Array(n).fill(false)
     
    arrpos;
    // Initialize result
    let ans = 0;
      
    // Traverse array elements
    for (let i = 0; i < n; i++)
    {
        // already swapped and corrected or
        // already present at correct pos
        if (vis[i] || arrpos[i][1] === i)
            continue;

        // find out the number of node in
        // this cycle and add in ans
        let cycle_size = 0;
        let j = i;
        while (!vis[j])
        {
            vis[j] = true;

            // move to next node
             
            j = arrpos[j][1];
             
            cycle_size++;
        }

        // Update answer by adding current cycle.
        if(cycle_size > 0)
        {
            ans += (cycle_size - 1);
        }
    }

    // Return result
    return ans;
*/