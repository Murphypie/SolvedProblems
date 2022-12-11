/*
I own a parking garage that provides valet parking service. When a customer pulls up to the entrance they are either 
rejected because the garage is full, or they are given a ticket they can use to collect their car, and the car is parked for them.

Given a set of different parking bays (Small, Medium, Large), write a control program to accept/reject cars (also small, medium or large)
as they arrive, and issue/redeem tickets.

Sample Input:

parking spaces: [1,1,2] (1 small, 1 medium, 1 large)
actions: [(arrival, small), (arrival, large), (arrival, medium), (arrival, large), (arrival, medium)]
ouput: [1, 2, 3, 4, reject]

parking spaces: [1,1,2] (1 small, 1 medium, 1 large)
actions: [(arrival, small), (arrival, large), (arrival, medium), (arrival, large), (depart, 3), (arrival, medium)]
output: [1, 2, 3, 4, 5]

*/
// [[arrival, small],[departure, small]]
// [1]
function foo(items, actions) {
    // [["small," 1], ["large," 2]]
    
    // 1. Use for-loop of actions
    // 1-1. If small, subtract 1 from 0th element of items, medium- subtract 1 from 1st element of items...
    // 2. If the respective element from items array is 0, then return reject
    
    let parking = [];
    let count = 1;
    
    for(let i = 0; i<actions.length; i++){
        if(actions[i][0] = "arrival"){
            if(actions[i][0] === "small"){
                if(items[0] === 0){
                    parking.push("reject")
                    return
                }else{
                    items[0] -= 1
                }
            }else if(actions[i][0] === "medium"){
                if(items[1] === 0){
                     parking.push("reject")
                    return "reject"
                }else{
                    items[1] -= 1;
                }
            }else if(actions[i][0] === "large"){
                if(items[2] === 0){
                     parking.push("reject")
                    return "reject"
                }else{
                    items[2] -= 1;
                }
            }
            parking.push([actions[i][0], count])
            count++;
        }else{
            for(j = 0; j<parking.length; j++){
                if(actions[i][1] === parking[j][1]){
                    if(parking[j][0] === "small"){
                        items[0]++
                    }else if(parking[j][0] === "medium"){
                        items[1]++
                    }else if(parking[j][0] === "large"){
                        items[2]++
                    }
                }
            }
        }
    }
    
    let output = [];
    for(let i = 0; i<parking.length; i++){
        if(parking[i] === "reject"){
            output.push("reject")
        }else{
            output.push(parking[i][1])
        }    
    }
    return output;
}

