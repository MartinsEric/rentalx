import { inject } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";

class CreateUserUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {}

  async execute(newUserDTO: ICreateUserDTO): Promise<void> {
    await this.userRepository.create(newUserDTO);
  }
}

export { CreateUserUseCase };
