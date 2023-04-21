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



function parking(spaces, actions) {
    let output = {};
    let counter = 1;

    for (let i = 0; i < actions.length; i++) {
        const carSize = actions[i][1]
        if (actions[i][0] === 1) { // If arrival
            if(spaces[carSize] === 0){
                output["reject"] = false
            }else{
                output[counter++] = carSize
                spaces[carSize]--
            }
        } else { // If depart
            const issuedTicker = actions[i][1];
            const parkingSize = output[issuedTicker]
            spaces[parkingSize]++
        }
    }

    return Object.keys(output).map(Number)
}

const parkSpace = [1, 1, 2]

const depart = 0;
const arrival = 1;

const small = 0;
const medium = 1;
const large = 2;


const actions =  [[arrival, small], [arrival, large], [arrival, medium], [arrival, large], [depart, 3], [arrival, medium]]

//[[arrival, small], [arrival, large], [arrival, medium], [arrival, large], [arrival, medium]]

parking(parkSpace, actions)