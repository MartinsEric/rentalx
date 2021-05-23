import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCarUseCase } from "./CreateCarUseCase";

class CreateCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      description,
      licencePlate,
      dailyRate,
      fineAmount,
      brand,
      categoryId,
    } = request.body;

    const createUserUseCase = container.resolve(CreateCarUseCase);

    const car = await createUserUseCase.execute({
      name,
      description,
      licencePlate,
      dailyRate,
      fineAmount,
      brand,
      categoryId,
    });

    return response.status(201).json(car);
  }
}

export { CreateCarController };
