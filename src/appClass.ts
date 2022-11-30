class House {
  private street: string;
  private tenats: string[] = [];

  constructor(n: string) {
    this.street = n;
  }
  public showAdrees(this: House, add: string): void {
    console.log("Adrees " + this.street + " " + add);
  }
  public addTenant(name: string) {
    this.tenats.push(name);
  }
  public showTenants() {
    console.log(this.tenats);
  }
}
const house = new House("Krivbas");
const house2 = { showAdrees: house.showAdrees, street: "Kiyv" };

house.showAdrees("street");
house.addTenant("Toxa");
house.addTenant("Max");
house.showTenants();
