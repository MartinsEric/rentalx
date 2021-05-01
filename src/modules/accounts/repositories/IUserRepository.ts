import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

interface IUserRepository {
  create(newUserDTO: ICreateUserDTO): Promise<void>;
}

export { IUserRepository };
