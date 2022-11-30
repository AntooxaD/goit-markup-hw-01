"use strict";
class House {
    constructor(n) {
        this.tenats = [];
        this.street = n;
    }
    showAdrees(add) {
        console.log("Adrees " + this.street + " " + add);
    }
    addTenant(name) {
        this.tenats.push(name);
    }
    showTenants() {
        console.log(this.tenats);
    }
}
const house = new House("Krivbas");
const house2 = { showAdrees: house.showAdrees, street: "Kiyv" };
house.showAdrees("street");
house.addTenant("Toxa");
house.addTenant("Max");
house.showTenants();
//# sourceMappingURL=appClass.js.map