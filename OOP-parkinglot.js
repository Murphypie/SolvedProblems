/*
https://workat.tech/machine-coding/practice/design-parking-lot-qm6hwq4wkhp8

# Create a command-line application for the parking lot system with the following requirements.

# The functions that the parking lot system can do:
# Create the parking lot.
# Add floors to the parking lot.
# Add a parking lot slot to any of the floors.
# Given a vehicle,it finds the first available slot,books it,creates a ticket,parks the vehicle,and finally returns the ticket.
# Unparks a vehicle given the ticket id.
# Displays the number of free slots per floor for a specific vehicle type.
# Displays all the free slots per floor for a specific vehicle type.
# Displays all the occupied slots per floor for a specific vehicle type.

# Details about the Vehicles: - DONE
# Every vehicle will have a type,registration number,and color.
# Different Types of Vehicles:
# Car
# Bike
# Truck

# Details about the Parking Slots:
# Each type of slot can park a specific type of vehicle.
# No other vehicle should be allowed by the system.
# Finding the first available slot should be based on:
# The slot should be of the same type as the vehicle.
# The slot should be on the lowest possible floor in the parking lot.
# The slot should have the lowest possible slot number on the floor.
# Numbered serially from 1 to n for each floor where n is the number of parking slots on that floor.

# Details about the Parking Lot Floors:
# Numbered serially from 1 to n where n is the number of floors.
# Might contain one or more parking lot slots of different types.
# We will assume that the first slot on each floor will be for a truck,the next 2 for bikes,and all the other slots for cars.

# Details about the Tickets:
# The ticket id would be of the following format:
# <parking_lot_id>_<floor_no>_<slot_no>
# Example: PR1234_2_5 (denotes 5th slot of 2nd floor of parking lot PR1234)
# We can assume that there will only be 1 parking lot. The ID of that parking lot is PR1234.
*/

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


