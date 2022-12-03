/*
I own a parking garage that provides valet parking service. When a customer pulls up to the entrance they are either 
rejected because the garage is full, or they are given a ticket they can use to collect their car, and the car is parked for them.

Given a set of different parking bays (Small, Medium, Large), write a control program to accept/reject cars (also small, medium or large)
as they arrive, and issue/redeem tickets.

Sample Input:

parking spaces: [1,1,2] (1 small, 1 medium, 1 large)
actions: [(arrival, small), (arrival, large), (arrival, medium), (arrival, large), (arrival, medium)]
output: [1, 2, 3, 4, reject]

parking spaces: [1,1,2] (1 small, 1 medium, 1 large)
actions: [(arrival, small), (arrival, large), (arrival, medium), (arrival, large), (depart, 3), (arrival, medium)]
output: [1, 2, 3, 4, 5]

*/

const parking_space = [1,1,2]
const actions =  [["arrival", "small"], ["arrival", "large"], ["arrival", "medium"], ["arrival", "large"], ["depart", 3], ["arrival", "medium"]];

function parking(parking_space, actions){
    const sizeEnum = {
        "small":0,
        "medium": 1,
        "large": 2
    }   

    let parkedCars = [];
    let output = [];
    let count = 0;

    for(let i = 0; i<actions.length; i++){
        let size = actions[i][1]

        if(actions[i][0] === "depart"){
            let departSize = parkedCars[actions[i][1]-1];
            parking_space[departSize]++
        }else{
            if(parking_space[sizeEnum[size]] > 0){
                parking_space[sizeEnum[size]]--
                count += 1;
                output.push(count)
                parkedCars.push(sizeEnum[size])
            }else{
                output.push("reject")
            }
        }
    }
    return output;
}

parking(parking_space, actions);
