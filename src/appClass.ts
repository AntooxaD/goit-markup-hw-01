class House {
  private tenats: string[] = [];

  constructor(public readonly type: string, private street: string) {}

  public showAdrees(this: House, add: string): void {
    console.log(
      "Adrees " + this.street + " " + this.type + " " + add + " " + this.type
    );
  }
  public addTenant(name: string) {
    this.tenats.push(name);
  }
  public showTenants() {
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
  private chargeOfTheHouse: string;
  constructor(street: string, general: string) {
    super("village", street);

    this.chargeOfTheHouse = general;
  }
  public showTenants() {
    console.log("General " + this.chargeOfTheHouse);

    super.showTenants();
  }
}

const stounHouse = new StounHouse("villa", "Toxa");

stounHouse.addTenant("Luba");
stounHouse.addTenant("Toxa");
stounHouse.showTenants();
