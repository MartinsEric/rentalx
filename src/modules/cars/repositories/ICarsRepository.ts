import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { Car } from "../infra/typeorm/entities/Car";

interface ICarsRepository {
  create(newCar: ICreateCarDTO): Promise<Car>;
  findByLicencePlate(licencePlate: string): Promise<Car>;
}

export { ICarsRepository };
