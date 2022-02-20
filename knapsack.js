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
    // Recursive function
    // 1. For every iteration, remove one element from the given array and subtract weight available
    // 2. Use greedy algorithm, take or leave method
    // 3. After iteration, return the max value from take or leave method
    
    if(itemsLeft.length === 0 || weightAvailable === 0) return 0;
    
    const remaining = itemsLeft.slice(1);

    if(itemsLeft[0].weight > weightAvailable){
      return knapsack(remaining, weightAvailable);
    }

    const take = itemsLeft[0].value + knapsack(remaining, weightAvailable-itemsLeft[0].weight);
    const leave = knapsack(remaining, weightAvailable);
    return Math.max(take, leave);

};

let items = [
    {weight: 1, value : 10}, 
    {weight: 2, value : 15}, 
    {weight: 3, value : 40},
  ];
knapsack(items, 6);



/*
  Extension: complete knapsack with Bottom-Up Dynamic Programming
  Hint: Use a matrix/table (an array of arrays)
*/
const knapsackAdvanced = (items, weight) => {
  
};

knapsackAdvanced(items, 6)