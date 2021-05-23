import { getRepository, Repository } from "typeorm";

import { ICreateCarDTO } from "../../../dtos/ICreateCarDTO";
import { ICarsRepository } from "../../../repositories/ICarsRepository";
import { Car } from "../entities/Car";

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async findByLicencePlate(licencePlate: string): Promise<Car> {
    const car = await this.repository.findOne({ licencePlate });

    return car;
  }

  async create(newCarDTO: ICreateCarDTO): Promise<Car> {
    const newCarEntity = this.repository.create(newCarDTO);

    const newCar = await this.repository.save(newCarEntity);

    return newCar;
  }
}

export { CarsRepository };
