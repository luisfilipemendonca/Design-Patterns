export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): this {
    const newObj = Object.create(this);
    return newObj;
  }

  addAddress(address: Address) {
    this.addresses.push(address);
  }
}

export class Address {
  constructor(public street: string, public number: number) {}
}

const address1 = new Address("Caminho da Cancela", 10);

const person1 = new Person("Filipe", 29);
person1.addAddress(address1);
const person2 = person1.clone();

console.log(person1.addresses);
console.log(person2.name);
person2.name = "Luis";
console.log(person2.addresses);
