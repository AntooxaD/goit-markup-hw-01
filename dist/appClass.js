"use strict";
class House {
    constructor(type, street) {
        this.type = type;
        this.street = street;
        this.tenats = [];
    }
    showAdrees(add) {
        console.log("Adrees " + this.street + " " + this.type + " " + add + " " + this.type);
    }
    addTenant(name) {
        this.tenats.push(name);
    }
    showTenants() {
        console.log(this.tenats);
    }
}
const house = new House("city", "Krivbas");
const house2 = { showAdrees: house.showAdrees, street: "Kiyv" };
house.showAdrees("Bila Tscerkva");
house.addTenant("Toxa");
house.addTenant("Max");
house.showTenants();
class StounHouse extends House {
    constructor(street, general) {
        super("village", street);
        this.chargeOfTheHouse = general;
    }
    showTenants() {
        console.log("General " + this.chargeOfTheHouse);
        super.showTenants();
    }
}
const stounHouse = new StounHouse("villa", "Toxa");
stounHouse.addTenant("Luba");
stounHouse.addTenant("Toxa");
stounHouse.showTenants();
//# sourceMappingURL=appClass.js.map