import { Customer } from "../interfaces/customer";
import { Vehicle } from "../interfaces/vehicle";

export class IndividualCar implements Vehicle {
  constructor(public name: string, private readonly customer: Customer) {}

  pickUp(): void {
    console.log(
      `${this.name} está buscando ${this.customer.name} - individual`
    );
  }
}
