import { AppError } from "../../../../errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

describe("Create Category", () => {
  let createCategoryUseCase: CreateCategoryUseCase;
  let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

  let categoryTest: { name: string; description: string };

  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );

    categoryTest = {
      name: "Category Test",
      description: "Description Category Test",
    };
  });

  it("should be able to create a new category", async () => {
    await createCategoryUseCase.execute(categoryTest);
    const categoryCreated = await categoriesRepositoryInMemory.findByName(
      categoryTest.name
    );

    expect(categoryCreated).toHaveProperty("id");
    expect(categoryCreated.name).toEqual(categoryTest.name);
    expect(categoryCreated.description).toEqual(categoryTest.description);
  });

  it("should not be able to create a new category that already exists", async () => {
    await expect(async () => {
      await createCategoryUseCase.execute(categoryTest);
      await createCategoryUseCase.execute(categoryTest);
    }).rejects.toBeInstanceOf(AppError);
  });
});
