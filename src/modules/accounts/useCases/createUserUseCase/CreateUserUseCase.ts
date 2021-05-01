import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {}

  async execute(newUserDTO: ICreateUserDTO): Promise<void> {
    await this.userRepository.create(newUserDTO);
  }
}

export { CreateUserUseCase };
