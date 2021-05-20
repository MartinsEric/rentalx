import { AppError } from "../../../../errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { UserRepositoryInMemory } from "../../repositories/in-memory/UserRepositoryInMemory";
import { CreateUserUseCase } from "../createUserUseCase/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

describe("Authenticate User", () => {
  let authenticateUserUseCase: AuthenticateUserUseCase;
  let createUserUseCase: CreateUserUseCase;
  let userRepositoryInMemory: UserRepositoryInMemory;

  let user: ICreateUserDTO;

  beforeEach(async () => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
    authenticateUserUseCase = new AuthenticateUserUseCase(
      userRepositoryInMemory
    );

    user = {
      name: "User Test",
      email: "email@test.com",
      password: "12345",
      driverLicense: "01234",
    };

    await createUserUseCase.execute(user);
  });

  it("should be able to authenticate an user", async () => {
    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty("token");
  });

  it("should not be able to authenticate an user with incorrect email", async () => {
    await expect(async () => {
      await authenticateUserUseCase.execute({
        email: "invalid@email.com",
        password: user.password,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to authenticate an user with incorrect password", async () => {
    await expect(async () => {
      await authenticateUserUseCase.execute({
        email: user.email,
        password: "invalid pass",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
