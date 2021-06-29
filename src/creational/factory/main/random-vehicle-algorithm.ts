import { BicycleFactory } from "../factories/bicycle-factory";
import { CarFactory } from "../factories/car-factory";
import { randomNumbers } from "../utils/random-number";
import { Vehicle } from "../vehicle/vehicle";

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();

  const car1 = carFactory.getVehicle("Ford");
  const car2 = carFactory.getVehicle("Ferrari");
  const bicycle = bicycleFactory.getVehicle("Bicycle");

  const cars = [car1, car2, bicycle];

  return cars[randomNumbers(cars.length)];
}
