/*
  You have a knapsack with a weight limit.
  You are also presented with a list of singular items, each with a weight and a value.
  Each item can be counted only once.
  What is the optimal total value of a set of items that can fit in your knapsack?

  You are presented with an array of singlular objects, each object has a weight and value.
  Imagine that each object represents a unique item, to be counted once.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [
    {weight: 1, value : 3}, 
    {weight: 2, value : 4}, 
    {weight: 3, value : 5},
  ];
  knapsack(items, 3); // returns 7 (from items[0] and items[1])
  knapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

const knapsack = (itemsLeft, weightAvailable) => {
    if(itemsLeft.length === 0) return 0;
    if(weightAvailable < itemsLeft[0].weight) return 0;
    
    let take = itemsLeft[0].value + knapsack(itemsLeft.slice(1), weightAvailable - itemsLeft[0].weight)
    let leave = knapsack(itemsLeft.slice(1), weightAvailable)

    return Math.max(take, leave);
};

let items = [
    {weight: 1, value : 3}, 
    {weight: 2, value : 4}, 
    {weight: 3, value : 5},
  ];
knapsack(items, 3);





















// const knapsack = (itemsLeft, weightAvailable) =>{
//   // base case
//   if(itemsLeft.length === 0) return 0;
//   if(weightAvailable < itemsLeft[0].weight) return 0;
//   // take or leave appraoch
//   let take = itemsLeft[0].value + knapsack(itemsLeft.slice(1), weightAvailable-itemsLeft[0].weight);
//   let leave = knapsack(itemsLeft.slice(1), weightAvailable);

//   return Math.max(take, leave)
// }



/*
  Extension: complete knapsack with Bottom-Up Dynamic Programming
  Hint: Use a matrix/table (an array of arrays)
*/
// const knapsackAdvanced = (items, weight) => {
  
// };

// let items = [
//     {weight: 5, value : 10}, 
//     {weight: 4, value : 40}, 
//     {weight: 6, value : 30},
//     {weight: 3, value : 50},

//   ];

// knapsackAdvanced(items, 10)



//int[] val = {10, 40, 30, 50}, int[] wt = {5, 4, 6, 3}. w = 10;

/*
  // 1. Take or Leave method - recursive function
  // 2. For every iteration, remove the first element from the given array
  // 3. Take variable will have element + recursive function (pass the array that the first element was removed)
  // 4. Leave variable will only have recursive function
  // 5. Base case(exit condition) is if itemsLeft length is 0 or weightAvailable is 0

  if(itemsLeft.length === 0 || weightAvailable === 0) return 0;
  const remaining = itemsLeft.slice(1);

  if(itemsLeft[0].weight > weightAvailable){
    return knapsack(remaining, weightAvailable);
  }

  const take = itemsLeft[0].value + knapsack(remaining, weightAvailable-itemsLeft[0].weight);
  const leave = knapsack(remaining, weightAvailable);

  return Math.max(take, leave);
*/


/*
    const dp = new Array(items.length+1).fill(0)
    for(let i = 0; i<dp.length; i++){
        dp[i] = new Array(weight+1).fill(0);
    }
    
    for(let i = 1; i<dp.length; i++){
        for(let j = 1; j<= weight; j++){
            let maxValWithoutCurr = dp[i-1][j]
            let maxValWithCurr = 0;
            let weightOfCurr = items[i-1].weight;
            if(j >= weightOfCurr){
                maxValWithCurr = items[i-1].value;

                let remainingCapacity = j - weightOfCurr;
                maxValWithCurr += dp[i-1][remainingCapacity];
            }
            dp[i][j] = Math.max(maxValWithoutCurr, maxValWithCurr)
        }
    }


*/