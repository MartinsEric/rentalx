import { AppError } from "../../../../shared/errors/AppError";
import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

let createCarTestDTO: ICreateCarDTO;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);

    createCarTestDTO = {
      name: "Car test",
      description: "Description Car Test",
      brand: "Test",
      fineAmount: 10,
      licencePlate: "ABC-1234",
      dailyRate: 100,
      categoryId: "category",
    };
  });

  it("should be able to create a new car", async () => {
    const newCar = await createCarUseCase.execute(createCarTestDTO);

    expect(newCar).toHaveProperty("id");
    expect(newCar.licencePlate).toBe(createCarTestDTO.licencePlate);
  });

  it("should not be able to create a new car that licence plate alreary exists", async () => {
    await expect(async () => {
      await createCarUseCase.execute(createCarTestDTO);

      createCarTestDTO.name = "Car Test 2";

      await createCarUseCase.execute(createCarTestDTO);
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to create a new car that the available property is true by default", async () => {
    const newCar = await createCarUseCase.execute(createCarTestDTO);

    expect(newCar.available).toBeTruthy();
  });
});
