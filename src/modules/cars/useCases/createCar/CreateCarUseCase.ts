import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { Car } from "../../infra/typeorm/entities/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";

@injectable()
class CreateCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute({
    name,
    description,
    licencePlate,
    dailyRate,
    fineAmount,
    brand,
    categoryId,
  }: ICreateCarDTO): Promise<Car> {
    const car = await this.carsRepository.findByLicencePlate(licencePlate);

    if (car) {
      throw new AppError("A car with this licence plate already exists");
    }

    const newCar = await this.carsRepository.create({
      name,
      description,
      licencePlate,
      dailyRate,
      fineAmount,
      brand,
      categoryId,
    });

    return newCar;
  }
}

export { CreateCarUseCase };
