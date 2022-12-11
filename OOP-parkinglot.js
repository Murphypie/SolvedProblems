// Create the parking lot.
// 1. Clarify - Looking for me to demonstarate the structure or fully implement
// 2. Use case - Think and talk through. Understand all the different functionalities,
// 2-1. Identify key objects - If for parking lot, vehicles, parking posts, parking garages, entrances, exits,
// 2-2. Identify operations supported by Objects: Work out all the behaviors you'd expect (ex. car should be able to  move, park in given spot)
// 2-3. Map out the relationships between the different objects that will need to interface with each other 
//(a car should be able to park in a "parking spot", Parking garages hsould be able to fit multiple parking spots)
// 3. Propose a design
// 4. Draw Diagram
// 5. Analyze Constrains
// 6. Scalability


const vehicleType = {0: "Car", 1: "Bike", 2:"Truck"}

class vehicle{
    constructor(type, reg, color){
        this.type = type;
        this.reg = reg;
        this.color = color;
    }
}

class slot{
    constructor(slotid){
        this.slotid = slotid;
        this.ticket = '';
        this.slotType = 0;
        this.occupied = false;
        this.vehicleType = 0;
        this.reg = "";
        this.color = "";
        this.initiate();
    }
    initiate(){
        if(this.slotid === 0){
            this.slotType = 2;
        }else if(this.slotid === 1 || this.slotid ===2){
            this.slotType = 1;
        }else{
            this.slotType = 0;
        }
    }
    park(floorLevel, slotid, vehicleType, reg, color, parkingid){
        this.occupied = true;
        this.vehicleType = vehicleType;
        this.reg = reg;
        this.color = color;
        this.ticket = parkingid+"_"+floorLevel+"_"+slotid
        return this.ticket
    }
    unpark(){
        this.occupied = false;
        this.vehicleType = 0;
        this.reg = "";
        this.color = "";
        this.ticket = ""
    }
}

class floor{
    constructor(floorLevel){
        this.floorLevel = floorLevel;
        this.slots = [];
    }
    populateSlots(noOfSlotsPerFloor){
        for(let i = 0; i<noOfSlotsPerFloor; i++){
            this.slots[i] = new slot(i)
        }
    }
}

class parkingLot{
    constructor(parkinglotid, noOfFloors, noOfSlotsPerFloor){
        this.parkinglotid = parkinglotid;
        this.noOfFloors = noOfFloors;
        this.noOfSlotsPerFloor = noOfSlotsPerFloor;
        this.floorArr = [];
        this.initiate();
    }
    initiate(){
        for(let i = 0; i<this.noOfFloors; i++){
            this.floorArr[i] = new floor(i);
            this.floorArr[i].populateSlots(this.noOfSlotsPerFloor)
        }
    }
    occupied(floor, slotid){
        if(this.floorArr[floor].slots[slotid].occupied === false) return true;
        else return false
    }

    parkVehicle(vehicleType, reg, color){
        for(let i = 0; i < this.noOfFloors; i++){
             for(let j = 0; j< this.floorArr[i].slots.length; j++){
                if(this.occupied(i,j) && this.floorArr[i].slots[j].slotType === vehicleType){
                    return this.floorArr[i].slots[j].park(i, j, vehicleType, reg, color, this.parkinglotid);
                }
             }
        }
        return "Not enough space"
    }

    unparkVehicle(ticket_id){
        for(let i = 0; i < this.noOfFloors; i++){
            for(let j = 0; j< this.floorArr[i].slots.length; j++){
               if(this.floorArr[i].slots[j].ticket === ticket_id){
                this.floorArr[i].slots[j].unpark();
               }
            }
       }
    }

    display(){
        const availableSlots = {};
        for(let i = 0; i < this.noOfFloors; i++){
            for(let j = 0; j< this.floorArr[i].slots.length; j++){
                if(!this.floorArr[i].slots[j].occupied){ // Vacant
                    if(!availableSlots["free_slots"]){
                        availableSlots["free_slots"] = 1;
                    }else{
                        availableSlots["free_slots"]++
                    }
                }else{
                    if(!availableSlots["occupied_slots"]){
                        availableSlots["occupied_slots"] = 1;
                    }else{
                        availableSlots["occupied_slots"]++
                    }
                }
            }
       }
       return availableSlots;
    }

 
}

class parkingLotFactory{
    createParkinglot(parkinglotid, noOfFloors, noOfSlotsPerFloor){
        return new parkingLot(parkinglotid, noOfFloors, noOfSlotsPerFloor);
    }
}

let user = new parkingLotFactory();
let parking = user.createParkinglot(1151, 3, 10);
let park1 = parking.parkVehicle(2, 'ABC', 'Blue')
parking.parkVehicle(2, 'BCD', 'Red')
parking.parkVehicle(2, 'CFG', 'Black')
parking.parkVehicle(2, 'GHI', 'Blac')
parking.display();
parking.unparkVehicle(park1)


