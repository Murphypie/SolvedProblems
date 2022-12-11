/*
1. User inserts coins - balance has to be adjusted. 
2. User can do 2 things - a. Cancel, b. buy
2-a. Return change
2-b-1 (enough balance) - dispense (update amount, dispence function)
2-b-2 (not enough) - warning 
*/

const items = {"Coke": 25,
                "Pepsi": 35,
                "Pop": 45};
const coins = {
    "Penny": 1,
    "Nickel": 5,
    "Dime": 10,
    "Quarter": 25
}

// Keeps the amount of items, add items, subtract items, reset, check stock
class Inventory{
    constructor(){
        this.inv = {};
    }
    addItem(item){
        if(!this.inv[item]){
            this.inv[item] = 1;
        }else{
            this.inv[item]++
        }
    }
    subtractItem(item){
        this.inv[item]--;
    }
    outofStock(item){
        if(this.inv[item] === 0){
            return true
        }
        return false;
    }
    checkStock(item){
        return this.inv[item];
    }
    reset(){
        for(let item in this.inv){
            this.inv[item] = 0;
        }
    }
    getPrice(item){
        return items[item];
    }
}

class Coin{
    constructor(){
        this.sum = 0;
    }
    addCoin(str){
        this.sum += coins[str]
    }
    resetCoin(){
        this.sum = 0;
    }
    balanceCoin(){
        return this.sum;
    }
}

// Dispense, check balance, return remaining change, cancel
class VendingMachine{
    constructor(){
        this.item_inventory = new Inventory();
        this.balance = new Coin();
    }

    dispense(item){
        if(this.item_inventory.outofStock(item)){
            return "Out of Stock"
        }else if(this.balance.balanceCoin() >= this.item_inventory.getPrice(item)){
            this.item_inventory.subtractItem(item)
            return item
        }else{
            return "Inefficient balance"
        }
    }

    addItem(item){
        this.item_inventory.addItem(item);
    }

    displayBalance(){
        return this.balance.balanceCoin();
    }

    cancel(){
        this.balance.resetCoin();
    }

    addCoin(coin){
        this.balance.addCoin(coin)
    }

}

