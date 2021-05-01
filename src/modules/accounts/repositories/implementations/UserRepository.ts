import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create(newUserDTO: ICreateUserDTO): Promise<void> {
    const newUser = this.repository.create({
      name: newUserDTO.name,
      username: newUserDTO.username,
      email: newUserDTO.email,
      password: newUserDTO.password,
      driverLicence: newUserDTO.driverLicence,
    });

    await this.repository.save(newUser);
  }
}

export { UserRepository };
