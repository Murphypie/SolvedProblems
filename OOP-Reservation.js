// 1. Table number and availability, number of seatings
// 2. Waiting list

class Restaraunt{
    constructor(n){
        this.available = {};
        this.occupied = {};
        this.WaitingList = {};
        this.count = 0;
    }
    makeItAvail(i){

    }
    sitCustomer(i){

    }
    addToWaitingList(name, numOfCompany, phoneNumber){

    }
}


class Tables{
    constructor(count,n){
        this.tableNumber = count
        this.availSeats = n
    }
}

class WaitingList{
    constructor(name, numOfCompany, phoneNumber){
        this.name = "";
        this.numOfCompany = 0;
        this.phoneNumber = "";
    }
}