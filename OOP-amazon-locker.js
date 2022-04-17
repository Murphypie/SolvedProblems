/*
OO Design: design data types for Amazon locker and packages
Requirement: Design an optimized algorithm to fit the package in the right locker
*/

// 1. Clarify - Looking for me to demonstarate the structure or fully implement
// 2. Use case - Think and talk through. Understand all the different functionalities 
// (put a package into a locker, get a package, find a locker space for a package)
// 2-1. Identify key objects - If for parking lot, vehicles, parking posts, parking garages, entrances, exits,
// 2-2. Identify operations supported by Objects: Work out all the behaviors you'd expect (ex. car should be able to  move, park in given spot)
// 2-3. Map out the relationships between the different objects that will need to interface with each other 
//(a car should be able to park in a "parking spot", Parking garages hsould be able to fit multiple parking spots)
// 3. Propose a design
// 4. Draw Diagram
// 5. Analyze Constrains
// 6. Scalability

/*
Use Cases
1. Put a package
2. Get a package
3. Find a locker space for a package and reserve it
4. Track if a package is in the locker or not
5. Expiration?
6. Access control?

Key Objects and Key Operations by Objects
1. Package - size, owner, id
2. Locker - Slots, slot size, empty bool, locker ID, put a package, retrieve, open slots
3. Slot - Size, id, expiration date, put method, get method, package_id

Relationships between the different objects
1. Locker should have multiple slots
2. Package will be inserted into a slot if it fits. Slot should indicate that it has a package
3. Locker should be able to identify empty slots 

*/
let slotid = 1;

class State{
    insertPackage(){}
    takeOutPackage(){}
    CheckEmptySlots(){}
}

class AmazonLocker extends State{
    constructor(){
        super();
        this.id;
    }

    insertPackage(box){

    }

    takeOutPackage(){
        
    }

    CheckEmptySlots(){

    }
    addSlot(){
        
    }

}

class Package{
    constructor(x,y,z){
        [this.x, this.y, this.z] = [x,y,z].sort((a,b)=>(a-b))
    }
}

class PackageFactory{
    constructor(x,y,z){
        return new Package(x,y,z);
    }
}

class Slot{
    constructor(x,y,z){
        [this.x, this.y, this.z] = [x,y,z].sort((a,b)=>(a-b));
        this.empty = true;
        this.id = null;
    }


}

class SlotFactory{
    constructor(x,y,z){
        return new Slot(x,y,z)
    }
}



let slot1 = new SlotFactory(5,5,5)
let slot2 = new SlotFactory(10,10,10)
slot1;
slot2;

