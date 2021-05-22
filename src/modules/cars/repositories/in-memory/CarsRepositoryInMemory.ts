import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { Car } from "../../infra/typeorm/entities/Car";
import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async create({
    name,
    description,
    dailyRate,
    fineAmount,
    licencePlate,
    brand,
    categoryId,
  }: ICreateCarDTO): Promise<Car> {
    const car = new Car();

    Object.assign(car, {
      name,
      description,
      dailyRate,
      fineAmount,
      licencePlate,
      brand,
      categoryId,
    });

    this.cars.push(car);

    return car;
  }

  async findByLicencePlate(licencePlate: string): Promise<Car> {
    return this.cars.find((car) => car.licencePlate === licencePlate);
  }
}

export { CarsRepositoryInMemory };
