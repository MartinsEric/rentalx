import { ICreateCarDTO } from "../../../dtos/ICreateCarDTO";
import { ICarsRepository } from "../../../repositories/ICarsRepository";
import { Car } from "../entities/Car";

class CarsRepository implements ICarsRepository {
  findByLicencePlate(licencePlate: string): Promise<Car> {
    throw new Error("Method not implemented.");
  }
  create(newCar: ICreateCarDTO): Promise<Car> {
    throw new Error("Method not implemented.");
  }
}

export { CarsRepository };
