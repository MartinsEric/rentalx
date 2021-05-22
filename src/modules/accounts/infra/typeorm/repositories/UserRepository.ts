import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { User } from "../entities/User";

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create(newUserDTO: ICreateUserDTO): Promise<void> {
    const newUser = this.repository.create({
      id: newUserDTO.id,
      name: newUserDTO.name,
      email: newUserDTO.email,
      password: newUserDTO.password,
      driverLicense: newUserDTO.driverLicense,
      avatar: newUserDTO.avatar,
    });

    await this.repository.save(newUser);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }
}

export { UserRepository };
